function validate(open, closed, str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i);
        if (c == open) {
            counter++
        } else if (c == closed) {
            if (counter == 0) return false;
            counter--
        }
    }
    return counter == 0
}

console.log(validate("(", ")", "to ((be)) or (not) to be")); // true
console.log(validate("(", ")", "to ((be)(or) not")); // false
console.log(validate("(", ")", ")(")); // false
console.log(validate("(", ")", "to (be)) or (")); // false