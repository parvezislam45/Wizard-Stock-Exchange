from rest_framework import serializers
from .models import UserWallet,BuyTransaction,SellTransaction

class UserWalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserWallet
        fields = '__all__'

class BuyTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuyTransaction
        fields = ['share_name', 'share_symbol', 'quantity','price']
        
    def create(self, validated_data):
        buy_transaction = BuyTransaction(
            share_name=validated_data['share_name'],
            share_symbol=validated_data['share_symbol'],
            quantity=validated_data['quantity'],
            price=validated_data['price'],
        )
        return buy_transaction

class SellTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellTransaction
        fields = '__all__'