document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositFieldAmount = depositField.value;
    const newDepositAmount = parseFloat(depositFieldAmount);
    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid input');
        return;
    }

    const previousDepositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = previousDepositTotal.innerText;
    const previousDepositTotalAmount = parseFloat(previousDepositTotalString);

    const newDepositAmountTotal = newDepositAmount + previousDepositTotalAmount;
    previousDepositTotal.innerText = newDepositAmountTotal.toFixed(2);

    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = newDepositAmount + previousBalanceTotalAmount;
    previousBalanceTotal.innerText = newBalanceTotal.toFixed(2);
})