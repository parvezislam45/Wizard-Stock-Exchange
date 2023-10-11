from django.urls import path
from .views import help_center

urlpatterns = [
    path('', help_center, name='help_center'),
]