function myClock() {
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  let hrs = document.querySelector("#hrs");
  let min = document.querySelector("#min");
  let sec = document.querySelector("#sec");

  let hrsrot = h * 30; // hours 12steps than clock varum so circle mothamma 360deg hours totalla 12 steps so we can divide (360/12) we can multiply this currenthrs as like as currentHrs * 360/12
  let minrot = m * 6; // it means minutes vanthu 60steps vaikkum so it is 360/60
  let secrot = s * 6;

  hrs.style.transform = `rotate(${hrsrot}deg)`;
  min.style.transform = `rotate(${minrot}deg)`;
  sec.style.transform = `rotate(${secrot}deg)`;
}
myClock();
setInterval(myClock, 1000);
