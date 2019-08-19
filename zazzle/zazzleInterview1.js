/*
Given an array of objects to process (doesn't matter what they are),
and an asynchronous function that does work on one item 
and notifies when it is done, let's implement a method
that processes an array of such items sequentially, waiting
for each item to complete before advancing to next.
*/

// Usage:
var objsToProcess = [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];
processSet(objsToProcess);

// Provided:
function processOne(item, callback) {
  // asynchronous function
  // that does work, then calls callback
  setTimeout(function() {
    console.log(item);
    callback && callback();
  }, Math.floor(Math.random() * 3000));
}

// Let's implement:
function processSet(items) {
  const promArr = [];
  items.forEach(item => {
    const curPromise = () => {
      return new Promise((resolve, reject) => {
        processOne(item, () => {
          resolve();
        });
      });
    };
    promArr.push(curPromise);
  });
  let curPromise = Promise.resolve();
  for (let i = 0; i < promArr.length; i++) {
    // promArr[i]();
    curPromise = curPromise.then(() => {
      return promArr[i]();
    });
  }
}

var objsToProcess = [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];
processSet(objsToProcess);

// Provided:
function processOne(item, callback) {
  // asynchronous function
  // that does work, then calls callback
  setTimeout(function() {
    console.log(item);
    callback && callback();
  }, Math.floor(Math.random() * 3000));
}

function processSet(items) {
  let i = 0;
  const recursiveClosure = () => {
    if (i === items.length) return;
    processOne(items[i], () => {
      i++;
      recursiveClosure();
    });
  };
  recursiveClosure();
}
