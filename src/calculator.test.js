const add = require("./calculator");

it("Should return 0 for an empty string.", () => {
  expect(add("")).toBe(0);
});
