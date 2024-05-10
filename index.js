// Bank accounts database
let accounts = [
    { username: "0123456789", balance: 1000 },
    { username: "0123456789", balance: 500 },
    { username: "0123456789", balance: 1500 }
  ];
  
  // Function to find account by username
  function findAccount(username) {
    return accounts.find(account => account.username === username);
  }
  
  // Function to transfer money
  function transferMoney(sender, recipient, amount) {
    const senderAccount = findAccount(sender);
    const recipientAccount = findAccount(recipient);
  
    if (!senderAccount || !recipientAccount) {
      alert("Invalid sender or recipient.");
      return;
    }
  
    if (senderAccount.balance < amount) {
      alert("Insufficient funds.");
      return;
    }
  
    senderAccount.balance -= amount;
    recipientAccount.balance += amount;
  
    alert(`Transfer successful! ${amount} funds transferred from ${sender} to ${recipient}.`);
  }
  
  // Main function
  function main() {
    const sender = prompt("Enter recipient's account number:");
    const recipient = prompt("Enter recipient's account name:");
    const amount = parseFloat(prompt("Enter the amount to transfer:"));
  
    if (!sender || !recipient || isNaN(amount) || amount <= 0) {
      alert("Invalid input. Please try again.");
      return;
    }
  
    const confirmMsg = `Confirm transfer of ${amount} funds from ${sender} to ${recipient}?`;
    const confirmed = confirm(confirmMsg);
  
    if (confirmed) {
      transferMoney(sender, recipient, amount);
    } else {
      alert("Transfer cancelled.");
    }
  }
  
  // Call the main function
  main();
  