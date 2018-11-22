export function sumInDogYears(animals) {
    return (animals || [])
        .filter(each => each.type == 'dog')
        .map(each => each.age)
        .reduce((sum, each) => sum + each, 0);
}

export function sumInHumanYears(animals) {
    return sumInDogYears(animals) * 7;
}