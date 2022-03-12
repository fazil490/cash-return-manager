const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const changeTable = document.querySelector(".change-table");

const availableNotes = ["2000", "500", "200", "100", "50", "20", "10", "5", "2", "1"];

changeTable.style.display = "none";

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();

    const billAmountValue = Number(billAmount.value);
    const cashGivenValue = Number(cashGiven.value);

    if (billAmountValue > 0) {
        if (cashGivenValue > billAmountValue) {
            const amountToBeReturned = cashGivenValue - billAmountValue;
            calculateChange(amountToBeReturned);
            changeTable.style.display = "block";
        } else if (cashGivenValue === billAmountValue) {
            showMessage("No change to return.");
            changeTable.style.display = "none";
        } else {
            showMessage("Cash given is less than bill.");
            changeTable.style.display = "none";
        }
    } else {
        showMessage("Invalid bill amount.");
        changeTable.style.display = "none";
    }

});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function hideMessage() {
    message.style.display = "none";
}