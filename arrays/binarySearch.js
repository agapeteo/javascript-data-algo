function binarySearch(arr, value) {
    let lowIdx = 0;
    let highIdx = arr.length - 1;

    while (lowIdx <= highIdx) {
        const midIdx = Math.floor(lowIdx + (highIdx - lowIdx) / 2)

        if (value === arr[midIdx]) {
            return midIdx
        }
        if (value > arr[midIdx]) {
            lowIdx = midIdx + 1
        } else {
            highIdx = midIdx - 1
        }
    }
}

const numbers = [1, 3, 5, 7, 9];
console.log(binarySearch(numbers, 3)); // 1
console.log(binarySearch(numbers, 4)); // undefined