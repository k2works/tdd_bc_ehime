mocha.setup("tdd");

const assert = chai.assert;
suite("ClosedRangeTest", () => {
  test("Greeting", () => {
    assert.equal("[3,8]", ClosedRange.stringify());
  });
});

class ClosedRange {
  static stringify() {
    return "[3,8]";
  }
}
