function powerSet(inSet) {
    const resultSet = [];
    for (const elem of inSet) {
        const resultSetLen = resultSet.length;
        for (let i = 0; i < resultSetLen; i++) {
            const newSet = [...resultSet[i]];
            newSet.push(elem);
            resultSet.push(newSet);
        }
        resultSet.push([elem]);
    }
    resultSet.push([]);
    return resultSet;
}

console.log(powerSet([1, 2, 3]));