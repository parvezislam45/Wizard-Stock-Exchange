from django.db import models
from django.conf import settings
from accounts.models import CustomUser

User = settings.AUTH_USER_MODEL

class UserWallet(models.Model):
    user = models.OneToOneField(
        CustomUser,
        on_delete=models.CASCADE,
        primary_key=True,
        related_name='user_wallet_trades'
    )
    balance = models.FloatField(default=0.0)
    
    def __str__(self) -> str:
        return str(self.user)

class BuyTransaction(models.Model):
    # user_wallet = models.ForeignKey(UserWallet, on_delete=models.CASCADE)
    share_name = models.CharField(max_length=255)
    share_symbol = models.CharField(max_length=10)
    quantity = models.IntegerField()
    price = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return f"{self.user_wallet.user} {self.share_name} Quantity: {self.quantity}  Price: {self.price}"
    
class SellTransaction(models.Model):
    user_wallet = models.ForeignKey(UserWallet, on_delete=models.CASCADE)
    share_name = models.CharField(max_length=255)
    share_symbol = models.CharField(max_length=10)
    quantity = models.IntegerField()
    price = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
  