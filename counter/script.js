function callCounter() {
    let counter = 0;
    return {
        callIncrement: function() {
            counter++;
            count.textContent = counter;
        },
        callDecrement: function() {
            counter--;
            count.textContent = counter;
        },
        callReset: function() {
            counter = 0;
            count.textContent = counter;
        }
    };
}

const count = document.querySelector('#counter');
const increment = document.querySelector('#increase'); // Changed from #increment to #increase
const decrement = document.querySelector('#decrease'); // Changed from #decrement to #decrease
const reset = document.querySelector('#reset');

const counterFunctions = callCounter();

increment.addEventListener('click', counterFunctions.callIncrement);
decrement.addEventListener('click', counterFunctions.callDecrement);
reset.addEventListener('click', counterFunctions.callReset);