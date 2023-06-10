let secHand = document.querySelector(".seconds");
let minHand = document.querySelector(".minute");
let hrHand = document.querySelector(".hour");
let date = document.querySelector(".date");
let time = document.querySelector(".time");

setInterval(klockHands, 1000);
function klockHands() {
  let current = new Date();

  let second = current.getSeconds();
  let secDegree = (second * 360) / 60 + 180;
  secHand.style.transform = `rotate(${secDegree}deg)`;

  let minute = current.getMinutes();
  let minDegree = (minute * 360) / 60 + 180;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  let hour = current.getHours();
  if (hour > 12) {
    hour -= 12;
  }
  let hrDegree = (hour * 360) / 12 + (minute * 30) / 60 + 180;
  hrHand.style.transform = `rotate(${hrDegree}deg)`;
}

setInterval(currentDate, 1000);
function currentDate() {
  let current = new Date();
  let d = current.toDateString();
  date.innerHTML = d;
}

setInterval(currentTime, 1000);
function currentTime() {
  let current = new Date();
  let d = current.toLocaleTimeString();
  time.innerHTML = d;
}
