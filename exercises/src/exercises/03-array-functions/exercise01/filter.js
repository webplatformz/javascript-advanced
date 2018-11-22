// Exercise: filtering
//
// rewrite the completely procedural-oriented function to a purely functional one
//
// NOTE: you do not need to adapt the test-case
// HINT: filter(fnFilter)

export function positiveNumbersIncludingZero(numbers) {
    let filtered = [];
    for (let each of numbers || []) {
        if (each >= 0) {
            filtered.push(each);
        }
    }
    return filtered;
}
