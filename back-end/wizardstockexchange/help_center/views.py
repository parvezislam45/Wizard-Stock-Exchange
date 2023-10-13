from django.shortcuts import render, redirect
from .models import ContactMessage
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import ContactMessageSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

# ViewSet for ContactMessage
class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    # Additional actions or custom methods for the ContactMessage API can be defined here
    def create_contact_message(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def help_center(request):
    return render(request, 'help_center.html')


# def help_center(request):
#     if request.method == 'POST':
#         name = request.POST.get('name')
#         email = request.POST.get('email')
#         subject = request.POST.get('subject')
#         message = request.POST.get('message')

#         # Create a new ContactMessage object and save it to the database
#         ContactMessage.objects.create(name=name, email=email, subject=subject, message=message)

#         # Redirect to a thank-you page
#         # return redirect('thank_you_page')
#         return HttpResponse("<h1> THANK YOU FOR CONTACTING US! </h1>")

#     return render(request, 'help_center.html')