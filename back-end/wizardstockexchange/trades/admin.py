from django.contrib import admin
from .models import UserWallet,BuyTransaction,SellTransaction
# Register your models here.
admin.site.register(UserWallet)
admin.site.register(BuyTransaction)
admin.site.register(SellTransaction)