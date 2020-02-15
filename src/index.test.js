mocha.setup("tdd");

const assert = chai.assert;
suite("ClosedRangeTest", () => {
  suite("文字列表現を返す", () => {
    test("下端点 3, 上端点 8 ならば文字列[3,8]を返す", () => {
      closedRange = new ClosedRange(3, 8);
      assert.equal("[3,8]", closedRange.stringify());
    });

    test("下端点 4, 上端点 9 ならば文字列[4,9]を返す", () => {
      closedRange = new ClosedRange(4, 9);
      assert.equal("[4,9]", closedRange.stringify());
    });
  });
});

class ClosedRange {
  constructor(lower, upper) {
    this._lower = lower;
    this._upper = upper;
  }
  stringify() {
    let result = `[${this._lower},${this._upper}]`;
    return result;
  }
}
