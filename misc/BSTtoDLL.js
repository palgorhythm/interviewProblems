// convert a bst to a doubly linked list- in place!
// meaning, it's sorted in order
function TreeNode(v) {
  this.value = v;
  this.left = this.right = null;
}

TreeNode.prototype.insert = function(v) {
  const recurse = node => {
    if (v < node.value) {
      if (node.left === null) {
        node.left = new TreeNode(v);
      } else {
        recurse(node.left);
      }
    } else if (v > node.value) {
      if (node.right === null) {
        node.right = new TreeNode(v);
      } else {
        recurse(node.right);
      }
    } else {
      return console.log('error! no duplicates');
    }
  };
  recurse(this);
};

const BSTtoDLL = bst => {};

const B = new TreeNode(5);
B.insert(1);
B.insert(3);
B.insert(4);
console.log(B);
