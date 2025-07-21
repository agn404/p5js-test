let x = 0;
let speedSlider;

function setup() {
  createCanvas(600, 200);
  background(255);
  
  // Create slider: min=0, max=10, start=2, step=0.1
  speedSlider = createSlider(0, 10, 2, 0.1);
  speedSlider.position(10, height + 10);  // Place below canvas
}

function draw() {
  background(240);
  
  let speed = speedSlider.value();  // Get slider value
  fill(50, 100, 255);
  ellipse(x, height / 2, 50, 50);
  x += speed;

  if (x > width) {
    x = 0;
  }
}
