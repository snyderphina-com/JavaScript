// SETUP
let fuel = Number(prompt("Enter fuel level:"));
let angle = Number(prompt("Enter landing angle:"));
let commCheck = prompt("Communications check (yes/no):").toLowerCase();

// DECISION TREE

// Step 1: Communication check
if (commCheck === "no") {
  console.log("Mission failed: Lost contact with Earth! 📡❌");
}

// Step 2: Fuel check
else if (fuel < 20) {
  console.log("Mission failed: Crashed — out of fuel! ⛽💥");
}

// Step 3: Angle danger zones
else if (angle >= 0 && angle <= 5) {
  console.log("Mission failed: Bounced off the atmosphere! 🌍⬆️");
}
else if (angle > 45) {
  console.log("Mission failed: Burned up on entry! 🔥");
}

// WIN CONDITION
else if (fuel >= 20 && angle >= 10 && angle <= 30) {
  console.log("Mission successful: Welcome to Mars! 🪐🎉");
}

// Catch-all (bad angle but not deadly)
else {
  console.log("Mission failed: Unstable landing angle.");
}
