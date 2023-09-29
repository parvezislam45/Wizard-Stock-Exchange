from django.urls import path
from .views import user_register, user_login,logout_view,check_auth

urlpatterns = [
    path('register/', user_register, name='user-register'),
    path('login/', user_login, name='user-login'),
    path('logout/', logout_view, name='logout'),
    path('check-auth/', check_auth, name='check_auth'),
    
]

