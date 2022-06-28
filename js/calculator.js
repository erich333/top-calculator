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
    if(dotPending) {
        displayedNumber = 
            Number(String(displayedNumber) + '.' + e.target.textContent);
        dotPending = false;
    } else if(displayedNumber === 0) {
        displayedNumber = Number(e.target.textContent);
    } else {
        displayedNumber = 
            Number(String(displayedNumber) + e.target.textContent);
    }
    updateDisplay(displayedNumber);
}

function operatorPressed(e) {

}

function equalsPressed(e) {

}

function clearPressed() {
    displayedNumber = 0;
    dotPending = false;
    updateDisplay(displayedNumber);
}

function negatePressed() {
    displayedNumber *= -1;
    updateDisplay(displayedNumber);
}

function dotPressed() {
    displayedNumberString = String(displayedNumber);
    if(displayedNumberString.indexOf('.') != -1 || dotPending) {
        return 0;
    } else {
        dotPending = true;
    }
    updateDisplay(displayedNumber);
}

function updateDisplay(num) {
    const display = document.querySelector('#display');
    display.textContent = String(num);
    if(dotPending) display.textContent = display.textContent.concat('.');
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

const negateButton = document.querySelector('#negateButton');
negateButton.addEventListener('click', negatePressed);

const dotButton = document.querySelector('#dotButton');
dotButton.addEventListener('click', dotPressed);

let displayedNumber = 0;
let dotPending = false;
updateDisplay(displayedNumber);