export function positiveNumbersIncludingZero(numbers) {
    return (numbers || []).filter(each => each >= 0);
}
