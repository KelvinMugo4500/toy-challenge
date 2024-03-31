// Prompt the user to input the speed of the car
let carSpeed = prompt("Enter the speed of the car (in km/h):");

// Convert the input to a number
carSpeed = parseFloat(carSpeed);

// Define the speed limit
const speedLimit = 70;

// Check if the speed is less than or equal to the speed limit
if (carSpeed <= speedLimit) {
    console.log("Ok");
} else {
    // Calculate demerit points for speeding
    const demeritPoints = Math.floor((carSpeed - speedLimit) / 5);

    // Output the total number of demerit points
    console.log(`Points: ${demeritPoints}`);

    // Check if the license should be suspended
    if (demeritPoints > 12) {
        console.log("License suspended");
    }
}
