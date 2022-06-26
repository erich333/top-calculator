function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    return operand1 / operand2;
}

function operate(operator, operand1, operand2) {
    switch(operator) {
        case '+':
            return add(operand1, operand2);
        case '-':
            return subtract(operand1, operand2);
        case '*':
            return multiply(operand1, operand2);
        case '/':
            return divide(operand1, operand2);
        default:
            console.error("Unknown Operator");
    }
}

function numberPressed(e) {
    if(displayedNumber === 0) {
        displayedNumber = Number(e.target.textContent);
    } else {
        displayedNumber = 
            Number(String(displayedNumber).concat(e.target.textContent));
    }
    updateDisplay(displayedNumber);
}

function operatorPressed(e) {

}

function equalsPressed(e) {

}

function clearPressed() {
    displayedNumber = 0;
    updateDisplay(displayedNumber);
}

function negativePressed() {
    displayedNumber *= -1;
    updateDisplay(displayedNumber);
}

function updateDisplay(num) {
    const display = document.querySelector('#display');
    display.textContent = String(num);
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button =>
    button.addEventListener('click', numberPressed));

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button =>
    button.addEventListener('click', operatorPressed));

const equalsButton = document.querySelector('#equalsButton');
equalsButton.addEventListener('click', equalsPressed);

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', clearPressed);

const negativeButton = document.querySelector('#negativeButton');
negativeButton.addEventListener('click', negativePressed);

let displayedNumber = 0;
updateDisplay(displayedNumber);