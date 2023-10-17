from rest_framework import viewsets

from .models import UserWallet,BuyShare,SellShare
from .serializers import UserWalletSerializer,BuyShareSerializer,SellShareSerializer
from django.core.exceptions import ValidationError
from rest_framework.response import Response
from .models import UserWallet
from rest_framework import status


class UserWalletViewSet(viewsets.ModelViewSet):
    queryset = UserWallet.objects.all()
    serializer_class = UserWalletSerializer
    
class BuyShareViewSet(viewsets.ModelViewSet):
    queryset = BuyShare.objects.all()
    serializer_class = BuyShareSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user_wallet = serializer.validated_data["user_wallet"]
        print(user_wallet.balance)
        if user_wallet.balance < serializer.validated_data["price"] * serializer.validated_data["quantity"]:
            raise ValidationError("Insufficient balance.")

        buy_share = serializer.save()

        # Decrement the user's wallet balance by the price of the shares they are buying.
        user_wallet.balance -= serializer.validated_data["price"] * serializer.validated_data["quantity"]
        user_wallet.save()

        return Response(buy_share.id, status=status.HTTP_201_CREATED)
    

class SellShareViewSet(viewsets.ModelViewSet):
    queryset = SellShare.objects.all()
    serializer_class = SellShareSerializer
    

    def create(self, request, *args, **kwargs):
        
        user_wallet = request.data['user_wallet']
        stock_name = request.data['stock_name']
        quantity = request.data['quantity']
        price = request.data['price']

        # Check if the user wallet exists.
        try:
            user_wallet = UserWallet.objects.get(user=user_wallet)
        except UserWallet.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        # Check if the user has enough shares of the stock to sell.
        try:
            buyshare = BuyShare.objects.get(user_wallet=user_wallet, stock_name=stock_name)
        except BuyShare.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        if buyshare.quantity < int(quantity):
            return Response(status=status.HTTP_400_BAD_REQUEST)

        # Update the BuyShare model to reflect the sale.
        buyshare.quantity -= int(quantity)
        buyshare.save()

        # Update the user's wallet balance to reflect the proceeds from the sale.
        user_wallet.balance += int(quantity) * int(price)
        user_wallet.save()

        # Create the SellShare object.
        sell_share = SellShare(
            user_wallet=user_wallet,
            stock_name=stock_name,
            quantity=quantity,
            price=price
        )
        sell_share.save()

        # Return the SellShare object.
        serializer = SellShareSerializer(sell_share)
        return Response(serializer.data, status=status.HTTP_201_CREATED)