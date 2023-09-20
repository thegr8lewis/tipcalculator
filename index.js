var billInput = document.getElementsByClassName('billInput');
var tipInput = document.getElementsByClassName('tipInput');
var totalspan = document.getElementsByClassName('total');
var submit = document.getElementById('submitButton');


function calculate() {
  var billInput = document.querySelector('.billInput input');
  var tipInput = document.querySelector('.tipInput input');
  var totalSpan = document.querySelector('.total');

  // Ensure that you parse the input values as numbers
  var billAmount = parseFloat(billInput.value);
  var tipPercentage = parseFloat(tipInput.value);

  // Check if the parsed values are valid numbers
  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    alert('Please enter valid numbers for bill and tip percentage.');
    return; // Exit the function
  }

  // Calculate the totalValue
  var totalValue = ((billAmount * tipPercentage) / 100) + billAmount;

  // Set the totalValue as the text content of totalSpan
  totalSpan.textContent = totalValue.toFixed(2); // Assuming you want two decimal places
}

































































































