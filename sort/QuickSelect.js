function quickSelect(topIdx, array) {
    return select(topIdx, array, 0, array.length - 1)
}

function select(topIdx, array, lowIdx, hiIdx) {
    const pivotValue = array[hiIdx];
    let i = lowIdx;

    for (let j = i; j < hiIdx; j++) {
        if (array[j] <= pivotValue) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
        }
    }
    [array[i], array[hiIdx]] = [array[hiIdx], array[i]];

    if (topIdx !== i) {
        if (topIdx < i) {
            return select(topIdx, array, lowIdx, i - 1);
        }
        return select(topIdx, array, i + 1, hiIdx);
    }
    return array[i];
}


arr = [2, 1, 4, 7, 9];

console.log(`0 -> ${quickSelect(0, arr)}`);
console.log(`1 -> ${quickSelect(1, arr)}`);
console.log(`2 -> ${quickSelect(2, arr)}`);
console.log(`3 -> ${quickSelect(3, arr)}`);
console.log(`4 -> ${quickSelect(4, arr)}`);