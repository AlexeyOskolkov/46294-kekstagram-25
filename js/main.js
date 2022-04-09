const getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandom(1, 100);

const calculateLengthString = function (text) {
  const maxLength = 140;
  const lengthString = text.length;
  if (lengthString <= maxLength) {
    return true;
  } else {
    return false;
  }
};

calculateLengthString('Hello! How are you?');
