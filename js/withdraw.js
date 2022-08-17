document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldAmountString = withdrawField.value;
    const newWithdrawFieldAmount = parseFloat(withdrawFieldAmountString);

    withdrawField.value = '';
    if (isNaN(newWithdrawFieldAmount)) {
        alert('Please provide a valid input');
        return;
    }

    const previousWithdrawTotal = document.getElementById('withdraw-total');
    const previousWidthdrawTotalString = previousWithdrawTotal.innerText;
    const previousWidthdrawTotalAmount = parseFloat(previousWidthdrawTotalString);


    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    if (newWithdrawFieldAmount > previousBalanceTotalAmount) {
        alert('you have no sufficient balance in your account');
        return;
    }
    const currentWithdrawTotal = newWithdrawFieldAmount + previousWidthdrawTotalAmount;
    previousWithdrawTotal.innerText = currentWithdrawTotal.toFixed(2);

    const currentBalanceTotal = previousBalanceTotalAmount - newWithdrawFieldAmount;
    previousBalanceTotal.innerText = currentBalanceTotal.toFixed(2);
})