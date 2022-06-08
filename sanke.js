"use strict";
var s;
var scl = 20;
var food;
function setuo() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / sc1);
  var height = floor(height / sc1);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(sc1);
}
function draw() {
  background(0);
  s.death();
  s.update();
  s.show();
  if (s.eat(food)) {
    pickLocation();
  }
  fill(242, 242, 242);
  rect(food.x, food.y, sc1, sc2);
}
function keypressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };
  this.eat = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
  };
  if (d < 4) {
    this.total++;
    return true;
  } else {
    return false;
  }
}
this.death = function () {
  for (var i = 0; i < this.tail.length; i++) {
    var pos = this.tail[i];
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total = 0;
      this.tail = [];
    }
  }
};
this.update = function () {
  for (var i = 0; i < this.tail.length; i++) {
    this.tail[i] = this.tail[i + 1];
  }
  this.tail[total - 1] = createVector(this.x, this.y);

  this.x = this.x + this.xspeed * sc1;
  this.y = this.y + this.yspeed * sc1;

  this.x = contrain(this.x, 0, width - scl);
  this.y = contrain(this.y, 0, height - scl);
};
this.show = function () {
  fill(1, 254, 0);
  for (var i = 0; i < this.total; i++) {
    rect(this.tail[i].x, this.tail[i].y, scl, scl);
  }
  rect(this.x, this.y, scl, scl);
};
