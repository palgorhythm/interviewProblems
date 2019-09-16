class DLLnode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToBack(val) {
    const newNode = new DLLnode(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const temp = this.tail;
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.tail.prev = temp;
    }
    return newNode;
  }
  addToFront(val) {
    const newNode = new DLLnode(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const temp = this.head;
      this.head.prev = newNode;
      this.head = this.head.prev;
      this.head.next = temp;
    }
    return newNode;
  }
  removeHead() {
    if (this.head) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    }
  }
  removeTail() {
    if (this.tail) {
      this.tail = this.tail.prev;
      if (this.tail === null) {
        this.head = null;
      } else {
        this.tail.next = null;
      }
    }
  }

  moveToBack(Node) {
    if (this.tail && Node.next) {
      //* make sure LL isn't empty and that this isn't already the tail.
      if (Node.prev) Node.prev.next = Node.next;
      if (Node.next) Node.next.prev = Node.prev;

      const temp = this.tail;
      this.tail.next = Node;
      Node.next = null;
      Node.prev = temp;
      this.tail = Node;
    }
  }

  moveToFront(Node) {
    //* make sure LL isn't empty and that this isn't already the head.
    if (this.head && Node.prev) {
      if (Node.prev) Node.prev.next = Node.next;
      if (Node.next) Node.next.prev = Node.prev;

      const temp = this.head;
      this.head.prev = Node;
      Node.prev = null;
      Node.next = temp;
      this.head = Node;
    }
  }
}

class LRUcache {
  constructor(capacity = 3) {
    this.cache = {};
    this.linkedList = new DoublyLinkedList();
    this.capacity = capacity;
    this.size = 0;
  }
  set(key, value) {
    if (this.cache[key]) {
      //* we need to move the node at this key to the back of the LL bc it's the MOST recently used
      this.linkedList.moveToBack(this.cache[key]);
      this.linkedList.tail.value = { key: key, value: value };
      this.cache[key] = this.linkedList.tail;
    } else {
      //* we need to add a new k-v pair, so if we're at capacity we have to delete the LRU item
      //* LRU item is at the front!!
      if (this.size === this.capacity) {
        this.removeLRUitem();
      }
      const newNode = this.linkedList.addToBack({ key: key, value: value });
      this.cache[key] = newNode;
      this.size++;
    }
  }
  get(key) {}
  removeLRUitem() {
    const data = this.linkedList.head.value;
    this.linkedList.removeHead();
    const keyToRemove = data.key;
    delete this.cache[keyToRemove];
    this.size--;
  }
}

const LL = new DoublyLinkedList();
LL.addToBack(0);
LL.addToBack(1);
LL.addToBack(2);
LL.addToBack(3);
LL.addToFront(-1);
LL.removeHead();

const index1Node = LL.head.next;
LL.moveToFront(index1Node);
// console.log(index1Node);
let curNode = LL.head;
while (curNode) {
  if (curNode.prev) {
    console.log('prev value', curNode.prev.value);
  }
  console.log('cur value', curNode.value);
  if (curNode.next) {
    console.log('next value', curNode.next.value);
  }
  console.log('------------------');
  curNode = curNode.next;
}
