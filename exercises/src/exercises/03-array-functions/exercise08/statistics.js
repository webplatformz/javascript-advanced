// Exercise: reducing and collecting  multiple data at once
//
// Rewrite the functionality of StatisticCollector using only pure functions
// Rewrite the body of collect() using only pure functions
//
// NOTE: you do not need to adapt the test-case
// HINT: combine filter(fnFilter) and reduce(fnReducer, initialValue)
// HINT: start with the intial value, the define the reducer, then combine everything
// HINT: you might want to reuse behaviour from applyValidNumber() and/or applyNumber() !

export function collect(numbers) {
  let collector = new StatisticCollector();
  collector.apply(numbers);
  return collector.getData();
};

/* a simple class to collect statistics (e.g. sum, count, average, min, max) about the given objects */
class StatisticCollector {

  constructor() {
    this.count = undefined;
    this.sum = undefined;
    this.average = undefined;
    this.max = undefined;
    this.min = undefined;
  };

  getData() {
    return {
      count: this.count,
      sum: this.sum,
      average: this.average,
      max: this.max,
      min: this.min,
    };
  };
  
  reset() {
    this.count = 0;
    this.sum = undefined;
    this.average = undefined;
    this.max = undefined;
    this.min = undefined;
  };

  apply(numbers) {
    this.reset();
    if (numbers) {  
      for (let index in numbers) {
        let number = numbers[index];
        this.applyNumber(number);
      }
    }
  };

  applyNumber(number) {
    if (Number.isFinite(number)) {
      this.applyValidNumber(number);
    }
  }

  applyValidNumber(number) {
    this.count++;
    this.sum = (this.sum || 0) + number;
    this.average = this.sum / this.count;
    this.max = Math.max(number, Number.isFinite(this.max) ? this.max : Number.MIN_VALUE);
    this.min = Math.min(number, Number.isFinite(this.min) ? this.min : Number.MAX_VALUE);
  }

};