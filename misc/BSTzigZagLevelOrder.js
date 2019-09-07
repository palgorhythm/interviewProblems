function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) {
    return [[]];
  }
  const traversal = [];
  traversal.push([root.val]);
  let nodesBelowRow = 0;
  const nodes = [];
  if (root.left) {
    nodes.push(root.left);
    nodesBelowRow++;
  }
  if (root.right) {
    nodes.push(root.right);
    nodesBelowRow++;
  }
  let currPosInRow = 0;
  if (nodesBelowRow !== 0) {
    traversal.push([]);
  }
  nodesBelowRow = 0;
  let currRow = 1;
  let nodesCurrRow = nodesBelowRow;
  let posInRow = 0;

  while (nodes.length > 0) {
    const curr = nodes.shift();
    traversal[currRow].push(curr.val);

    if (curr.left) {
      nodes.push(curr.left);
      nodesBelowRow++;
    }
    if (curr.right) {
      nodes.push(curr.right);
      nodesBelowRow++;
    }

    if (posInRow === nodesCurrRow) {
      currRow++;
      nodesCurrRow = nodesBelowRow;
      nodesBelowRow = 0;
      posInRow = 0;
    }
  }
  return traversal;
};

const B = new TreeNode(3);
B.left = new TreeNode(9);
B.right = new TreeNode(20);
B.right.left = new TreeNode(15);
B.right.right = new TreeNode(7);

console.log(zigzagLevelOrder(B));
