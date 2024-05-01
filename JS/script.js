const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const hError = document.querySelector("#h-error");
  const wError = document.querySelector("#w-error");

  if (isNaN(height) || height <= 0) {
    hError.textContent = "Invalid input";
  } else {
    hError.textContent = ""; // Clear any previous error message
  }

  if (isNaN(weight) || weight <= 0) {
    wError.textContent = "Invalid input";
  } else {
    wError.textContent = ""; // Clear any previous error message
  }

  if (!isNaN(height) && height > 0 && !isNaN(weight) && weight > 0) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi} kg/m<sup>2</sup></span>`;
  } else {
    result.textContent = ""; // Clear result if inputs are invalid
  }
});
