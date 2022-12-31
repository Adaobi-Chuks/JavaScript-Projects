const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const percent = document.getElementById("percent");
const equals = document.getElementById("equals");
const decimal = document.getElementById("decimal");
const flip = document.getElementById("flip");
const cancel = document.getElementById("cancel");
const display = document.getElementById("display");

let firstNum = "";
let secondNum = "";
let operator = "";

num0.addEventListener("click", () => {
    display.textContent += "0";
});

num1.addEventListener("click", () => {
    display.textContent += "1";
});

num2.addEventListener("click", () => {
    display.textContent += "2";
});

num3.addEventListener("click", () => {
    display.textContent += "3";
});

num4.addEventListener("click", () => {
    display.textContent += "4";
});

num5.addEventListener("click", () => {
    display.textContent += "5";
});

num6.addEventListener("click", () => {
    display.textContent += "6";
});

num7.addEventListener("click", () => {
    display.textContent += "7";
});

num8.addEventListener("click", () => {
    display.textContent += "8";
});

num9.addEventListener("click", () => {
    display.textContent += "9";
});

decimal.addEventListener("click", () => {
    display.textContent += ".";
});

add.addEventListener("click", () => {
    firstNum = display.textContent;
    operator = "+";
    display.textContent = "";
});

subtract.addEventListener("click", () => {
    firstNum = display.textContent;
    operator = "-";
    display.textContent = "";
});

multiply.addEventListener("click", () => {
    firstNum = display.textContent;
    operator = "*";
    display.textContent = "";
});

divide.addEventListener("click", () => {
    firstNum = display.textContent;
    operator = "/";
    display.textContent = "";
});

cancel.addEventListener("click", () => {
    firstNum = "";
    operator = "";
    secondNum = "";
    display.textContent = "";
});

equals.addEventListener("click", () => {
    secondNum = display.textContent;
    display.textContent = calculate(firstNum, operator, secondNum);
})

percent.addEventListener("click", () => {
    display.textContent /= 100;
})

flip.addEventListener("click", () => {
    display.textContent = -(display.textContent);
})

function calculate (firstNum, operator, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    switch (operator) {
        case "+":
            return (firstNum + secondNum);
        case "-":
            return (firstNum - secondNum);
        case "*":
            return (firstNum * secondNum);
        case "/":
            return (firstNum / secondNum);
        default:
            return "";
    }
}
