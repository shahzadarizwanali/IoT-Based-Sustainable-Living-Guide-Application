from django.shortcuts import redirect, render
from django.contrib.auth import logout, authenticate
from django.http import JsonResponse, HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password, make_password
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import status
from .serializers import ContactMessageSerializer, SignupSerializer
from .models import ChatSession, Signup, ChatSession, ChatMessage
from .serializers import ReportSerializer
from rest_framework.views import APIView
from datetime import date

import pandas as pd #type:ignore
import numpy as np
import joblib
from datetime import datetime, timedelta

import csv
import os
from django.http import JsonResponse
from django.conf import settings


# signup fuctionality
@api_view(['POST'])
def signup(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
        serializer.save()
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# login functionality
@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        try:
            user = Signup.objects.get(email=email)
        except Signup.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Invalid credentials'}, status=401)

        if check_password(password, user.password):
            # Return user data along with success message
            return JsonResponse({
                'status': 'success',
                'message': 'Login successful',
                'user': {
                    'name': user.name,  # Assuming `name` is a field in your Signup model
                    'email': user.email
                }
            }, status=200)
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid credentials'}, status=401)
     
# logout functionality           
def logout(request):
    if 'user_email' in request.session:
        del request.session['user_email']
    return redirect('Login')

# contact form functionality
@api_view(['POST'])
@permission_classes([AllowAny])
def contact_form(request):
    serializer = ContactMessageSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Thank you for contacting us. Our team will contact you within 24 hours."}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# chatbot function
class ChatView(APIView):
    def post(self, request):
        data = request.data
        user_query = data.get("user_query")
        session_id = data.get("session_id")

        if not session_id:
            session = ChatSession.objects.create()
        else:
            session = ChatSession.objects.filter(session_id=session_id).first()
            if not session:
                return Response({"error": "Invalid session ID"}, status=400)

        # ChatMessage.objects.create(session=session, sender="user", text=user_query)

        # TODO: Replace with AI logic
        bot_response = "Let me look into that for you!"
        # ChatMessage.objects.create(session=session, sender="bot", text=bot_response)

        return Response({
            "session_id": str(session.session_id),
            "bot_response": bot_response
        }, status=status.HTTP_200_OK)
        

@csrf_exempt
def start_chat(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = data.get("user", "")
        session, created = ChatSession.objects.get_or_create(user=user)
        return JsonResponse({"session_id": session.id})

# Save a message to the database
@csrf_exempt
def save_message(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        session_id = data.get("session_id")
        sender = data.get("sender")
        message = data.get("message")

        # Get the chat session
        session = ChatSession.objects.get(id=session_id)
        chat_message = ChatMessage.objects.create(session=session, sender=sender, message=message)

        return JsonResponse({"status": "success", "message_id": chat_message.id})

# Get chat history for a session
def get_chat_history(request, session_id):
    try:
        session = ChatSession.objects.get(id=session_id)
        messages = session.messages.all().values("sender", "message", "timestamp")
        return JsonResponse({"messages": list(messages)})
    except ChatSession.DoesNotExist:
        return JsonResponse({"error": "Session not found"}, status=404)

 
# submit report functionality       
class SubmitReportView(APIView):
    def post(self, request):
        serializer = ReportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Report submitted'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
# code to get notified about real time data and forecasted data    
model = joblib.load('myapp/models/decision_tree_model.joblib')

def get_notifications(request):
    try:
        df = pd.read_csv('myapp/static/sustainable_living_dataset_final.csv')
        features = df[['Temperature', 'Humidity', 'Carbon dioxide(CO2)', 'Nitrogen dioxide(NO2)',
                       'Ammonia(NH3)', 'Benzene(C6H6)', 'Carbon Monoxide(CO)']]

        predictions = model.predict(features)
        today = datetime.now()

        notifications_7day = []
        for i in range(7):
            day = today + timedelta(days=i+1)
            row = features.iloc[i]

            carbon_footprint = round(
                0.2 * row['Carbon dioxide(CO2)'] +
                0.15 * row['Carbon Monoxide(CO)'] +
                0.15 * row['Nitrogen dioxide(NO2)'] +
                0.15 * row['Ammonia(NH3)'] +
                0.15 * row['Benzene(C6H6)'] +
                0.1 * row['Temperature'] +
                0.1 * row['Humidity'], 2
            )

            sustainability = predictions[i]
            notifications_7day.append({
                "id": i+1,
                "title": f"{day.strftime('%A')}: Environment likely {'Sustainable 🌱' if sustainability == 1 else 'Not Sustainable ⚠️'}",
                "percentage": 80 if sustainability == 1 else 40,
                "is_read": False,
                "sustainability": bool(sustainability),
                "value": carbon_footprint,
                "date": day.strftime('%A')
            })

        # Generate 24-hour forecast
        last_known = features.tail(1).values
        forecast_24hour = []

        for i in range(24):
            hour = today + timedelta(hours=i)
            next_input = last_known + np.random.normal(0, 0.5, last_known.shape)

            if i % 3 == 0:
                next_input[0][2] *= 0.5  # CO2
                next_input[0][3] *= 0.5  # NO2
                next_input[0][4] *= 0.5  # NH3
                next_input[0][5] *= 0.5  # Benzene
                next_input[0][6] *= 0.5  # CO

            row = pd.DataFrame(next_input, columns=features.columns)
            prediction = model.predict(row)

            carbon_footprint = round(
                0.2 * row['Carbon dioxide(CO2)'].values[0] +
                0.15 * row['Carbon Monoxide(CO)'].values[0] +
                0.15 * row['Nitrogen dioxide(NO2)'].values[0] +
                0.15 * row['Ammonia(NH3)'].values[0] +
                0.15 * row['Benzene(C6H6)'].values[0] +
                0.1 * row['Temperature'].values[0] +
                0.1 * row['Humidity'].values[0], 2
            )

            forecast_24hour.append({
                "hour": hour.strftime("%H:%M"),
                "value": carbon_footprint
            })

            last_known = next_input

        return JsonResponse({
            "forecast_7day": notifications_7day,
            "forecast_24hour": forecast_24hour
        }, json_dumps_params={'ensure_ascii': False, 'indent': 4})

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV_PATH = os.path.join(BASE_DIR, 'sensor_data.csv')
    
# collection of real-time data
def get_sensor_data(request):
    if not os.path.exists(CSV_PATH):
        return JsonResponse({'error': 'CSV file not found'}, status=404)

    try:
        df = pd.read_csv(CSV_PATH)
        latest = df.iloc[-1]
        return JsonResponse({
            'temperature': latest['temperature'],
            'humidity': latest['humidity'],
            'co2': latest['co2'],
            'nh3': latest['nh3'],
            'benzene': latest['benzene'],
            'co': latest['co']
        })
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)