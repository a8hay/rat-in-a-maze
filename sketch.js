let rows;
let cols;
let grid = [];
let cellSize = 30;
let solveButton;
let resetButton;

function setup() {
  createCanvas(600, 600);
  rows = floor(height / cellSize);
  cols = floor(width / cellSize);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.splice(index(i, j), 0, new Cell(i, j));
    }
  }
  solveButton = createButton("draw path");
  solveButton.position(20, height + 40);
  solveButton.mousePressed(solveMaze);

  resetButton = createButton("clear grid");
  resetButton.position(120, height + 40);
  resetButton.mousePressed(reset);
}

function draw() {
  background(51);
  for (let cell of grid) {
    cell.show();
  }
  //xxxxxxxxxxxxxxGENERATE MAZExxxxxxxxxxxxxxxxxxxxxx//
  let x = floor(map(mouseX, 0, width, 0, cols));
  let y = floor(map(mouseY, 0, height, 0, rows));
  if (x >= 0 && y >= 0 && x < cols && y < rows) {
    if (mouseIsPressed && mouseButton == LEFT) {
      grid[index(x, y)].isWall = true;
    }
    if (mouseIsPressed && mouseButton == RIGHT) {
      grid[index(x, y)].isWall = false;
    }
    if (keyIsPressed && keyCode == UP_ARROW) {
      grid[index(x, y)].isStart = true;
    }
    if (keyIsPressed && keyCode == DOWN_ARROW) {
      grid[index(x, y)].isEnd = true;
    }
  }
  //xxxxxxxxxxxxxxGENERATE MAZExxxxxxxxxxxxxxxxxxxxxx//
}

function index(i, j) {
  if (i < 0 || j < 0 || i >= rows || j >= cols) {
    return -1;
  }
  return i * cols + j;
}

function reset() {
  for (let cell of grid) {
    cell.reset();
  }
}
