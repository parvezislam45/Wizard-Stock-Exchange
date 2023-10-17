
from django.forms import ModelForm
from .models import BuyTransaction, SellTransaction

class BuyShareForm(ModelForm):
    class Meta:
        model = BuyTransaction
        fields = ['share_name', 'share_symbol', 'quantity', 'price']

class SellShareForm(ModelForm):
    class Meta:
        model = SellTransaction
        fields = ['share_name', 'share_symbol', 'quantity', 'price']