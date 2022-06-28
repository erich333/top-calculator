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
    if(state.dotPending) {
        state.activeNumber = 
            Number(String(state.activeNumber) + '.' + e.target.textContent);
        state.dotPending = false;
    } else if(state.activeNumber === 0) {
        state.activeNumber = Number(e.target.textContent);
    } else {
        state.activeNumber = 
            Number(String(state.activeNumber) + e.target.textContent);
    }
    updateDisplay();
}

function operatorPressed(e) {

}

function equalsPressed(e) {

}

function clearPressed() {
    state.activeNumber = 0;
    state.dotPending = false;
    updateDisplay();
}

function negatePressed() {
    state.activeNumber *= -1;
    updateDisplay();
}

function dotPressed() {
    displayedNumberString = String(state.activeNumber);
    if(displayedNumberString.indexOf('.') != -1 || state.dotPending) {
        return 0;
    } else {
        state.dotPending = true;
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('#display');
    display.textContent = String(state.activeNumber);
    if(state.dotPending) display.textContent = display.textContent.concat('.');
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

const state = {
    activeNumber: 0,
    dotPending: false
};

updateDisplay();