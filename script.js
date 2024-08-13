let number = 0;

const maxNumber = 150;
const minNumber = 0;

let history = [];
let historyIndex = -1;

const numberDisplay = document.getElementById('number');
const progressBar = document.getElementById('progress-bar');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const undoButton = document.getElementById('undo');
const redoButton = document.getElementById('redo');

function updateDisplay() 
{
    numberDisplay.textContent = number;
    progressBar.style.width = `${(number / maxNumber) * 100}%`;
}

function addHistory() 
{
    history = history.slice(0, historyIndex + 1);
    history.push(number);
    historyIndex++;
}

decrementButton.addEventListener('click', () => {
    if (number > minNumber) 
    {
        number--;
        addHistory();
        updateDisplay();
    }
});

incrementButton.addEventListener('click', () => {
    if (number < maxNumber)
    {
        number++;
        addHistory();
        updateDisplay();
    }
});

undoButton.addEventListener('click', () => {
    if (historyIndex > 0) 
    {
        historyIndex--;
        number = history[historyIndex];
        updateDisplay();
    }
});

redoButton.addEventListener('click', () => {
    if (historyIndex < history.length - 1) 
    {
        historyIndex++;
        number = history[historyIndex];
        updateDisplay();
    }
});

addHistory();
updateDisplay();
