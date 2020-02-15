class ClosedRange {
  constructor(lower, upper) {
    if (lower > upper) {
      throw new Error(
        `上端点(${upper})より下端点(${lower})が大きい閉区間は作れません`
      );
    }
    this._lower = lower;
    this._upper = upper;
  }
  stringify() {
    let result = `[${this._lower},${this._upper}]`;
    return result;
  }

  include(number) {
    if (this._lower <= number && number <= this._upper) {
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
