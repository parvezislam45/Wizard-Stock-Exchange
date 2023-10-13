from django.urls import path
from .views import BuyShareAPIView, SellShareAPIView, AllTransactionAPIView

urlpatterns = [
    path('buy_share/', BuyShareAPIView.as_view(), name='buy_share'),
    path('sell_share/', SellShareAPIView.as_view(), name='sell_share'),
    path('all_transactions/', AllTransactionAPIView.as_view(), name='all_transactions')
]
