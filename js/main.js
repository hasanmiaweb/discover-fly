function handlePricing(seatBooking, isIncraease) {
  const inputCount = document.getElementById(seatBooking + "Count");
  const inputNumber = parseInt(inputCount.value);
  let newNumberCount = inputNumber;
  if (isIncraease == true) {
    newNumberCount = inputNumber + 1;
  } else if (isIncraease == false && newNumberCount > 0) {
    newNumberCount = inputNumber - 1;
  }
  inputCount.value = newNumberCount;
  totalResult();
}

//Subtotal Cost, Vat Cost and total Cost
function totalResult() {
  const firstClassInput = document.getElementById("firstClassCount");
  const firstClassValue = parseInt(firstClassInput.value);
  const economyCountInput = document.getElementById("economyCount");
  const economyCountValue = parseInt(economyCountInput.value);

  const SubtotalCost = firstClassValue * 150 + economyCountValue * 100;
  document.getElementById("subtotal").innerText = "$" + SubtotalCost;
  const tax = SubtotalCost * 0.1;
  document.getElementById("vat").innerText = "$" + tax;
  const finalCost = SubtotalCost + tax;
  document.getElementById("finalCost").innerText = "$" + finalCost;
}

// order invoice

document.getElementById("bookNow").addEventListener("click", function () {
  document.getElementById("orderinvoice").style.display = "block";
  const FlyingFrom = document.getElementById("FlyingFrom").value;
  const FlyingFrom1 = document.getElementById("FlyingFrom2").value;
  document.getElementById("FlyingFrom1").innerText = FlyingFrom;
  document.getElementById("FlyingFrom2").innerText = FlyingFrom1;
});
