// Step 1: Setup
const correctPin = 1234;
let currentBalance = 1000;

// Step 2: Ask for PIN
let enteredPin = Number(prompt("Enter your PIN:"));

// Step 3: Check PIN
if (enteredPin !== correctPin) {
  console.log("ACCESS DENIED ❌");
} else {
  // Step 4: PIN correct → ask for withdrawal
  let withdrawalAmount = Number(prompt("Enter withdrawal amount:"));

  // Step 5: Check funds
  if (withdrawalAmount > currentBalance) {
    console.log("Insufficient funds. 💸");
  } else {
    // Step 6: Deduct amount
    currentBalance -= withdrawalAmount;

    // Step 7: Ask if user wants a receipt
    let wantReceipt = prompt("Do you want a receipt? (yes/no)").toLowerCase();

    console.log(`Transaction complete! ✅`);
    console.log(`Your new balance is: $${currentBalance}`);

    if (wantReceipt === "yes") {
      console.log(`--- RECEIPT ---`);
      console.log(`Withdrawal: $${withdrawalAmount}`);
      console.log(`Remaining Balance: $${currentBalance}`);
      console.log(`Thank you for banking with Cyberbank! 🏦`);
      console.log(`----------------`);
    }
  }
}
