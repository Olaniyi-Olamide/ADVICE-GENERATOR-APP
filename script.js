"use strict";

// Elements
const rollDiceBtn = document.querySelector(".roll-dice-btn");
const adviceID = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");

const addAnnimation = function (text, id) {
  text.classList.add("fade-in");
  id.classList.add("fade-in");
};
const removeAnnimation = function (text, id) {
  text.classList.remove("fade-in");
  id.classList.remove("fade-in");
};

const randomAdviceGenerator = async function () {
  try {
    // Fetching data from API
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();

    // Adding fade-in Effect
    addAnnimation(adviceText, adviceID);

    setTimeout(() => {
      // Removiing fade-in Effect
      removeAnnimation(adviceText, adviceID);

      // Displaying data from API
      adviceID.innerHTML = `ADVICE #${data.slip.id}`;
      adviceText.innerHTML = `"${data.slip.advice}"`;
    }, 1500);
  } catch (err) {
    adviceText.innerHTML = new Error("Check Your network");
    adviceID.innerHTML = "";
  }
};

// Button to generate advice
rollDiceBtn.addEventListener("click", function () {
  randomAdviceGenerator();
});
