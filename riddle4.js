// Function to check the answer and display result
function checkAnswer(suspect) {
  const result = document.getElementById('result');

  // Display the wrong answer message for Kasen or Fahhar
  if (suspect === 'kasen') {
    result.textContent = "Wrong answer! Try again.";
    setTimeout(function() {
      window.location.href = "https://hypesquadriddle.vercel.app"; // Redirect to the specified page after 2 seconds
    }, 2000);  // 2-second delay for redirection
  } else if (suspect === 'fahhar') {
    result.textContent = "Wrong answer! Try again.";
    setTimeout(function() {
      window.location.href = "https://hypesquadriddle.vercel.app"; // Redirect to the specified page after 2 seconds
    }, 2000);  // 2-second delay for redirection
  } else if (suspect === 'faze') {
    result.textContent = "Correct! Faze was the killer!";
  }
}
