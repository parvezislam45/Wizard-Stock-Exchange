from django.contrib import admin
from .models import ContactMessage

# Register your models here.

# admin.site.register(ContactMessage)

# Register the ContactMessage model with the admin
@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'subject']
    search_fields = ['name', 'email', 'subject']
    list_filter = ['subject']