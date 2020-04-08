function maxSum(arr) {
    let result = 0;
    let curSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (curSum + arr[i] > 0) {
            curSum += arr[i];

            if (curSum > result) {
                result = curSum;
            }
        } else {
            curSum = 0;
        }
    }
    return result;
}

console.log(maxSum([-1, 2, 3, -7, 3, 4])); // expected 7
console.log(maxSum([34, -50, 42, 14, -5, 86])); // expected 137