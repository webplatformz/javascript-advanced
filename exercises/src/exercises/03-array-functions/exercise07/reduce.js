// Exercise: summing numbers using reduce
//
// 1) rewrite the exported function using reduce()
//
// NOTE: you do not need to adapt the test-case
// HINT: filter(fnFilter), reduce(fnReducer)

export function sum(numbers) {
    let sum = 0;
    for (let index in numbers) {
        sum += numbers[index];
    }
    return sum;
}

// Exercise: concatenating strings using reduce
//
// 1) rewrite the exported function using reduce()
//
// NOTE: you do not need to adapt the test-case
// HINT: filter(fnFilter), reduce(fnReducer, initialValue)

export function concat(strings, delimiter) {
    let result = '';
    let streamed = 0;
    for (let index in strings) {
        let string = strings[index];
        if (string) {
            if (streamed === 0) {
                result = string;
            } else {
                result = result + delimiter + string;
            }
            streamed++;
        }
    }
    return result;
}

// Exercise: tallying objects using reduce
//
// 1) rewrite the exported function using functional style only
// 2) what is the problem of the solution ? (check musterloasung)
//
// NOTE: you do not need to adapt the test-case
// HINT: filter(fnFilter), reduce(fnReducer, initialValue)

export function tallyAnimals(animals) {
    let tally = {};
    for (let animal of animals) {
        let value = tally[animal.type] || 0;
        tally[animal.type] = value + 1;
    }
    return tally;
}



// Exercise: grouping objects using reduce
//
// 1) rewrite the exported function using reduce() only
// 2) is group still a pure function ?
// 3) is the reducer still a pure function ?
// 4) if not what does it require to make them pure ?
//
// NOTE: you do not need to adapt the test-case
// HINT: reduce(fnReducer, initialValue)

export function group(people, attributeName, collector) {
    let result = {};
    for (let index in people) {
        let person = people[index];
        let attributeValue = person[attributeName];
        let group = result[attributeValue];
        if (!group) {
            group = result[attributeValue] = [];
        }
        let collectedValue = collector(person);
        group.push(collectedValue);
    }
    return result;
}