
document.getElementById('create-task').addEventListener('click', function () {
    console.log('AMi click ase mama');

    const titleField = document.getElementById('title');
    const titleValue = titleField.value;

    const noteField = document.getElementById('note');
    const noteValue = noteField.value;

    if (titleValue === '' || noteValue === '') {
        alert('Please enter both a title and a note.');
        return;
    }

    const newToDo = document.createElement('tr');

    const todoTitle = document.createElement('th');
    todoTitle.innerText = titleValue;

    const todoNote = document.createElement('td');
    todoNote.innerText = noteValue;

    newToDo.appendChild(todoTitle);
    newToDo.appendChild(todoNote);

    const todolistContainer = document.getElementById('todolist-container');
    todolistContainer.appendChild(newToDo);

    titleField.value = '';
    noteField.value = '';
});

