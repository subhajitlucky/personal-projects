const input = document.querySelector('#input');
const button = document.querySelector('#add');
const tasks = document.querySelector('#tasks');

function addTask() {
    const inputtedValue = input.value;
    
    // Do nothing if the input is empty
    if (inputtedValue.trim() === '') return;

    // Create a new list item
    const taskList = document.createElement('li');

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a span for the task text
    const taskText = document.createElement('span');
    taskText.textContent = inputtedValue;

    // Add event listener to checkbox
    checkbox.addEventListener('click', function() {
        if (checkbox.checked) {
            taskText.style.textDecoration = 'line-through'; // Add strikethrough
        } else {
            taskText.style.textDecoration = 'none'; // Remove strikethrough
        }
    });

    // Append checkbox and task text to the list item
    taskList.appendChild(checkbox);
    taskList.appendChild(taskText);

    // Add the list item to the tasks list
    tasks.appendChild(taskList);

    // Clear the input field
    input.value = '';
}

button.addEventListener('click', addTask);
