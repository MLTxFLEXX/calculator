const display = document.getElementById('display');
const calculator = document.getElementById('calculator');

function appendValue(value) {
    if (display.innerText ==='0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    let current = display.innerText;
    if (current.length > 1) {
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
    } catch {
        display.innerText = 'Error';
    }

}

function toggleTheme() {
    calculator.classList.toggle('light');
}
