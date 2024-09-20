document.getElementById('addMoneyBtn')
.addEventListener('click', function (event) {
   event.preventDefault();

   const inputAmount = GetPinNumberInputValueById('addMoney');
   const inputPin    = GetPinNumberInputValueById('addMoneyPin');
   const availAbleBalance = GetInputStringValueById('mainBalance');

   // validation proses
   if(isNaN(inputAmount)){
      alert('Failed Transaction');
      return;
   }
   
   if(inputPin === 1234){
    const currentBalance = inputAmount + availAbleBalance;
    document.getElementById('mainBalance').innerText = currentBalance;

   //  transaction history dynamically create
    const p = document.createElement('p');
    p.innerText = `Added : ${inputAmount} TK And Total Amount : ${currentBalance}`;
    document.getElementById('transaction-history').appendChild(p);

   } else{
    alert('wrong Identity')
   }

});

// Cash out proses
document.getElementById('CashOutBtn')
.addEventListener('click', function (event) {
   event.preventDefault();

   const cashOutAmount = GetPinNumberInputValueById('CashOutAmount');
   const CashOutPin    = GetPinNumberInputValueById('CashOutPin');
   const availAbleBalance = GetInputStringValueById('mainBalance');
   
      // validation proses
      if(isNaN(cashOutAmount)){
         alert('Failed Transaction');
         return;
      }

      if(cashOutAmount > availAbleBalance){
         alert('Insufficient Balance');
         return;
      }
      
   if(CashOutPin === 1234){
    const currentBalance = availAbleBalance - cashOutAmount;
    document.getElementById('mainBalance').innerText = currentBalance;

   //  transaction history dynamically create
    const div = document.createElement('div');
    div.style.background = 'yellow';
    div.innerText = `Cash out : ${cashOutAmount} TK And Total Amount : ${currentBalance}`;
    document.getElementById('transaction-history').appendChild(div);
   

   } else{
    alert('wrong Identity')
   }

});

// toggle section by click proses

document.getElementById('addMoney-showSection')
.addEventListener('click', function () {
   ShowSectionByClick('addMoney-form')
});

document.getElementById('cashOut-showSection')
.addEventListener('click', function () {
   ShowSectionByClick('cashOut-form')
});

document.getElementById('transaction-showSection')
.addEventListener('click', function () {
   ShowSectionByClick('Transaction-section')
});

