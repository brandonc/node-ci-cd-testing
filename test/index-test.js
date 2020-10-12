const assert = require("assert");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

describe("Index", () => {
  it("should pass", () => {
    assert.equal(1, 1);
  });
  it("should be true", () => {
    assert.equal(true, true);
  });
  it("passes after 5 minute", async () => {
    await sleep(5 * 60 * 1000);
    assert.equal(true, true);
  });
});
