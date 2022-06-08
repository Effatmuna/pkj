"use strict";

//let depth = 42;
//let dis = 0;
//let count = 0;
//while (1) {
//count++;
//dis = dis + 7;
//if (dis >= depth) {
//break;
//} else {
//dis = dis - 2;
//}
//}
//console.log(count);
//var dialines = document.getElementsByClassName("dialines");
//var clockE = document.getElementsByClassName("clock")[0];
//for (var i = 1; i < 60; i++) {
// clockE.innerHTML += "<div class='dialines'></div>";
// dialines[i].style.transform = "rotate(" + 6 * i + "deg)";
//}
//function clock() {
// var weekDay = new Array(7),
//  d = new Date(),
//  h = d.getHours(),
//  m = d.getMinutes(),
//  s = d.getSeconds(),
//  date = d.getDate(),
// month = d.getMonth() + 1,
// year = d.getYear(),
// hDeg = h * 30 + m * (360 / 720),
//  mDeg = m * 30 + s * (360 / 720),
//  sDeg = s * 6,
//  hE = document.querySelector(".hour-hand"),
// mE = document.querySelector(".minute-hand"),
// sE = document.querySelector(".second-hand"),
// dateE = document.querySelector(".date"),
//  dayE = document.querySelector(".day");

// weekDay[0] = "Sunday";
// weekDay[0] = "Monday";
// weekDay[0] = "Tuesday";
// weekDay[0] = "Wednesday";
// weekDay[0] = "Thusday";
// weekDay[0] = "Friday";
// weekDay[0] = "Saturday";

// var day = weekDay[d.getDay()];
// hE.style.transform = "rotate(" + hDeg + "deg)";
// mE.style.transform = "rotate(" + mDeg + "deg)";
// sE.style.transform = "rotate(" + sDeg + "deg)";
//  dateE.innerHTML = date + "/" + month + "/" + year;
// dayE.innerHTML = day;
//}
//setInterval("clock()", 100);
"use strict";
var screens = document.querySelector("#screen");
var clear = document.querySelector("#clear");
var sign = document.querySelector("#sign");

var memory = 0;
var memorycalc = 0;
var c = false;
var flag = false;
var screen = function (p) {
  if (p == "." && flag == true) {
    return;
  }
  if (c == true) {
    screens.val("");
    c = false;
  }
  var r = screens.val("") + p;
  if (p == ".") {
    flag = true;
  } else {
    r = r * 1;
  }
  screens.val(" ");
};
var backspace = document.querySelector("#backspace");
var digits = document.querySelector(".digits");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var multiply = document.querySelector("#multiply");
var devide = document.querySelector("#devide");
var equal = document.querySelector("#equal");

var calculate = function (p) {
  if (memory) {
    return;
  }
  flag = false;
  c = true;
  memory = screens.val("");
  memorycalc = p;
};
clear.addEventListener("click", function () {
  memory = 0;
  screens.value(" ");
});
sign.addEventListener("click", function () {
  screens.val(screens.val() * -1);
});
backspace.addEventListener("click", function () {
  var len = screens.val().length;
  screens.val(screens.val().substring(0, len - 1));
  if (screens.val().length == 0) {
    screens.val(0);
  }
});

var result = function () {
  if (memory == 0) return;
  c = true;
  var r;
  switch (memorycalc) {
    case "+":
      r = memory + screens.val();
      break;
    case "-":
      r = memory - screens.val();
      break;
    case "*":
      r = memory * screens.val();
      break;
    case "/":
      r = memory / screens.val();
      break;
  }
  screen(r);
  c = true;
  flag = false;
  memory = 0;
};

digits.addEventListener("click", function (e) {
  screen(e.target.value);
});
(plus, minus, multiply, devide).addEventListener("click", function (e) {
  calculate(e.target.value);
});
equal.addEventListener("click", () => {
  return;
});
