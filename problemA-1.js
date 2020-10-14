function findOppositeNumber(n, inputNumber) {
    if (inputNumber >= (n / 2)) {
        return inputNumber - n / 2;
    } else {
        return n / 2 + inputNumber;
    }
};
console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));