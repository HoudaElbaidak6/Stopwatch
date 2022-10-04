let spans = document.querySelectorAll("span");
let startBtn = document.getElementById("start");
let intervall;

let countMillie = 0;
let countSeconds = 0;
let countMinutes = 0;
let countHours = 0;
let started = false;

function Add() {
  countMillie = countMillie + 5;
  if (countMillie == 1000) {
    countMillie = 0;
    countSeconds++;
  }
  if (countSeconds == 60) {
    countSeconds = 0;
    countMinutes++;
  }

  if (countMinutes == 60) {
    countMinutes++;
    countHours++;
  }

  spans[3].textContent = countMillie + "ms";
  spans[2].textContent = countSeconds + "s";
  spans[1].textContent = countMinutes + "min";
  spans[0].textContent = countHours + "h";
}

function start() {
  intervall = setInterval(Add, 1);
  
}

function reset() {
  clearInterval(intervall);
  countMillie = 0;
  countSeconds = 0;
  countMinutes = 0;
  countHours = 0;
  spans[3].textContent = countMillie + "ms";
  spans[2].textContent = countSeconds + "s";
  spans[1].textContent = countMinutes + "min";
  spans[0].textContent = countHours + "h";
  
}

function stop() {
  clearInterval(intervall);
}
