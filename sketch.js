let x = 0;

function setup() {
  createCanvas(600, 200);
  background(255);
}

function draw() {
  background(240);
  fill(50, 100, 255);
  ellipse(x, height / 2, 50, 50);
  x += 2;

  if (x > width) {
    x = 0;
  }
}
