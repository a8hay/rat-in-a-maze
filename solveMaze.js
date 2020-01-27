function solveMaze() {
  let startx;
  let starty;
  for (cell of grid) {
    if (cell.isStart) {
      startx = cell.x;
      starty = cell.y;
    }
  }
  findPath(startx, starty);
}

function findPath(x, y) {
  //check if cell is inside the maze
  if (x < 0 || y < 0 || x >= rows || y >= cols) {
    return false;
  }
  //check if cell is a wall
  if (grid[index(x, y)].isWall) {
    return false;
  }
  //check if it is the goal
  if (grid[index(x, y)].isEnd) {
    return true;
  }
  //check if already marked
  //   if (inPath([x, y])) {
  //     return false;
  //   }
  if (grid[index(x, y)].discovered) {
    return false;
  }
  //mark the cell
  //   solution_path.push([x, y]);
  grid[index(x, y)].discovered = true;
  //try going north x-1,y
  if (findPath(x - 1, y)) {
    return true;
  }
  //try going east x, y+1
  if (findPath(x, y + 1)) {
    return true;
  }
  //try going west x, y-1
  if (findPath(x, y - 1)) {
    return true;
  }
  //try going south x+1,y
  if (findPath(x + 1, y)) {
    return true;
  }
  //unmark the cell
  //   solution_path.pop();
  grid[index(x, y)].discovered = false;
  return false;
}
