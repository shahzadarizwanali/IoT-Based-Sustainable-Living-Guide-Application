from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import status
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import ChatSession
from rest_framework.views import APIView

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    """Handles user registration"""
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    """Handles user authentication using email"""
    email = request.data.get('email')
    password = request.data.get('password')

    # Find users with the given email
    users = User.objects.filter(email=email)

    if users.exists():
        user = users.first()  # Select the first user with the given email
        user = authenticate(request, username=user.username, password=password)

        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def logout_user(request):
    """Logs out the user"""
    logout(request)
    return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)

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