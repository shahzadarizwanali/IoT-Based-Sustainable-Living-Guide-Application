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

