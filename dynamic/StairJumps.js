function waysCount(stairsCount, jumpWays) {
    if (stairsCount < 0) return 0;
    if (stairsCount == 0) return 1;

    let totalCount = 0;
    for (let curJump of jumpWays) {
        totalCount += waysCount(stairsCount - curJump, jumpWays);
    }
    return totalCount
}

console.log(waysCount(5, [1, 2, 5]))
console.log(waysCount(4, [1, 2, 5]))
console.log(waysCount(3, [1, 2, 5]))
console.log(waysCount(2, [1, 2, 5]))
console.log(waysCount(1, [1, 2, 5]))