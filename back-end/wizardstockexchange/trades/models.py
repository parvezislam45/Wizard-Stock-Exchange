from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL
# class Share(models.Model):
#     name = models.CharField(max_length=255)
#     symbol = models.CharField(max_length=10)
#     price = models.FloatField()

class UserWallet(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.FloatField(default=0.0)
    
    def __str__(self) -> str:
        return str(self.user)

class BuyTransaction(models.Model):
    user_wallet = models.ForeignKey(UserWallet, on_delete=models.CASCADE)
    # share = models.ForeignKey(Share, on_delete=models.CASCADE)
    share_name = models.CharField(max_length=255)
    share_symbol = models.CharField(max_length=10)
    quantity = models.IntegerField()
    price = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return f"{self.user_wallet.user} {self.share_name} Quantity: {self.quantity}  Price: {self.price}"
    
class SellTransaction(models.Model):
    user_wallet = models.ForeignKey(UserWallet, on_delete=models.CASCADE)
    # share = models.ForeignKey(Share, on_delete=models.CASCADE)
    share_name = models.CharField(max_length=255)
    share_symbol = models.CharField(max_length=10)
    quantity = models.IntegerField()
    price = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
  