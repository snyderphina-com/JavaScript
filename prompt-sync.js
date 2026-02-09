const prompt=require ("prompt-sync")();
let potions = Number (prompt("how many portions do you want?"));
  let gold = Number(prompt("how many gold do you have?"));

    
   const  totalcost=potions*50;
   const remainder=gold-totalcost;

     if (gold >= potions * 50) {
      console.log(`Transaction complete! you have ksh. ${remainder} in your account`);
    } else {
      console.log("You are too poor!");
    }

