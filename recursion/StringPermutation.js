function permute(str, prefix, permutations) {
    if (!prefix) prefix = "";
    if (!permutations) permutations = [];

    if (str) {
        for (let i = 0; i < str.length; i++) {
            const newPrefix = `${prefix}${str.charAt(i)}`;
            const strBeforeChar = str.substring(0, i);
            let strAfterChar = "";
            if (i != str.length - 1) {
                strAfterChar = str.substring(i + 1);
            }
            const newStr = `${strBeforeChar}${strAfterChar}`;

            permute(newStr, newPrefix, permutations);
        }
    } else {
        permutations.push(prefix)
    }
    return permutations;
}


console.log(permute("abcd"))

