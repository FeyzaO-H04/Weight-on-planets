const weight = document.querySelector("#weight-el");
const mercuryResult = document.querySelector("#mercury-el");
const venusResult = document.querySelector("#venus-el");
const marsResult = document.querySelector("#mars-el");
const jupiterResult = document.querySelector("#jupiter-el");
const saturnResult = document.querySelector("#saturn-el");
const uranusResult = document.querySelector("#uranus-el");
const neptuneResult = document.querySelector("#neptune-el");
const plutoResult = document.querySelector("#pluto-el");
const sunResult = document.querySelector("#sun-el");
const moonResult = document.querySelector("#moon-el");

// function calculates the weights on different planets and writes them as content.
const calculateButton = () => {
  mercuryResult.textContent = (weight.value * 0.38).toFixed(2);
  venusResult.textContent = (weight.value * 0.91).toFixed(2);
  marsResult.textContent = (weight.value * 0.38).toFixed(2);
  jupiterResult.textContent = (weight.value * 2.34).toFixed(2);
  saturnResult.textContent = (weight.value * 1.06).toFixed(2);
  uranusResult.textContent = (weight.value * 0.92).toFixed(2);
  neptuneResult.textContent = (weight.value * 1.19).toFixed(2);
  plutoResult.textContent = (weight.value * 0.06).toFixed(2);
  sunResult.textContent = (weight.value * 27.01).toFixed(2);
  moonResult.textContent = (weight.value * 0.166).toFixed(2);
}

// function resets the input.
weight.addEventListener("dblclick", function(){
  weight.value = ""
})



