const MinBinaryHeap = class MinBinaryHeap {
  constructor(arr = []) {
    this.items = arr; //* this array will always be sorted due to how insertion and deletion work.
  }

  getLeftChildIndex(parentIndex) {
    //* 0's children are 1 and 2, 1's children are 3 and 4, etc.
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    //* same as above but reversed.
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.items.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.items.length;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  getLeftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  }
  getRightChild(index) {
    return this.items[this.getRightChildIndex(index)];
  }
  getParent(index) {
    return this.items[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    //* fancy array destructuring eliminates the need for a temp
    [this.items[indexOne], this.items[indexTwo]] = [
      this.items[indexTwo],
      this.items[indexOne]
    ];
  }

  peek() {
    //* O(1) fetch the root of the tree.
    if (this.items.length === 0) return null;
    return this.items[0];
  }

  remove() {
    //* remove the root node of the tree.
    if (this.items.length === 0) return null;
    const rootItem = this.items[0]; //* save the root node to return later.
    this.items[0] = this.items[this.items.length - 1]; //* set the largest value in the heap to be the root.
    this.items.pop(); //* delete the largest value.
    this.heapifyDown(); //* propagate this largest value down until it's in the right place.
    return rootItem;
  }

  heapifyDown() {
    //* O(log n) because it's either moving to the left child or the right child (or is done)
    //* so we cut the possibilities in half at each step.
    let curIndex = 0; //* start at the root of the heap
    while (this.hasLeftChild(curIndex)) {
      //* as long as our current node has at least one child.
      let smallerChildIndex = this.getLeftChildIndex(curIndex); //* assume that the left child is smaller than this one.
      if (
        this.hasRightChild(curIndex) && //* if we also have a right child, and it's smaller than the left child.
        this.getRightChild(curIndex) < this.getLeftChild(curIndex)
      ) {
        smallerChildIndex = this.getRightChildIndex(curIndex); //* then our right child index is the smaller child index.
      }
      if (this.items[curIndex] < this.items[smallerChildIndex]) {
        //* if the current item is in the right place, we're done.
        break;
      } else {
        this.swap(curIndex, smallerChildIndex); //* otherwise, move the current item down and swap it with the smaller child.
        curIndex = smallerChildIndex; //* on the next iteration we're at the place we moved the current item to.
      }
    }
  }

  add(item) {
    //* O (log n) because of heapifyUp.
    this.items.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    //* O(log n), moves the most recently added item to the correct location in the heap.
    let curIndex = this.items.length - 1; //* start with the last element in the heap.
    while (
      this.hasParent(curIndex) && //* as long as we're not at the root
      this.getParent(curIndex) > this.items[curIndex] //* and my parent is greater than me
    ) {
      const parentIndex = this.getParentIndex(curIndex);
      this.swap(parentIndex, curIndex); //* swap me and my parent.
      curIndex = parentIndex; //* move up to the parent's location for the next iteration.
    }
  }
};

const myMinBinaryHeap = new MinBinaryHeap([10, 15, 20, 17]);
console.log('before doing anything', myMinBinaryHeap.items);
myMinBinaryHeap.add(8);
console.log('after adding 8:', myMinBinaryHeap.items);
myMinBinaryHeap.add(16);
console.log('after adding 16:', myMinBinaryHeap.items);
myMinBinaryHeap.add(16);
console.log('after adding 16 again:', myMinBinaryHeap.items);

myMinBinaryHeap.remove();
console.log('after removing the root', myMinBinaryHeap.items);
myMinBinaryHeap.remove();
console.log('after removing the root again', myMinBinaryHeap.items);
myMinBinaryHeap.remove();
console.log('after removing the root A G A I N', myMinBinaryHeap.items);

const myMinBinaryHeap2 = new MinBinaryHeap([10, 20, 15, 5, 14]);
myMinBinaryHeap.heapifyUp();
console.log(myMinBinaryHeap2);

module.exports = MinBinaryHeap;
