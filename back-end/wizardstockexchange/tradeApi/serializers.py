from rest_framework import serializers
from .models import BuyShare,UserWallet,SellShare

class UserWalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserWallet
        fields = ['user', 'balance']
        
class BuyShareSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuyShare
        fields = ['id','user_wallet','stock_name', 'stock_symbol', 'quantity', 'price', 'created_at', 'updated_at']


class SellShareSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellShare
        fields = ['id', 'user_wallet', 'stock_name', 'stock_symbol', 'quantity', 'price', 'created_at', 'updated_at']