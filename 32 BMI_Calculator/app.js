let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let btn = document.querySelector("#btn");

let result = document.querySelector(".result");
let score = document.querySelector("#score");

// Calculate BMI
const totalBmi = () => {
  let newHeight = parseFloat(height.value);
  let newWeight = parseFloat(weight.value);
  newHeight = newHeight / 100;
  let sqrHeight = newHeight * newHeight;

  let bmi = newWeight / sqrHeight || 0;

  score.textContent = bmi.toFixed(2);
};

const resultBox = () => {
  result.style.display = "block";
  if (score.textContent < 18.6) {
    score.style.backgroundColor = "#ffeaa7";
  } else if (score.textContent < 24.6) {
    score.style.backgroundColor = "#55efc4";
  } else {
    score.style.backgroundColor = "#d63031";
  }
};
// EventListeners
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  totalBmi();
  resultBox();
});
