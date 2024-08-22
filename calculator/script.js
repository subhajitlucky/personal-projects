const displayValue = document.getElementById("display");
const buttons = document.querySelectorAll(".button"); // Corrected selector
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;
    if (buttonText === "AC") {
      displayValue.innerText = "0"; // Corrected to innerText
    } else if (buttonText === "DEL") {
      displayValue.innerText = displayValue.innerText.slice(0, -1);
    } else if (buttonText === "=") {
      try {
        displayValue.innerText = eval(displayValue.innerText);
      } catch {
        displayValue.innerText = "Error";
      }
    } else {
      if (displayValue.innerText === "0") {
        displayValue.innerText = buttonText;
      } else {
        displayValue.innerText += buttonText;
      }
    }
  });
});