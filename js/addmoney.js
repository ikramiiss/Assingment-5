document.getElementById('btn-donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-amount-Number');
    const mainAmount = getTextFieldValueById('cashOut-main-amount');
    
    if ((mainAmount > addMoney) && !(isNaN(addMoney) || addMoney < 0)) {
        const newMainBalance = mainAmount - addMoney;

        const balance = getTextFieldValueById('add-money-noakhali')
        const newBalance = addMoney + balance;

        document.getElementById('add-money-noakhali').innerText = newBalance;
        document.getElementById('cashOut-main-amount').innerText = newMainBalance;

        document.getElementById('input-amount-Number').value = '';


        // const p = document.createElement('p');
        // p.classList.add('bg-base-100 border-base-300')
        // p.classList.add('date')
        // p.innerHTML = `<p>${addMoney}Taka is Donated for famine-2024 at Feni, Bangladesh <p>
        // `;
         
        // document.getElementById('btn-history').appendChild(p);

    }
    else {
        alert('Invalid donation amount or insufficient balance');
        

    }

})

// document.getElementById('btn-donate-noakhali').addEventListener('click', function (event) {
//     event.preventDefault();

//     const addMoney = getInputFieldValueById('input-amount-Number');
//     const mainAmount = getTextFieldValueById('cashOut-main-amount');

//     // 🛑 Convert values to numbers
//     const donateAmount = parseFloat(addMoney);
//     const totalBalance = parseFloat(mainAmount);

//     // ✅ Check if the user has enough money
//     if (totalBalance >= donateAmount) {
//         const newMainBalance = totalBalance - donateAmount;

//         const balance = getTextFieldValueById('add-money-noakhali');
//         const currentNoakhaliBalance = parseFloat(balance);

//         const newBalance = currentNoakhaliBalance + donateAmount;

//         // ✅ Update both balances
//         document.getElementById('cashOut-main-amount').innerText = newMainBalance;
//         document.getElementById('add-money-noakhali').innerText = newBalance;

//     } else {
//         alert('You do not have enough money to donate');
//     }
// });

