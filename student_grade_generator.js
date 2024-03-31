// Prompt the user to input student marks
let studentMarks = prompt("Enter student marks (between 0 and 100):");

// Convert the input to a number
studentMarks = parseFloat(studentMarks);

// Check if the input is valid
if (isNaN(studentMarks) || studentMarks < 0 || studentMarks > 100) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
} else {
    // Determine the grade based on the input marks
    let grade;
    if (studentMarks > 79) {
        grade = "A";
    } else if (studentMarks >= 60 && studentMarks <= 79) {
        grade = "B";
    } else if (studentMarks >= 50 && studentMarks <= 59) {
        grade = "C";
    } else if (studentMarks >= 40 && studentMarks <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Output the grade
    console.log(`Student Grade: ${grade}`);
}
