import {
  capitalize,
  reversed,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("Capitalized", () => {
  expect(capitalize("Haha")).toMatch(/^[A-Z]/);
});
test("Reversed", () => {
  expect(reversed("hello how are your")).toBe("ruoy era woh olleh");
});
test("Calculated", () => {
  const _calculator = calculator();
  expect(_calculator.add(2, 5)).toBe(7);
  expect(_calculator.subtract(5, 2)).toBe(3);
  expect(_calculator.multiply(5, 2)).toBe(10);
  expect(_calculator.divide(6, 2)).toBe(3);
});
test("Ciphered", () => {
  expect(
    caesarCipher("Hello how are you im under the water please help me", 3)
  ).toBe("KHOOR KRZ DUH BRX LP XQGHU WKH ZDWHU SOHDVH KHOS PH");
});
test("Analyzed", () => {
  const myArray = [1, 8, 3, 4, 2, 6];
  const analyzed = analyzeArray(myArray);
  expect(analyzed).toEqual({ min: 1, max: 8, average: 4, length: 6 });
});
