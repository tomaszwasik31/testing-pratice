const caesar = require("../functions/caesar");

test("string to equal fgevat", () => {
  expect(caesar("string")).toBe("fgevat");
});

test("StRinG to equal FgEvaT", () => {
  expect(caesar("StRinG")).toBe("FgEvaT");
});
