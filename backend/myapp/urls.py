from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('contact/', views.contact_form, name='contact_form_submission'),
    path('submit-report/', views.SubmitReportView.as_view(), name='submit-report'),
    path('notifications/', views.get_notifications, name='get_notifications'),
    path('start/', views.start_chat, name='start_chat'),
    path('message/', views.save_message, name='save_message'),
    path('history/<int:session_id>/', views.get_chat_history, name='get_chat_history'),
     path('sensor-data/', views.get_latest_sensor_data, name='sensor-data'),
]
