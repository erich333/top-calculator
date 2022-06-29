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
    if(state.savedOperator !== null && state.savedNumber === null) {
        state.savedNumber = state.activeNumber;
        state.activeNumber = 0;
        state.displayedText = '0';
    }

    if(state.displayedText === '0') {
        state.displayedText = e.target.textContent;
        state.activeNumber = Number(state.displayedText);
    } else if(state.displayedText.length < MAXDIGITS) {
        state.displayedText += e.target.textContent;
        state.activeNumber = Number(state.displayedText);
    }
    updateDisplay();
}

function operatorPressed(e) {
    if(state.savedNumber !== null && state.savedOperator !== null) {
        // Execute if the user appears to be chaining operators
        //   eg 12 + 9 - 5 * 3
        state.activeNumber = operate(state.savedOperator, 
            state.savedNumber, state.activeNumber);
        state.displayedText = String(state.activeNumber);
        state.savedOperator = e.target.textContent;
        state.savedNumber = null;
        updateDisplay();
    } else {
        state.savedOperator = e.target.textContent;
    }
}

function equalsPressed(e) {
    if(state.savedOperator && state.savedNumber) {
        state.activeNumber = operate(state.savedOperator, 
            state.savedNumber, state.activeNumber);
        state.displayedText = String(state.activeNumber);
        state.savedNumber = null;
        state.savedOperator = null;
        updateDisplay();        
    }
}

function clearPressed() {
    state.activeNumber = 0;
    state.displayedText = '0';
    state.savedOperator = null;
    state.savedNumber = null;
    updateDisplay();
}

function negatePressed() {
    state.activeNumber *= -1;
    state.displayedText = String(state.activeNumber);
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

const MAXDIGITS = 22;
const state = {
    activeNumber: 0,
    displayedText: '0',
    savedOperator: null,
    savedNumber: null
};

updateDisplay();