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
    return `[${this._lower},${this._upper}]`;
  }

  include(number) {
    return this._lower <= number && number <= this._upper;
  }

  equal(other) {
    return this._lower === other._lower && this._upper === this._upper;
  }

  includeObject(object) {
    return this._lower <= object._lower && object._upper <= this._upper;
  }
}
