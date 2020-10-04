function findOppositeNumber(n, inputNumber) {
    n = Number(n);
    inputNumber = Number(inputNumber);
    if (n % 2 == 0 && n > 4 && n < 20 && inputNumber >= 0 && inputNumber <= n - 1) {
        console.log(`Số đối của ${inputNumber} là ${inputNumber + n / 2} `)
    }
}
findOppositeNumber(10, 2);
