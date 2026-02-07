// Step 1: Ask for Hero Class
let heroClass = prompt("Choose your Hero Class (Warrior or Mage):").toLowerCase();

// Step 2: Ask for Weapon Power
let weaponPower = Number(prompt("Enter your Weapon Power (Number):"));

// Step 3: Ask for Action
let action = prompt("Choose your Action (Attack or Shield):").toLowerCase();

// Step 4: Determine outcome
let story = "";

if (heroClass === "warrior") {
  if (action === "attack") {
    if (weaponPower > 50) {
      story = "With a mighty swing, the Warrior strikes true! The dragon falls defeated, and the village is saved!";
    } else {
      story = "The Warrior attacks bravely, but the weapon is too weak. The dragon roars and escapes into the mountains!";
    }
  } else if (action === "shield") {
    story = "The Warrior raises their shield just in time. They survive the dragon’s fury, but the dragon escapes, leaving the hero frustrated.";
  } else {
    story = "Invalid action. The dragon takes advantage and flees!";
  }
} else if (heroClass === "mage") {
  if (action === "attack") {
    if (weaponPower > 80) {
      story = "The Mage channels all their magical energy and strikes the dragon down! A surprising victory!";
    } else {
      story = "The Mage’s attack fizzles. The dragon laughs and flies away unharmed!";
    }
  } else if (action === "shield") {
    story = "The Mage casts a protective spell and then counters with a magic missile. The dragon is defeated by clever magic!";
  } else {
    story = "Invalid action. The dragon notices the hesitation and escapes!";
  }
} else {
  story = "Invalid hero class! The dragon senses weakness and flies away!";
}

// Step 5: Print the story
console.log(story);
