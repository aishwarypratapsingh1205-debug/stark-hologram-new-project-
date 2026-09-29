const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const ctx = overlay.getContext("2d");

const status = document.getElementById("status");
const gestureText = document.getElementById("gesture");
const output = document.getElementById("output");
const keyboard = document.getElementById("keyboard");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const clearBtn = document.getElementById("clear");
const cameraMessage = document.getElementById("cameraMessage");

let stream = null;
let running = false;
let handLandmarker = null;
let lastKey = "";
let lastPressTime = 0;

// ---------------- KEYBOARD ----------------

const rows = [
  ["1","2","3","4","5","6","7","8","9","0","-","=","BACKSPACE"],
  ["Q","W","E","R","T","Y","U","I","O","P","[","]","\\"],
  ["A","S","D","F","G","H","J","K","L",";","'","ENTER"],
  ["Z","X","C","V","B","N","M",",",".","/"],
  ["SPACE"]
];

const keyElements = [];

function createKeyboard() {
  keyboard.innerHTML = "";
  keyElements.length = 0;

  rows.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "key-row";

    row.forEach(key => {
      const button = document.createElement("div");

      button.className = "key";

      if (key === "SPACE") {
        button.classList.add("space");
      }

      button.textContent = key;
      button.dataset.key = key;

      button.addEventListener("click", () => {
        pressKey(key);
      });

      rowDiv.appendChild(button);
      keyElements.push(button);
    });

    keyboard.appendChild(rowDiv);
  });
}

function pressKey(key) {

  if (key === "BACKSPACE") {
    output.value = output.value.slice(0, -1);

  } else if (key === "ENTER") {
    output.value += "\n";

  } else if (key === "SPACE") {
    output.value += " ";

    }
