// Variables globales para el manejo de la calculadora
let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

/**
 * Event listeners para los botones de la calculadora
 * Se agregan los números al display, se establece la operación
 * y se calcula el resultado
 */
document.querySelectorAll('.btn.number').forEach(button => {
    button.addEventListener('click', () => appendNumber(button.dataset.number));
});

/**
 * Event listeners para los botones de operación
 * Se establece la operación y se calcula el resultado
 * al presionar el botón de igual
 * Se limpia el display al presionar el botón de clear
 */
document.querySelectorAll('.btn.operation').forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'equals') {
            calculateResult();
        } else {
            setOperation(button.dataset.operation);
        }
    });
});

// Event listener para el botón de clear
document.getElementById('clear').addEventListener('click', clearDisplay);

/**
 * Función para agregar un número al display
 * @param number
 */
function appendNumber(number) {
    display.value += number;
}

/**
 * Función para establecer la operación
 * @param operation
 */
function setOperation(operation) {
    if (display.value === '') return;
    firstOperand = display.value;
    currentOperation = operation;
    display.value = '';
}


/**
 * Función para calcular el resultado de la operación
 */
function calculateResult() {
    if (display.value === '' || firstOperand === '') return;
    secondOperand = display.value;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    // Mostrar el resultado en el display
    display.value = result;
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
}

/**
 * Función para limpiar el display
 */
function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
}