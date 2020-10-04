let inputNumber = document.getElementById("inputnumber");
let resultnumber = Math.floor(Math.random() * 10) + 1;
let realresult = document.getElementById("result");
let notification = document.getElementById("notification");
let qd_button = document.getElementById("qd_button");
qd_button.addEventListener('click', start);
function start() {
    if (Number(inputNumber.value) == Number(resultnumber)) {
        realresult.innerHTML = `Kết quả: ${resultnumber}`;
        notification.innerHTML = `Chúc mừng bạn đã trúng số`;
    } else {
        realresult.innerHTML = `Kết quả: ${resultnumber}`;
        notification.innerHTML = `Bạn đã dự đoán sai`;
    };
};