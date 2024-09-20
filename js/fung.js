// that function convert a number
function GetPinNumberInputValueById(id){
     const inputValue = document.getElementById(id).value;
     const inputNumber = parseFloat(inputValue);
     return inputNumber;
}
// that function convert string to number
function GetInputStringValueById(id){
     const balance = document.getElementById(id).innerText;
     const inputBalance = parseFloat(balance);
     return inputBalance;
}

// toggle section function

function ShowSectionByClick(id){
       // that proses hidden section
     document.getElementById('addMoney-form').classList.add('hidden');
     document.getElementById('cashOut-form').classList.add('hidden');
     document.getElementById('Transaction-section').classList.add('hidden');

     // that proses show section
     document.getElementById(id).classList.remove('hidden');
}