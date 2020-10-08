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
  it("passes after 1 minute", async () => {
    await sleep(60000);
    assert.equal(true, true);
  });
});
