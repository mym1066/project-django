from django.urls import path
from .views import login_user,register, log_out,chat,login_phone


urlpatterns = [
    path('login', login_user),
    path('register', register),
    path('chat', chat),
    path('log-out', log_out),
   path('login_phone',login_phone), 
    
    
]