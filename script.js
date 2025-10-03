"use strict";

const rollDiceBtn = document.querySelector(".roll-dice-btn");
const parentEl = document.querySelector(".container");
const main = document.querySelector(".main");
const id = document.querySelector(".advice-id");
const text = document.querySelector(".advice-text");

rollDiceBtn.addEventListener("click", function () {
  const randomAdviceGenerator = async function () {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();
      console.log(data.slip.advice);
      id.innerHTML = `ADVICE #${data.slip.id}`;
      text.innerHTML = `"${data.slip.advice}"`;
    } catch (err) {
      console.log(err);
    }
  };
  randomAdviceGenerator();
});
