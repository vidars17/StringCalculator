const add = require("./calculator");

it("Should return 0 for an empty string.", () => {
  expect(add("")).toBe(0);
});

it("Should return same number if a single number.", () => {
  expect(add("5")).toBe(5);
});

it("Should return sum of numbers if two.", () => {
  expect(add("5,5")).toBe(10);
});

it("Should return sum of numbers if more than one.", () => {
  expect(add("5,5,17,63")).toBe(90);
});

it("Should treat newline as a comma.", () => {
  expect(add("17 \n 63")).toBe(80);
});

it("Should accept both newline and comma as a seperator.", () => {
  expect(add("5, 5, 17 \n 63")).toBe(90);
});

it("Should accept both newline and comma as a seperator.", () => {
  expect(add("5, 5, 17 \n 63 \n 10")).toBe(100);
});

it("Should accept both newline and comma as a seperator.", () => {
  expect(add("5,20 \n5, 5, 17 \n 63 \n 10")).toBe(125);
});

test("Should throw error if string contains negative number.", () => {
  expect(() => {
    add("-5,20 \n-5, 5, 17 \n 63 \n 10");
  }).toThrow("String cannot contain negative values, -5, -5");
});

test("Should throw error if string contains negative number(newlines).", () => {
  expect(() => {
    add("-5 \n 63 \n 10");
  }).toThrow("String cannot contain negative values, -5");
});

test("Should throw error if string contains negative number(commas).", () => {
  expect(() => {
    add("-5, 20,-6,-100");
  }).toThrow("String cannot contain negative values, -5, -6, -100");
});
