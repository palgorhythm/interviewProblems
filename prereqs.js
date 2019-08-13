const test = [[2, 1], [0, 1], [1, 3]]; //true
const test2 = [[0, 1], [1, 0]]; // false
const test3 = [[0, 1], [1, 0], [2, 3]]; // false

class Node {
  constructor(index, children) {
    this.index = index;
    this.children = children;
  }
}

const canFinish = (numCourses, courses) => {
  if (courses.length === 0) {
    return true;
  }
  const nodeList = {};
  courses.forEach(course => {
    if (!nodeList[course[1]]) {
      nodeList[course[1]] = new Node(course[1], []);
    }
    if (!nodeList[course[0]]) {
      nodeList[course[0]] = new Node(course[0], []);
      nodeList[course[1]].children.push(nodeList[course[0]]);
    } else {
      nodeList[course[1]].children.push(nodeList[course[0]]);
    }
  });

  let result = true;
  const seen = new Set();

  const recurse = index => {
    if (seen.has(index)) {
      return false;
    }
    seen.add(index);
    if (nodeList[index].children.length === 0) {
      seen.delete(index);
      return true;
    } else {
      let res = true;
      nodeList[index].children.forEach(child => {
        res = res && recurse(child.index);
      });
      return res;
    }
  };
  Object.keys(nodeList).forEach(nodeIndex => {
    result = result && recurse(nodeIndex);
  });
  return result;
};

console.log(canFinish(2, test)); //true
console.log(canFinish(2, test2)); // false
console.log(canFinish(2, test3)); //false
console.log(canFinish(2, [[0, 1], [0, 2], [1, 2]])); //true
console.log(canFinish(2, [[1, 0], [2, 0], [0, 2]])); //false
