mocha.setup("tdd");

const assert = chai.assert;
suite("ClosedRangeTest", () => {
  suite("文字列表現を返す", () => {
    test("下端点 3, 上端点 8 ならば文字列[3,8]を返す", () => {
      const closedRange = new ClosedRange(3, 8);
      assert.equal("[3,8]", closedRange.stringify());
    });

    test("下端点 4, 上端点 9 ならば文字列[4,9]を返す", () => {
      const closedRange = new ClosedRange(4, 9);
      assert.equal("[4,9]", closedRange.stringify());
    });
  });
  suite("上端点より下端点が大きい閉区間を作ることはできない", () => {
    test("下端点 8, 上端点 3 ならばエラーが発生する", () => {
      assert.throws(() => {
        new ClosedRange(8, 3);
      }, "作れません");
    });
  });
  suite("整数の閉区間は指定した整数を含むかどうかを判定できる", () => {
    let closedRange;
    setup("前準備", () => {
      closedRange = new ClosedRange(3, 8);
    });
    test("閉区間[3,8]の場合、3ならは含まれると判定(true)される", () => {
      assert.isTrue(closedRange.isInRange(3));
    });
    test("閉区間[3,8]の場合、8ならは含まれると判定(true)される", () => {
      assert.isTrue(closedRange.isInRange(8));
    });
    test("閉区間[3,8]の場合、6ならは含まれると判定(true)される", () => {
      assert.isTrue(closedRange.isInRange(6));
    });
    test("閉区間[3,8]の場合、2ならは含まれないと判定(false)される", () => {
      assert.isFalse(closedRange.isInRange(2));
    });
  });
  suite(" 別の閉区間と等価かどうか判定できる", () => {
    let closedRange;
    setup("前準備", () => {
      closedRange = new ClosedRange(3, 8);
    });
    test("閉区間[3,8]と閉区間[3,8]の場合、等価と判定(true)される", () => {
      const closedRange2 = new ClosedRange(3, 8);
      assert.isTrue(closedRange.equal(closedRange2));
    });
    test("閉区間[3,8]と閉区間[4,8]の場合、等価ではないと判定(false)される", () => {
      const closedRange2 = new ClosedRange(4, 8);
      assert.isFalse(closedRange.equal(closedRange2));
    });
  });
});

class ClosedRange {
  constructor(lower, upper) {
    if (lower > upper) {
      throw new Error("作れません");
    }
    this._lower = lower;
    this._upper = upper;
  }
  stringify() {
    let result = `[${this._lower},${this._upper}]`;
    return result;
  }

  isInRange(number) {
    if (this._lower <= number && this._upper >= number) {
      return true;
    }
    return false;
  }

  equal(other) {
    if (this._lower === other._lower && this._upper === this._upper)
      return true;
    return false;
  }
}
