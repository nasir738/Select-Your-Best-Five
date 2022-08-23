document
  .getElementById("butn-calculate")
  .addEventListener("click", function () {
    let parPlayerCost = parPlayerBuddget();
    let parPlayerBuddgetTotalAmount = parPlayerCost * number;

    let playerExpence = document.getElementById("expenses-toatl");
    playerExpence.innerText = parPlayerBuddgetTotalAmount;
  });

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    let playerExpence = document.getElementById("expenses-toatl");
    let playerExpenceString = playerExpence.innerText;
    let playerExpenceAmount = parseFloat(playerExpenceString);

    let managerINputField = document.getElementById("manager-input");
    let managerINputFieldString = managerINputField.value;
    let managerINputFieldAmount = parseFloat(managerINputFieldString);

    let coachInputfield = document.getElementById("coach-input");
    let coachInputfieldString = coachInputfield.value;
    let coachInputfieldAmount = parseFloat(coachInputfieldString);

    let totalCoast =
      playerExpenceAmount + managerINputFieldAmount + coachInputfieldAmount;

    let totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = totalCoast;
  });
