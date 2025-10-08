document.getElementById('btn-quota').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-quota-Number');
    const mainAmount = getTextFieldValueById('cashOut-main-amount');
    
    if ((mainAmount > addMoney) && !(isNaN(addMoney) || addMoney < 0)){
        const newMainBalance = mainAmount - addMoney;

        const balance = getTextFieldValueById('add-money-quota')
        const newBalance = addMoney + balance;

        document.getElementById('add-money-quota').innerText = newBalance;
        document.getElementById('cashOut-main-amount').innerText = newMainBalance;


        document.getElementById('input-quota-Number').value = '';

    }
    else {
        alert('Invalid donation amount or insufficient balance');
        

    }

    

})