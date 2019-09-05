// var prisonAfterNDays = function(cells, N) {
//   let c = [...cells].join('');
//   const cache = {};
//   for (let i = 0; i < N; i++) {
//     let temp = c[0];
//     let changedAnything = false;
//     for (let j = 1; j < c.length - 1; j++) {
//       // console.log(j - 1, j + 1, temp, c[j + 1]);
//       if (temp === c[j + 1]) {
//         temp = c[j];
//         if (c[j] !== 1) {
//           changedAnything = true;
//         }
//         c[j] = 1;
//       } else {
//         if (c[j] !== 0) {
//           changedAnything = true;
//         }
//         temp = c[j];
//         c[j] = 0;
//       }
//     }
//     if (c[0] === 1) {
//       if (c[0] !== 0) {
//         changedAnything = true;
//       }
//       c[0] = 0;
//     }
//     if (c[c.length - 1] === 1) {
//       if (c[c.length - 1] !== 0) {
//         changedAnything = true;
//       }
//       c[c.length - 1] = 0;
//     }
//     if (!changedAnything) {
//       return c.split('');
//     }
//   }
//   return c.split('');
// };

var prisonAfterNDays = function(cells, N) {
  const c = [...cells];
  const seen = {};
  let period = null;
  let offset = null;
  for (let i = 0; i < 2 ** cells.length; i++) {
    if (i === N) {
      return c;
    }
    simOneDay(c);
    const cString = JSON.stringify(c);
    if (seen[cString]) {
      period = i - seen[cString];
      offset = seen[cString];
      result = c;
      const numItersInPeriod = (N - offset) % period;
      return JSON.parse(seen[numItersInPeriod]);
    } else {
      const strCur = JSON.stringify(c);
      seen[strCur] = i;
      seen[i] = strCur;
    }
  }
};

const simOneDay = c => {
  let temp = c[0];
  for (let j = 0; j < c.length; j++) {
    if (j === 0 || j === c.length - 1) {
      temp = c[j];
      c[j] = 0;
    } else if (temp === c[j + 1]) {
      temp = c[j];
      c[j] = 1;
    } else {
      temp = c[j];
      c[j] = 0;
    }
  }
  return;
};
// console.log(prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7));
console.log(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000));
// console.log(prisonAfterNDays([0, 1, 0, 1, 0], 1000000000));
// console.log(prisonAfterNDays([0, 1, 1, 0, 0, 1, 0, 0], 1));
