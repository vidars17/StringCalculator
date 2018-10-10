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

it("Should accept both newline and comma as a separator.", () => {
  expect(add("5, 5, 17 \n 63")).toBe(90);
});

it("Should accept both newline and comma as a separator.", () => {
  expect(add("5, 5, 17 \n 63 \n 10")).toBe(100);
});

it("Should accept both newline and comma as a separator.", () => {
  expect(add("5,20 \n5, 5, 17 \n 63 \n 10")).toBe(125);
});

test("Should throw error if string contains negative number (Commas and newlines).", () => {
  expect(() => {
    add("-5,20 \n-5, 5, 17 \n 63 \n 10");
  }).toThrow("String cannot contain negative values, -5, -5");
});

test("Should throw error if string contains negative number (Newlines).", () => {
  expect(() => {
    add("-5 \n 63 \n 10");
  }).toThrow("String cannot contain negative values, -5");
});

test("Should throw error if string contains negative number (Commas).", () => {
  expect(() => {
    add("-5, 20,-6,-100");
  }).toThrow("String cannot contain negative values, -5, -6, -100");
});

test("Should throw error if string contains negative number (Single number).", () => {
  expect(() => {
    add("-5");
  }).toThrow("String cannot contain negative values, -5");
});

it("Should not accept n > 1000 (Commas and newlines).", () => {
  expect(add("5,20 \n5, 1001, 17 \n 63 \n 10")).toBe(120);
});

it("Should not accept n > 1000 (Commas).", () => {
  expect(add("5,20,95461")).toBe(25);
});

it("Should not accept n > 1000 (Newlines).", () => {
  expect(add("20 \n 563217 \n 63 \n 646556")).toBe(83);
});

it("Should not accept n > 1000 (Single input).", () => {
  expect(add("14654")).toBe(0);
});

it("Should accept a new delimiter/separator (Commas and newlines).", () => {
  expect(add("//;5,20 \n5; 1001, 17;63\n10")).toBe(120);
});


it("Should accept a new delimiter/separator (Commas).", () => {
  expect(add("//;5;20 ,5; 1001; 17,63,10")).toBe(120);
});


it("Should accept a new delimiter/separator (Newlines).", () => {
  expect(add("//;5\n20 ;5; 1001\n 17;63\n10")).toBe(120);
});

it("Should accept a new delimiter/separator (Testing with V).", () => {
  expect(add("//V5\n20 V5V 1001\n 17V63\n10")).toBe(120);
});
