const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert minutes to HH:MM AM/PM
function formatTime(totalMinutes) {
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  let ampm = hours >= 12 ? "PM" : "AM";
  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12;
  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

// Constants
const trainDepartureHour = 15; // 3:00 PM
const trainDepartureMinute = 0;
const checkInBeforeDeparture = 60; // minutes
const travelToStation = 90; // Kasarani → Syokimau in minutes
const trainDuration = 5 * 60; // train time in minutes
const taxiDuration = 40; // minutes

// Ask for optional buffer
rl.question("Enter extra buffer time to leave home (minutes, e.g., 15): ", (bufferInput) => {
  let buffer = Number(bufferInput);
  if (isNaN(buffer) || buffer < 0) buffer = 0;

  // Calculate times
  let checkInTimeMinutes = trainDepartureHour * 60 + trainDepartureMinute - checkInBeforeDeparture;
  let latestArrivalTimeMinutes = checkInTimeMinutes;
  let departureFromHomeMinutes = latestArrivalTimeMinutes - travelToStation - buffer;
  let trainDepartureMinutes = trainDepartureHour * 60 + trainDepartureMinute;
  let arrivalAtMombasaMinutes = trainDepartureMinutes + trainDuration;
  let arrivalAtHotelMinutes = arrivalAtMombasaMinutes + taxiDuration;

  // Print results
  console.log("\n=== Korir Family Trip Planner ===");
  console.log(`Latest arrival at Syokimau station: ${formatTime(latestArrivalTimeMinutes)}`);
  console.log(`Recommended departure from Kasarani: ${formatTime(departureFromHomeMinutes)}`);
  console.log(`Estimated arrival at hotel in Diani: ${formatTime(arrivalAtHotelMinutes)}`);
  console.log(`Buffer time included: ${buffer} minutes\n`);

  rl.close();
});
