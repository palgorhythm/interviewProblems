/* 

Design and implement a data structure which allows you to insert key-value pairs and retrieve values from keys with an optional timestamp parameter
- (i.e., "get value for key X at time Y")

 */
// store the insertion time when a val is inserted.
// timestamps will be integers. fake unix time.
// get the value that's closest in time to provided timestamp, and also of course is associated with the given key.
const db = {};

const insert = (key, value, time) => {
  if (!db.hasOwnProperty(key)) {
    db[key] = [{ value, time }]; // for each key, we have a bucket (object) that stores all values associated with that key
    // these values can be found by hashing the time.
    return;
  }
  if (time <= db[key][0].time) {
    db[key].unshift({ value, time });
  } else if (time >= db[key][db[key].length - 1].time) {
    db[key].push({ value, time });
  } else {
    let l = 0;
    let r = db[key].length - 1;
    let m = Math.floor((r - l) / 2);
    let found = false;
    console.log('inserting', time, value, l, m, r);
    while (!found) {
      // console.log(l, m, r);
      const [lTime, rTime] = [db[key][l].time, db[key][r].time];
      if (Math.abs(value - lTime) < Math.abs(value - rTime)) {
        //! search left
        console.log('goin left');
        r = m;
        m = l + Math.floor((r - l) / 2);
      } else {
        //! search right
        console.log('goin right');
        l = m;
        m = l + Math.floor((r - l) / 2);
      }
      console.log('inserting', time, value, l, m, r);
      if (r - l === 1) {
        found = true;
      }
    }
    db[key].splice(m + 1, 0, { value, time });
    return;
  }
};

const get = (key, timestamp) => {
  if (!db.hasOwnProperty(key)) {
    return null;
  }
  // optimized way: sort keys O(nlogn) and then binary search thru them O(logn);
  const times = db[key];
  if (timestamp === undefined) {
    return times[times.length - 1].value;
  }
  // const lIndex = 0;
  // const rIndex = keys.length - 1;
  // const mIndex = Math.floor(keys.length);
  let result = null;
  let minDist = Infinity;
  times.forEach(data => {
    const diff = Math.abs(timestamp - data.time);
    if (diff <= minDist) {
      minDist = diff;
      result = data.value;
    }
  });
  return result;
};

//doesn't have the key.
console.log(get('ok'), 'expect null');

// has the key and timestamp
insert('test_key', 10, 1);
console.log(get('test_key', 1), 'expect 10');

// has the key and no get timestamp supplied
insert('test_key1', 40, 1);
console.log(get('test_key1'), 'expect 40');

// has the key and no get timestamp supplied
insert('test_key', 30, 3);
// console.log('adding second thing at time 1', db);
insert('test_key', 10, 1);
insert('test_key', 20, 2);
insert('test_key2', 10, 1);
insert('test_key', 40, 4);
insert('test_key', 70, 7);
insert('test_key', 50, 5);
insert('test_key', 50, 5);
insert('test_key', 100, 10);
insert('test_key', 90, 9);
console.log(db);
// console.log(get('test_key', 2.4), 'expect 20');
// console.log(db);
// console.log('expect...');
// console.log({
//   test_key: [
//     { value: 10, time: 1 },
//     { value: 10, time: 1 },
//     { value: 20, time: 2 },
//     { value: 30, time: 3 }
//   ],
//   test_key1: [{ value: 40, time: 1 }],
//   test_key2: [{ value: 10, time: 1 }]
// });
