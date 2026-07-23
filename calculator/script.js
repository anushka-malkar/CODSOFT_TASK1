// Select elements
const display = document.getElementById("display");
const historyList = document.getElementById("historyList");


// ➕ Add value
function append(value) {
  playSound();
  display.value += value;
}


// ❌ Clear display
function clearDisplay() {
  playSound();
  display.value = "";
}


// 🧠 Calculate with safety + history
function calculate() {
  try {
    if (display.value.trim() === "") return;

    const result = eval(display.value);

    // Handle invalid results
    if (!isFinite(result)) throw "Error";

    // Save history
    const li = document.createElement("li");
    li.textContent = display.value + " = " + result;
    historyList.prepend(li);

    display.value = result;
  } catch {
    display.value = "Invalid";
  }
}


// ⌨️ Keyboard support
document.addEventListener("keydown", function (e) {
  const key = e.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    display.value += key;
  } 
  else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } 
  else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } 
  else if (key === "Escape") {
    clearDisplay();
  }
});


// 🔊 Sound effect (optimized)
function playSound() {
  const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
  audio.volume = 0.2;
  audio.play().catch(() => {}); // avoid errors
}


// 🎨 Theme switcher
function setTheme(theme) {
  document.body.className = theme;
}


// 📜 Clear history (optional feature)
function clearHistory() {
  historyList.innerHTML = "";
}
