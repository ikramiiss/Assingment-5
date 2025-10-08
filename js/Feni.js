document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-fenimoney-Number');
    const mainAmount = getTextFieldValueById('cashOut-main-amount');
    
    if ((mainAmount > addMoney) && !(isNaN(addMoney) || addMoney < 0)){
        const newMainBalance = mainAmount - addMoney;

        const balance = getTextFieldValueById('add-money-feni')
        const newBalance = addMoney + balance;

        document.getElementById('add-money-feni').innerText = newBalance;
        document.getElementById('cashOut-main-amount').innerText = newMainBalance;


        document.getElementById('input-fenimoney-Number').value = '';

    }
    else {
        alert('Invalid donation amount or insufficient balance');
        

    }

    

})

