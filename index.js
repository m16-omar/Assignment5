// Define initial account balances
let senderBalance = 100000;
let receiverBalance = 10000;

// Function to handle the bank transfer process
function transferMoney() {
  // Step 1: Insert card 
  const insertCard = prompt("Please insert your card by typing 'Yes'");
  if (insertCard.toLowerCase() !== 'yes') {
    alert("Invalid input. Please try again.");
    return;
  }

  // Step 2: Enter PIN
  const pin = prompt("Please enter your PIN:");
  if (pin !== '1234') {
    alert("Incorrect PIN. Transaction canceled.");
    return;
  }

  // Step 3: Select transfer option
  const option = prompt("Type 1 to withdraw\nType 2 to transfer");
  if (option === '2') {
    // Step 4: Enter receiver account number
    const receiverAccountNumber = prompt("Please enter receiver's account number:");

    // Step 5: Select receiver bank
    const receiverBank = prompt("Please select receiver's bank:\n1. UBA\n2. Access Bank\n3. GTB");
    let bankName;
    switch (receiverBank) {
      case '1':
        bankName = "UBA";
        break;
      case '2':
        bankName = "Access Bank";
        break;
      case '3':
        bankName = "GTB";
        break;
      default:
        alert("Invalid bank selection. Transaction canceled.");
        return;
    }

    // Step 6: Confirm transaction
    const confirmTransaction = confirm(`Please confirm the transaction:\nReceiver's account number: ${receiverAccountNumber}\nBank: ${bankName}`);
    if (!confirmTransaction) {
      alert("Transaction canceled.");
      return;
    }

    // Step 7: Enter transfer amount
    const transferAmount = parseFloat(prompt("Please enter the transfer amount:"));
    if (isNaN(transferAmount) || transferAmount <= 0) {
      alert("Invalid amount. Transaction canceled.");
      return;
    }

    // Step 8: Deduct amount from sender and add to receiver
    senderBalance -= transferAmount;
    receiverBalance += transferAmount;

    // Step 9: Show transaction details
    const formattedSenderBalance = senderBalance.toLocaleString('en-US', { style: 'currency', currency: 'NGN' });
    const formattedReceiverBalance = receiverBalance.toLocaleString('en-US', { style: 'currency', currency: 'NGN' });
    alert(`Transfer successful!\nSender's previous balance: ₦100,000\nSender's new balance: ${formattedSenderBalance}\nReceiver's previous balance: ₦10,000\nReceiver's new balance: ${formattedReceiverBalance}`);
  } else {
    alert("Invalid option. Transaction canceled.");
  }
}

// Call the transferMoney function
transferMoney();
