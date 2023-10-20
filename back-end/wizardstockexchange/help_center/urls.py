from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactMessageViewSet, help_center, live_chat

# Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r'contact-messages', ContactMessageViewSet)

urlpatterns = [
    path('send/', help_center, name='help_center'),
    path('api/', include(router.urls)),  # Include the API URLs
    path('live-chat/', live_chat, name='live_chat'),
]