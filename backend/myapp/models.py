import uuid
from django.db import models

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.email}"
    

class CustomUser(models.Model):
    username = models.CharField(max_length=150, unique=True)  
    password = models.CharField(max_length=255)  

    def __str__(self):
        return self.username

class ChatSession(models.Model):
    session_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

# class ChatMessage(models.Model):
#     session = models.ForeignKey(ChatSession, on_delete=models.CASCADE, related_name='messages')
#     sender = models.CharField(max_length=10)  # 'user' or 'bot'
#     text = models.TextField()
#     timestamp = models.DateTimeField(auto_now_add=True)

class AirQualityData(models.Model):
    temperature = models.FloatField()
    humidity = models.FloatField()
    co2 = models.FloatField(verbose_name="Carbon dioxide (CO2)")
    no2 = models.FloatField(verbose_name="Nitrogen dioxide (NO2)")
    nh4 = models.FloatField(verbose_name="Ammonia (NH4)")
    c6h6 = models.FloatField(verbose_name="Benzene (C6H6)")
    co = models.FloatField(verbose_name="Carbon Monoxide (CO)")
    time_minutes = models.IntegerField()

    def __str__(self):
        return f"Minute {self.time_minutes} - CO2: {self.co2}"
