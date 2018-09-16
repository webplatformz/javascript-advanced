export function collect(numbers) {
  let newValue = (count, sum, average, max, min) => {
    return { count, sum, average, max, min };
  };
  let reducer = (stats, each) => {
    let sum = (stats.sum || 0) + each;
    let count = stats.count + 1;
    let max = Math.max(each, Number.isFinite(stats.max) ? stats.max : Number.MIN_VALUE);
    let min = Math.min(each, Number.isFinite(stats.min) ? stats.min : Number.MAX_VALUE);
    return newValue(count, sum, sum / count, max, min);
  };
  return (numbers || [])
    .filter(each => Number.isFinite(each))
    .reduce(reducer, newValue(0));
}