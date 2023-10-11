from django.shortcuts import render, redirect
from .models import ContactMessage
from django.http import HttpResponse
# Create your views here.

# def help_center(request):
#     return render(request, 'help_center.html')



def help_center(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        # Create a new ContactMessage object and save it to the database
        ContactMessage.objects.create(name=name, email=email, subject=subject, message=message)

        # Redirect to a thank-you page
        # return redirect('thank_you_page')
        return HttpResponse("<h1> THANK YOU FOR CONTACTING US! </h1>")

    return render(request, 'help_center.html')