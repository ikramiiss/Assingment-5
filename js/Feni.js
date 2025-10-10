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

        alert('successfully  added ');

        

        const div = document.createElement('div');
div.classList.add(
  "bg-white",
  "border",
  "border-gray-300",
  "rounded-lg",
  "p-4",
  "mb-4",
  "shadow-sm"
);

div.innerHTML = `
  <p class="font-semibold text-lg text-gray-800">${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
  <p class="text-sm text-gray-500">Date: ${new Date().toString()}</p>
`;

document.getElementById('history-section').appendChild(div);

    }
    else {
        alert('Invalid donation amount or insufficient balance');
        

    }

    

})

