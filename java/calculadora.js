let currentOperation = null;
let currentValue = '';
let previousValue = '';


document.getElementById('showCalculator').onclick = function() {
    const calculator = document.getElementById('calculator');
    calculator.style.display = calculator.style.display === 'none' ? 'block' : 'none';
}


function appendNumber(number) {
    currentValue += number;
    document.getElementById('display').value = currentValue;
}


function setOperation(operator) {
    if (currentValue === '') return;
    if (previousValue !== '') {
        calculateResult();
    }
    currentOperation = operator;
    previousValue = currentValue;
    currentValue = '';
}


function calculateResult() {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Divisão por zero não permitida.");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    currentOperation = null;
    previousValue = '';
    document.getElementById('display').value = currentValue;
}


function clearDisplay() {
    currentValue = '';
    previousValue = '';
    currentOperation = null;
    document.getElementById('display').value = '';
}