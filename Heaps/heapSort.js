const MaxBinaryHeap = require('./MaxBinaryHeap');

const heapSort = arr => {
  const maxHeap = new MaxBinaryHeap(arr); //* O(n log n because we do heapifyDown for every element of the arr to build the max heap)
  for (let i = arr.length - 1; i >= 0; i--) {
    //* again, O(n log n) because we do heapifyDown for every element of the arr after the swap.
    maxHeap.items[0] > maxHeap.items[i] ? maxHeap.swap(0, i) : null; //* only swap if they're out of order.
    maxHeap.heapifyDown(0, i - 1);
  }
};

const a = [4, 10, 7, 3, 0, 8, 9, 6];
console.log('before:', a);
heapSort(a);
console.log('after:', a);

const b = [4, 1, -2];
console.log('before:', b);
heapSort(b);
console.log('after:', b);

const c = [4, -10, 7, -3, 0, 8, -9, 6];
console.log('before:', c);
heapSort(c);
console.log('after:', c);
