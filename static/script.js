const display = document.getElementById("display");
const sound = document.getElementById("click-sound");

function appendToDisplay(value) {
  display.value += value;
  playSound();
}

function clearDisplay() {
  display.value = "";
  playSound();
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  playSound();
}

function calculate() {
  try {
    display.value = Function('"use strict";return (' + display.value + ')')();
  } catch {
    display.value = "Error";
  }
  playSound();
}

function playSound() {
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
