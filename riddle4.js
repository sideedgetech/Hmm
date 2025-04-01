// Function to check the selected answer
function checkAnswer(selectedSuspect) {
    const correctAnswer = 'fahhar';  // Set the correct answer here

    if (selectedSuspect === correctAnswer) {
        document.getElementById("result").innerHTML = "Correct! Fahhar is the liar!";
    } else {
        document.getElementById("result").innerHTML = "Wrong answer! Try again.";
        setTimeout(() => {
            window.location.href = "https://hypesquadriddle.vercel.app";  // Redirect if wrong answer
        }, 2000);  // 2-second delay before redirect
    }
}
