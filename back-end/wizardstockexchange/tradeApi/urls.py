from rest_framework import routers
from django.urls import path, include

from tradeApi.views import UserWalletViewSet,BuyShareViewSet,SellShareViewSet

router = routers.DefaultRouter()
router.register(r'user-wallets', UserWalletViewSet)
router.register(r'buy-shares', BuyShareViewSet)
router.register(r'sell-shares', SellShareViewSet)

urlpatterns = [
    path('', include(router.urls)),
]