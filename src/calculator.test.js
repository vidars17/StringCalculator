const add = require("./calculator");

it("Should return 0 for an empty string.", () => {
  expect(add("")).toBe(0);
});

it("Should return same number if a single number.", () => {
  expect(add("5")).toBe(5);
});
