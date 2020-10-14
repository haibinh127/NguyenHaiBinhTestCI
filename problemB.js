let btnRoll = document.getElementById('roll');
let txtNumber = document.getElementById('inputNumber');
let randomNumbe = getRandomNumber();
let count = 0;
function getRandomNumber() {
    randomNumber = Number(Math.floor(Math.random() * 10) + 1);
    return randomNumber;
}
function checkInputNumber() {
    let number = txtNumber.value;
    while (true) {
        if (number === "") {
            alert('You must input number fisrt!');
            break;
        } else if (isNaN(number)) {
            alert('Please input a number!');
            break;
        } else if (number < 1 || number > 10) {
            alert('Number must in range 1 - 10!');
            break;
        } else {
            count++;
            return number;
        }
    }
}
btnRoll.addEventListener('click', () => {
    let number = checkInputNumber();
    if (number == randomNumber) {
        alert('Congrat! You won a price!!!');
        count = 0;
    }
    if (!isNaN(number) && (number <= 10 && number >= 1)) {
        alert(`Wrong! ${3 - count} guess time(s) left`);
    }
    if (count == 3) {
        alert(`You lose! The lucky number is ${randomNumber}`);
        alert("We will restart the game")
        window.location.assign("problemB.html");
    }
});