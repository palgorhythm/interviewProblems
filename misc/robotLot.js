// you're in charge of preparing a recently purchased lot for one of amazon's new buildings.
// the lot is covered with tranches and has a single obstacle that needs to be
// taken down before the foundation can be prepared for the building.
// the demolition robot must remove the obstacle before progress can be made on the building.

//write an algorithm to determine the minimum distance required for the demolition robot to remove the obstacle.

// assumptions:
//* the lot is flat, except for trenches, and can be represented as a 2D grid.
//* the robot must start from the top left corner of the lot, which is always flat
//* and can move one block up, down, left, or right per move.
//* the robot can't enter trenches and can't leave the lot.
//* the flat areas are represented by a 1, the trenches by 0, and the obstacle by 9.

//! constraints: 1 <= numRows, numColumns <= 1000000000

//? example input:
const lot = [[1, 0, 0], [1, 0, 0], [1, 9, 1]]; //! expected output: 3

const lot1 = [[1, 1, 0, 0], [0, 0, 0, 0], [0, 9, 0, 0]]; //! expected: -1

const lot2 = [[1, 1, 1, 0], [0, 0, 1, 1], [0, 9, 1, 1], [0, 1, 1, 0]]; // 5

const searchFor9 = lot => {
  let found = false;
  const visited = new Set();
  let steps;
  let i = 0;
  let j = 0;
  const queue = [{ x: 0, y: 0, steps: 0 }];
  visited.add(`${i},${j}`);
  while (!found && queue.length > 0) {
    const cur = queue.shift();
    const i = cur.x;
    const j = cur.y;
    // can't add duplicate entries to set √
    // visited.add(`${i},${j}`);
    if (i - 1 > -1 && lot[i - 1][j] > 0 && !visited.has(`${i - 1},${j}`)) {
      // if moving up is valid
      visited.add(`${i - 1},${j}`);
      queue.push({ x: i - 1, y: j, steps: cur.steps + 1 });
    }
    if (
      i + 1 < lot.length &&
      lot[i + 1][j] > 0 &&
      !visited.has(`${i + 1},${j}`)
    ) {
      // if we can move down
      visited.add(`${i + 1},${j}`);
      queue.push({ x: i + 1, y: j, steps: cur.steps + 1 });
    }
    if (j - 1 > -1 && lot[i][j - 1] > 0 && !visited.has(`${i},${j - 1}`)) {
      // if we can move left
      visited.add(`${i},${j - 1}`);
      queue.push({ x: i, y: j - 1, steps: cur.steps + 1 });
    }
    if (
      j + 1 < lot[0].length &&
      lot[i][j + 1] > 0 &&
      !visited.has(`${i},${j + 1}`)
    ) {
      // right
      visited.add(`${i},${j + 1}`);
      queue.push({ x: i, y: j + 1, steps: cur.steps + 1 });
    }
    if (lot[i][j] === 9) {
      // if the spot we're on is 9
      found = true;
      steps = cur.steps;
      break;
    }
    steps++;
  }

  if (found) {
    return steps;
  } else {
    return -1;
  }
};

console.log(searchFor9(lot));
console.log(searchFor9(lot1));
console.log(searchFor9(lot2));
