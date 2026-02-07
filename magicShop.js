const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("How many potions do you want? ", (potions) => {
  rl.question("How much gold do you have? ", (gold) => {
    potions = Number(potions);
    gold = Number(gold);

    if (gold >= potions * 50) {
      console.log("Transaction complete!");
    } else {
      console.log("You are too poor!");
    }

    rl.close();
  });
});