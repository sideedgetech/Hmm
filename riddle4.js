// Function to check the selected answer
function checkAnswer(selectedSuspect) {
    const correctAnswer = 'fahhar';  // Set the correct answer here

    if (selectedSuspect === correctAnswer) {
        document.getElementById("result").innerHTML = "Correct! Fahhar is the liar!";
        // Redirect to final.html after correct answer
        setTimeout(() => {
            window.location.href = "final.html";  // Redirect to final.html
        }, 2000);  // 2-second delay before redirect
    } else {
        document.getElementById("result").innerHTML = "Wrong answer! Try again.";
        // No redirect for wrong answer, just display the message
    }
}
