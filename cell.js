class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isWall = false;
    this.isEnd = false;
    this.isStart = false;
    this.discovered = false;
    this.clr = [255, 255, 255];
  }

  reset() {
    this.isWall = false;
    this.isEnd = false;
    this.isStart = false;
    this.discovered = false;
    this.clr = [255, 255, 255];
  }

  show() {
    if (this.isStart) {
      this.clr = [0, 255, 0];
    }
    if (this.isEnd) {
      this.clr = [255, 0, 0];
    }
    if (this.isWall) {
      this.clr = [75, 75, 75, 100];
    }
    if (this.discovered) {
      this.clr = [255, 0, 255];
    }
    fill(this.clr[0], this.clr[1], this.clr[2]);
    rect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
  }
}
