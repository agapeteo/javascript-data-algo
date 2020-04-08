function waysCount(stairsCount, jumpWays, cache) {
    cache = Array(stairsCount + 1).fill(0)
    return waysCountWithCache(stairsCount, jumpWays, cache)
}

function waysCountWithCache(stairsCount, jumpWays, cache) {
    if (stairsCount < 0) return 0;
    if (stairsCount == 0) return 1;

    let totalCount = 0;
    for (let curJump of jumpWays) {
        const curWaysIdx = stairsCount - curJump;
        if (curWaysIdx < 0) {
            continue;
        }
        let curWays = cache[curWaysIdx];
        if (!curWays) {
            curWays = waysCountWithCache(curWaysIdx, jumpWays, cache);
            cache[curWaysIdx] = curWays;
        }
        totalCount += curWays
    }
    return totalCount
}


console.log(waysCount(5, [1, 2, 5]))
console.log(waysCount(4, [1, 2, 5]))
console.log(waysCount(3, [1, 2, 5]))
console.log(waysCount(2, [1, 2, 5]))
console.log(waysCount(1, [1, 2, 5]))