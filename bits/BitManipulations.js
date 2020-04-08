function twoInBinary() {
    return 0b10
}

function twoInBinary2() {
    return parseInt("10", 2)
}

function numberToBinaryStr(number) {
    return number.toString(2)
}

function checkBit(idx, number) {
    const mask = 1 << idx;
    return ((number & mask) != 0)
}

function setBit(idx, number) {
    const mask = 1 << idx;
    return number | mask
}

function clearBit(idx, number) {
    const mask = ~(1 << idx);
    return number & mask
}

function toggleBit(idx, number) {
    const mask = 1 << idx;
    return number ^ mask
}

function isEven(number) {
    return (1 & number) == 0
}
