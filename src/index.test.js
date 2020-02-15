mocha.setup("tdd");

const assert = chai.assert;
suite("ClosedRangeTest", () => {
  suite("文字列表現を返す", () => {
    test("下端点 3, 上端点 8 ならば文字列[3,8]を返す", () => {
      assert.equal("[3,8]", ClosedRange.stringify());
    });

    test("下端点 4, 上端点 9 ならば文字列[4,9]を返す", () => {
      assert.equal("[4,9]", ClosedRange.stringify());
    });
  });
});

class ClosedRange {
  static stringify() {
    return "[3,8]";
  }
}
