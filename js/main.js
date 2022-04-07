let getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandom(1, 100);

let calculateLengthString = function (text) {
  let maxLength = 140;
  let lengthString = text.length;
  if (lengthString <= maxLength) {
    return lengthString;
  }
}

console.log('Длина строки ' + calculateLengthString('Hello') + ' символов');
