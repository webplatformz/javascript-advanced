// Exercise: find first
//
// 1) rewrite the exported functions to use only pure functions
// 2) provide the find first functionality for ALL animals
//
// NOTE: you will need to adapt the test-cases !
// HINT: find(fnFilter)

export function findFirstDogOlderThan(animals, age) {
    for (let animal of animals) {
        if (animal.type === 'dog' && animal.age > age) {
            return animal;
        }
    }
    return null;
}
export function findFirstCatEqualTo(animals, age) {
    for (let animal of animals) {
        if (animal.type === 'cat' && animal.age == age) {
            return animal;
        }
    }
    return null;
}

export function findFirstHamsterOlderEquals(animals, age) {
    for (let animal of animals) {
        if (animal.type === 'hamster' && animal.age >= age) {
            return animal;
        }
    }
    return null;
}

export function findFirstMouseOfAge(animals, age) {
    for (let animal of animals) {
        if (animal.type === 'mouse' && animal.age === age) {
            return animal;
        }
    }
    return null;
}