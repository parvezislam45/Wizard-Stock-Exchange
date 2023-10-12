from django.shortcuts import render, redirect
from .models import UserWallet, BuyTransaction, SellTransaction

def buy_share(request):
    if request.method == 'POST':
        share_name =request.POST['share_name']
        share_symbol = request.POST['share_symbol']
        quantity = int(request.POST['quantity'])
        price = float(request.POST['price'])


        # Get the user's wallet object
        user_wallet = UserWallet.objects.get(user=request.user)

        # Check if the user has enough balance to buy the shares
        if user_wallet.balance >= price * quantity:
            # Create a new BuyTransaction object
            buy_transaction = BuyTransaction(
                user_wallet=user_wallet,
                share_name=share_name,
                share_symbol = share_symbol,
                quantity=quantity,
                price=price
            )
            buy_transaction.save()

            # Update the user's wallet balance
            user_wallet.balance -= price * quantity
            user_wallet.save()

            return redirect('success')
        else:
            return render(request, 'trades/error.html', {'error': 'Insufficient balance'})
    else:
        return render(request, 'trades/buy_share.html', {'shares': 'share list'})

 

def sell_share(request):
    if request.method == 'POST':
        share_name = request.POST['share_name']
        share_symbol = request.POST['share_symbol']
        quantity = int(request.POST['quantity'])
        price = float(request.POST['price'])
        
        print(quantity)

        # Get the share object for the given symbol

        # Get the user's wallet object
        user_wallet = UserWallet.objects.get(user=request.user)
        buy_transaction = BuyTransaction.objects.get(user_wallet=user_wallet,share_name=share_name)
        # Check if the user has enough shares to sell
        print(buy_transaction.quantity)
        if buy_transaction.quantity >= quantity:
            # Create a new SellTransaction object
            sell_transaction = SellTransaction(
                user_wallet=user_wallet,
                share_name=share_name,
                share_symbol= share_symbol,
                quantity=quantity,
                price=price
            )
            sell_transaction.save()
            
            buy_transaction.quantity -= quantity
            # Update the user's wallet balance
            user_wallet.balance += price * quantity
            user_wallet.save()

            return redirect('success')
        else:
            return render(request, 'trades/error.html', {'error': 'Insufficient shares'})
    else:
        return render(request, 'trades/sell_share.html', {'shares': 'share list'})


def success(request):
    return render(request, 'trades/success.html')

def allTransaction(request):
    user_wallet = UserWallet.objects.get(user=request.user)
    buy_transaction = BuyTransaction.objects.filter(user_wallet=user_wallet).values()
    sell_transaction = SellTransaction.objects.filter(user_wallet=user_wallet)
    
    context = {
        'buy_history': buy_transaction,
        'sell_history': sell_transaction
    }
    
    return render(request, 'trades/wallet.html', {'history': context})
