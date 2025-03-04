
// // let display = document.getElementById('inputBox');
// // let buttons = document.querySelectorAll('button');
// // let buttonsArray = Array.from(buttons);
// // let string = '';

// // buttonsArray.forEach(btn => {
// //     btn.addEventListener('click', (e) => {
// //         if (e.target.innerHTML === "DEL") {  
// //             string = string.substring(0, string.length - 1);
// //             display.value = string;
// //         } else if (e.target.innerHTML === "AC") {  
// //             string = '';
// //             display.value = string;
// //         } else if (e.target.innerHTML === "=") { 
// //             string = eval(string);  
// //             display.value = string;
// //         } else {
// //             string += e.target.innerHTML;  
// //             display.value = string;
// //         }
// //     });
// // });


let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;  // Prevent appending operator without a number
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);  // Set the first operand
    }
    operator = op;
    currentInput = '';  // Clear the current input to prepare for next number
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function calculate() {
    if (operator === null || currentInput === '') return;  // Prevent calculation without complete inputs

    let secondOperand = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                alert('Cannot divide by zero');
                clearDisplay();
                return;
            }
            result = firstOperand / secondOperand;
            break;
    }

    currentInput = result.toString();  // Display result as string
    operator = null;  // Reset operator
    firstOperand = null;  // Reset first operand
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

