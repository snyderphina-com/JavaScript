const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 1: Ask for password
rl.question("Create a password: ", (password) => {

  // Step 2: Check password length
  console.log(
    password.length < 8
      ? "Too weak! ❌"
      : "Password secured. ✅"
  );

  rl.close();
});
