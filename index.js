let currentIndex = 0;
const formFields = ['cardField', 'pinField', 'transactionTypeField', 'receiverAccountField', 'bankField', 'amountField'];

function showNextField(nextFieldId) {
    // Hide the current field
    const currentField = document.getElementById(formFields[currentIndex]);
    currentField.style.display = 'none';

    // Show the next field
    const nextField = document.getElementById(nextFieldId);
    nextField.style.display = 'block';

    // Increment the index for the next field
    currentIndex++;
}

function confirmTransaction() {
    // Get form data
    const card = document.getElementById('card').value;
    const pin = document.getElementById('pin').value;
    const transactionType = document.getElementById('transactionType').value;
    const receiverAccount = document.getElementById('receiverAccount').value;
    const bank = document.getElementById('bank').value;
    const amount = document.getElementById('amount').value;

    // Perform transaction confirmation logic (for demonstration, simply show an alert)
    alert(`Confirm transaction:\nCard: ${card}\nPIN: ${pin}\nTransaction Type: ${transactionType}\nReceiver's Account: ${receiverAccount}\nBank: ${bank}\nAmount: ${amount}`);
}
