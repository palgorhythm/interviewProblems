const a = [
  '(75, 180)',
  '(+90.0, -147.45)',
  '(77.11112223331, 149.99999999)',
  '(+90, +180)',
  '(90, 180)',
  '(-90.00000, -180.0000)',
  '(75, 280)',
  '(+190.0, -147.45)',
  '(77.11112223331, 249.99999999)',
  '(+90, +180.2)',
  '(90., 180.)',
  '(-090.00000, -180.0000)'
];

// Valid
// Valid
// Valid
// Valid
// Valid
// Valid
// Invalid
// Invalid
// Invalid
// Invalid
// Invalid
// Invalid

const b = [
  '(-127, -48)',
  '(-127.560528, -48.560528)',
  '(-97, -282)',
  '(-97.354318, -282.354318)',
  '(-66, -43)',
  '(-66.435670, -43.435670)',
  '(-146, -101)',
  '(-146.725709, -101.725709)',
  '(-14, -113)',
  '(-14.19976, -113.19976)'
];

// Invalid
// Invalid
// Invalid
// Invalid
// Valid
// Valid
// Invalid
// Invalid
// Valid
// Valid
function isValid(coordinates) {
  coordinates.forEach(c => {
    if (c[0] !== '(' || c[c.length - 1] !== ')') {
      console.log('Invalid');
      return;
    }
    if (c[1] === ' ') {
      console.log('Invalid');
      return;
    }
    let parts = c.split(',');
    parts = parts.map(part => part.replace('(', '').replace(')', ''));
    if (parts.length !== 2) {
      console.log('Invalid');
      return;
    }
    if (parts[0][parts[0].length - 1] === ' ') {
      console.log('Invalid');
      return;
    }
    if (parts[1][0] !== ' ') {
      console.log('Invalid');
      return;
    }
    if (parts[1][parts[1].length - 1] === ' ') {
      console.log('Invalid');
      return;
    }
    if (parts[0][0] === '0' || parts[1][0] === '0') {
      console.log('Invalid');
      return;
    }
    if (
      parseFloat(parts[0]) > 90 ||
      parseFloat(parts[0]) < -90 ||
      parseFloat(parts[1]) > 180 ||
      parseFloat(parts[1]) < -180
    ) {
      console.log('Invalid');
      return;
    }
    parts = parts.map(part => part.replace('+', '').replace('-', ''));
    if (parts[0][0] === '0' || parts[1][1] === '0') {
      console.log('Invalid');
      return;
    }
    if (
      parts[0][parts[0].length - 1] === '.' ||
      parts[1][parts[1].length - 1] === '.'
    ) {
      console.log('Invalid');
      return;
    }
    // 43, 45
    //60-71, 56 for period
    console.log('Valid');
    return;
  });
}

// isValid(a);
isValid(b);
