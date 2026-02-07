//Night club
//let age=Number("How old are you?");
let age=21;
let guestlist="Are you in the guest list?(yes/no)"

if (age>=21 || guestlist===yes){
    console.log("welcome to the party");
}
else {
    console.log("Sorry, you're not on the list");
    
}

//Magic Shop
let gold=Number(prompt("How much gold do you have in your pocket?"));
let portion=Number(prompt("How many portions do you want?"));
let totalcost=portion*50;
  let remainder=gold-totalcost;

if (gold>= totalcost){
  
console.log("Transaction complete!you have ${remainder} gold left.");
}

else{
    console.log("You're too poor for these portions");
    
}