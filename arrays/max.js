const max = arr => {
    if (!arr) {
        return undefined
    }
    let max = arr[0];
    arr.forEach(n => {
        if (n > max) {
            max = n
        }
    });
    return max
};

console.log(max([1, 88, -99])); // 88
console.log(max()); // undefined