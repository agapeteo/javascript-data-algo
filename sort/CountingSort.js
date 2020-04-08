function max(arr) {
    let max = null;
    for (let v of arr) {
        if (max < v) {
            max = v;
        }
    }
    return max
}

function sort(arr) {
    let countingSize = max(arr) + 1;
    const countingArr = Array(countingSize).fill(null);

    for (let v of arr) {
        let curArr = countingArr[v];
        if (!curArr) {
            curArr = [v];
            countingArr[v] = curArr
        } else {
            curArr.push(v)
        }
    }

    let idx = 0;
    for (let curArr of countingArr) {
        if (!curArr) continue;
        for (let v of curArr) {
            arr[idx] = v;
            idx++;
        }
    }
}

arr = [3, 4, 5, 3, 12];
sort(arr);
console.log(arr);

