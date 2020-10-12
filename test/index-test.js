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
  it("passes after 3 minute", async () => {
    await sleep(3 * 60 * 1000);
    assert.equal(true, true);
  });
});
