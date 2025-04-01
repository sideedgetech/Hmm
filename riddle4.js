// Function to check the answer and display result
function checkAnswer(suspect) {
  const result = document.getElementById('result');

  if (suspect === 'kasen') {
    result.textContent = "Wrong answer! Try again.";
  } else if (suspect === 'fahhar') {
    result.textContent = "Wrong answer! Try again.";
  } else if (suspect === 'faze') {
    result.textContent = "Correct! Faze was the killer!";
  }
}
