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
    const display = document.querySelector('#display');
    display.textContent += e.target.textContent;
    displayedOperand = Number(display.textContent);
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button =>
     button.addEventListener('click', numberPressed));

let displayedOperand;