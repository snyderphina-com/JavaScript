
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 1: Ask for age
rl.question("How old are you? ", (age) => {
  age = Number(age);

  // Step 2: Ask about guest list
  rl.question("Are you on the guest list? (yes/no) ", (guestList) => {
    guestList = guestList.toLowerCase();

    // Step 3: Bouncer logic
    if (age >= 21 || guestList === "yes") {
      console.log("Welcome to the party! 🎉");
    } else {
      console.log("Sorry, you're not on the list. 🚫");
    }

    rl.close();
  });
});
