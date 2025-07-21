let x = 0;
let speedSlider;

function setup() {
  createCanvas(windowWidth, windowHeight * 0.4); // 40% of screen height
  speedSlider = createSlider(0, 10, 2, 0.1);
  speedSlider.position(10, height + 10);
}

function draw() {
  background(240);

  let speed = speedSlider.value();
  fill(50, 100, 255);
  ellipse(x, height / 2, 50, 50);
  x += speed;

  if (x > width) {
    x = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.4);
  speedSlider.position(10, height + 10); // Reposition slider after resize
}
