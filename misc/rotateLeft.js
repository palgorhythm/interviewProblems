function rotLeft(a, d) {
  const aCopy = [...a];
  for (let i = 0; i < a.length; i++) {
    const mappedIndex = modulo(i - d, a.length);
    aCopy[mappedIndex] = a[i];
  }
  return aCopy;
}

const modulo = (x, m) => {
  if (x % m < 0) {
    return (x % m) + m;
  } else {
    return x % m;
  }
};

const test = [1, 2, 3, 4, 5];
console.log(rotLeft(test, 2));
