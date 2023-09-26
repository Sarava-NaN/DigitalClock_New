// variables
let Hour = document.getElementById("hour");
let Minute = document.getElementById("minute");
let Sec = document.getElementById("second");
let am_pm = document.getElementById("am_pm");

let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");
// console.log(Hour, Minute, Sec, Rotate);
setInterval(() => {
  // Hours
  let SetHour = new Date().getHours();
  let Convert = SetHour > 12 ? SetHour - 12 : SetHour;
  let UpdatedHour = Convert < 10 ? "0" + Convert : Convert;

  Hour.innerText = UpdatedHour;

  // Minutes
  let SetMinutes = new Date().getMinutes();
  let UpdatedMinutes = SetMinutes < 10 ? "0" + SetMinutes : SetMinutes;
  Minute.innerText = UpdatedMinutes;
  // Seconds
  let SetSeconds = new Date().getSeconds();
  let UpdatedSeconds = SetSeconds < 10 ? "0" + SetSeconds : SetSeconds;
  Sec.innerText = UpdatedSeconds;
  // Am/Pm
  hr.style.transform = `rotateZ(${UpdatedHour * 30}deg)`;
  mn.style.transform = `rotateZ(${UpdatedMinutes * 6}deg)`;
  sc.style.transform = `rotateZ(${UpdatedSeconds * 6}deg)`;
  am_pm.innerText = SetHour < 12 ? "AM" : "PM";
}, 1000);
