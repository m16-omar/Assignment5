function showTransactionForm() {
  document.getElementById('transactionModal').style.display = 'block';
}

function hideTransactionForm() {
  document.getElementById('transactionModal').style.display = 'none';
}

function showTransferDetails() {
  const transactionType = document.getElementById('transactionType').value;
  const transferDetails = document.getElementById('transferDetails');
  if (transactionType === 'transfer') {
      transferDetails.style.display = 'block';
  } else {
      transferDetails.style.display = 'none';
  }
}

function confirmTransaction() {
  const card = document.getElementById('card').value;
  const pin = document.getElementById('pin').value;
  const transactionType = document.getElementById('transactionType').value;
  const receiverAccount = document.getElementById('receiverAccount').value;
  const bank = document.getElementById('bank').value;
  const amount = document.getElementById('amount').value;

  if (transactionType === 'transfer') {
      const confirmTransfer = confirm(`Confirm transfer to ${receiverAccount} at ${bank} with amount NGN ${amount}?`);
      if (confirmTransfer) {
          const senderPreviousBalance = 100000;
          const receiverPreviousBalance = 10000;
          const senderNewBalance = senderPreviousBalance - amount;
          const receiverNewBalance = receiverPreviousBalance + parseInt(amount);

          alert(`Transaction successful!\nSender's Previous Balance: NGN ${senderPreviousBalance}\nSender's New Balance: NGN ${senderNewBalance}\nReceiver's Previous Balance: NGN ${receiverPreviousBalance}\nReceiver's New Balance: NGN ${receiverNewBalance}`);
          hideTransactionForm();
      } else {
          alert('Transaction cancelled.');
      }
  } else {
      // Logic for other transaction types (e.g., withdraw)
  }
}
