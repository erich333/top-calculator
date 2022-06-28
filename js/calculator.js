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
    if(state.displayedText === '0') {
        state.displayedText = e.target.textContent;
        state.activeNumber = Number(state.displayedText);
    } else {
        state.displayedText += e.target.textContent;
        state.activeNumber = Number(state.displayedText);
    }
    updateDisplay();
}

function operatorPressed(e) {

}

function equalsPressed(e) {

}

function clearPressed() {
    state.activeNumber = 0;
    state.displayedText = '0';
    updateDisplay();
}

function negatePressed() {
    state.activeNumber *= -1;
    state.displayedText = String(activeNumber);
    updateDisplay();
}

function dotPressed() {
    if(state.displayedText.indexOf('.') != -1 || 
       state.displayedText.slice(-1) === '.') {
        return 0;
    } else {
        state.displayedText += '.';
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('#display');
    display.textContent = state.displayedText;
    console.log(state.activeNumber + ' ' + state.displayedText);
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
    displayedText: '0',
    dotPending: false
};

updateDisplay();