from django.urls import path
from .views import buy_share, sell_share,success,allTransaction

urlpatterns = [
    path('buy_share/', buy_share, name='buy_share'),
    path('sell_share/', sell_share, name='sell_share'),
    path('success/', success, name='success'),
    path('wallet/',allTransaction, name='transaction')
]
