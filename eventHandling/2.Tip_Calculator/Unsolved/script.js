var tipPerc = document.querySelector("#tipPercentage");
var totalPrice = document.querySelector("#totalPrice");

var tipAmount = document.querySelector("#tip-amount");
var newTotal = document.querySelector("#new-total");

var submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function () {
    event.preventDefault();
    tipAmount.textContent = parseFloat(totalPrice.value) * parseFloat(tipPerc.value) / 100;
    newTotal.textContent = parseFloat(totalPrice.value) - parseFloat(tipAmount.textContent);
});