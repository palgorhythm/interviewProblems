const MaxBinaryHeap = class MaxBinaryHeap {
  constructor(arr = []) {
    this.items = arr; //* this array will always be sorted due to how insertion and deletion work.
    this.buildMaxHeap();
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

  heapifyDown(startIndex = 0, endIndex = this.items.length - 1) {
    //* O(log n) because it's either moving to the left child or the right child (or is done)
    //* so we cut the possibilities in half at each step.
    let curIndex = startIndex; //* start at the root of the heap
    while (this.hasLeftChild(curIndex) && curIndex <= endIndex) {
      //* as long as our current node has at least one child.
      let largerChildIndex = this.getLeftChildIndex(curIndex); //* assume that the left child is larger than this one.
      if (
        this.hasRightChild(curIndex) && //* if we also have a right child, and it's larger than the left child.
        this.getRightChild(curIndex) > this.getLeftChild(curIndex)
      ) {
        largerChildIndex = this.getRightChildIndex(curIndex); //* then our right child index is the larger child index.
      }
      if (
        this.items[curIndex] > this.items[largerChildIndex] ||
        largerChildIndex > endIndex
      ) {
        //* if the current item is in the right place, we're done.
        break;
      } else {
        this.swap(curIndex, largerChildIndex); //* otherwise, move the current item down and swap it with the larger child.
        curIndex = largerChildIndex; //* on the next iteration we're at the place we moved the current item to.
      }
      // console.log('ueet', curIndex, this.items);
    }
  }

  add(item) {
    //* O (log n) because of heapifyUp.
    this.items.push(item);
    this.heapifyUp();
  }

  heapifyUp(startIndex = this.items.length - 1) {
    //* O(log n), moves the most recently added item to the correct location in the heap.
    let curIndex = startIndex; //* start with the last element in the heap.
    while (
      this.hasParent(curIndex) && //* as long as we're not at the root
      this.getParent(curIndex) < this.items[curIndex] //* and my parent is smaller than me
    ) {
      const parentIndex = this.getParentIndex(curIndex);
      this.swap(parentIndex, curIndex); //* swap me and my parent.
      curIndex = parentIndex; //* move up to the parent's location for the next iteration.
    }
  }

  buildMaxHeap() {
    //* O(n log n) because we're doing heapifyDown for every element of the array.
    for (let i = this.items.length - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }
};

// const myMaxBinaryHeap = new MaxBinaryHeap([]);
// console.log('before doing anything', myMaxBinaryHeap.items);
// myMaxBinaryHeap.add(8);
// console.log('after adding 8:', myMaxBinaryHeap.items);
// myMaxBinaryHeap.add(16);
// console.log('after adding 16:', myMaxBinaryHeap.items);
// myMaxBinaryHeap.add(16);
// console.log('after adding 16 again:', myMaxBinaryHeap.items);
// myMaxBinaryHeap.add(21);
// console.log('after adding 21', myMaxBinaryHeap.items);
// myMaxBinaryHeap.add(43);
// console.log('after adding 21', myMaxBinaryHeap.items);

// myMaxBinaryHeap.remove();
// console.log('after removing the root', myMaxBinaryHeap.items);
// myMaxBinaryHeap.remove();
// console.log('after removing the root again', myMaxBinaryHeap.items);
// myMaxBinaryHeap.remove();
// console.log('after removing the root A G A I N', myMaxBinaryHeap.items);

// const MBH = new MaxBinaryHeap([10, 4, 17, 12, 19, 28]);
// console.log(MBH.items);

module.exports = MaxBinaryHeap;
