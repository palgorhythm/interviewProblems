function minimumBribes(q) {
  const p = [...q];
  const numBribes = {};
  for (let i = 0; i < p.length; i++) {
    if (!numBribes.hasOwnProperty(p[i])) {
      numBribes[p[i]] = 0;
    }
    const correctIndex = p[i] - 1;
    // console.log(correctIndex, i, p[i]);
    if (Math.abs(correctIndex - i) > 2) {
      return console.log('Too chaotic');
    } else if (correctIndex !== i) {
      let found = false;
      let j = i;
      while (!found) {
        if (p[j] - 1 === i) {
          found = true;
          const val = p.splice(j, 1)[0];
          p.splice(i, 0, val);
        } else {
          numBribes[p[j]] = numBribes[p[j]] ? numBribes[p[j]] + 1 : 1;
        }
        j++;
      }
    }
  }
  let chaotic = false;
  const totalSwaps = Object.keys(numBribes).reduce((acc, cur) => {
    if (numBribes[cur] > 2) {
      chaotic = true;
    }
    return acc + numBribes[cur];
  }, 0);
  if (chaotic) {
    console.log('Too chaotic');
  } else {
    console.log(totalSwaps);
  }
  return;
}

function minimumBribes(q) {
  const Q = [...q];
  let numSwaps = 0;
  let swapped = false;
  for (let i = 0; i < Q.length; i++) {
    swapped = false;
    for (let j = 0; j < Q.length - 1; j++) {
      if (Q[j] - 1 - j > 2) {
        return console.log('Too chaotic');
      }
      if (Q[j] > Q[j + 1]) {
        [Q[j], Q[j + 1]] = [Q[j + 1], Q[j]];
        numSwaps++;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return console.log(numSwaps);
}

const tests = [
  { in: [2, 1, 5, 3, 4], expect: 3 },
  { in: [2, 5, 1, 3, 4], expect: 'Too chaotic' },
  { in: [1, 2, 5, 3, 7, 8, 6, 4], expect: 7 }
];

tests.forEach(test => {
  console.log('output:');
  minimumBribes(test.in);
  console.log('expected:', test.expect);
});
