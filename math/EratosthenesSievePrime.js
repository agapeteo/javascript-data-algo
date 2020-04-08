const primes = limit => {
    const arr = Array(limit).fill(false);
    for (let i = 2; i * i < limit; i++) {
        if (arr[i]) continue;

        for (let j = i + i; j < limit; j += i) {
            arr[j] = true;
        }
    }
    const result = [];
    for (let k = 2; k < limit; k++) {
        if (!arr[k]) {
            result.push(k);
        }
    }
    return result;
};

console.log(primes(100));