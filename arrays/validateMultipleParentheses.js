function mapFor(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i)
    }
    return map
}

function validate(openArr, closedArr, str) {
    const openChars = mapFor(openArr);
    const closeChars = mapFor(closedArr);
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const curChar = str[i];
        if (openChars.has(curChar)) {
            stack.push(curChar)
        } else if (closeChars.has(curChar)) {
            if (stack.length == 0) return false;

            const topChar = stack.pop();
            if (closeChars.get(curChar) != openChars.get(topChar)) {
                return false
            }
        }
    }
    return stack.length == 0
}

const openArr = ["{", "[", "("];
const closeArr = ["}", "]", ")"];
console.log(validate(openArr, closeArr, "to ((be)) or (not) to be")); // true
console.log(validate(openArr, closeArr, "to ([be]) or {not} to be")); // true
console.log(validate(openArr, closeArr, "to ( [be] {or} not }")); // false
console.log(validate(openArr, closeArr, ")(")); // false
console.log(validate(openArr, closeArr, "to (be) }{ or not")); // false