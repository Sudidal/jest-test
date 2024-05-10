function capitalize(input) {
  input.charAt(0).toUpperCase;
  return input;
}
function reversed(input) {
  let _string = "";
  let i = input.length - 1;
  for (i; i >= 0; i--) {
    _string += input.charAt(i);
  }
  return _string;
}
function calculator() {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { add, subtract, multiply, divide };
}
function caesarCipher(input, key) {
  // TODO: accept negative numbers

  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabetString.split("");
  let encrypted = "";
  input = input.toLowerCase();

  for (let i = 0; i < input.length; i++) {
    const curChar = input.charAt(i);
    let charIndex = 0;
    for (let x = 0; x < alphabetArray.length; x++) {
      if (curChar === alphabetArray[x]) {
        charIndex = x;
        break;
      }
    }

    let letter = "";
    if (charIndex + key > alphabetArray.length - 1) {
      const overflow = alphabetArray.length - 1 - (charIndex + key);
      charIndex = overflow;
    }

    if (charIndex === 0 && curChar !== "a") {
      letter = curChar;
    } else {
      letter = alphabetArray[charIndex + key];
    }

    encrypted += letter;
  }

  encrypted = encrypted.toUpperCase();
  return encrypted;
}
function analyzeArray(input) {
  let min = 0;
  let max = 0;
  let average = 0;
  let length = 0;

  length = input.length;
  let curMin = Infinity;
  let curMax = 0;
  input.forEach((element) => {
    if (element < curMin) {
      curMin = element;
    }
    if (element > curMax) {
      curMax = element;
    }
  });
  min = curMin;
  max = curMax;
  average = max / 2;

  const obj = {
    min: min,
    max: max,
    average: average,
    length: length,
  };

  return obj;
}

export { capitalize, reversed, calculator, caesarCipher, analyzeArray };
