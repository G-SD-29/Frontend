const todoForm = document.getElementById('todo-form');
const newTodoInput = document.getElementById('new-todo');
const todoList = document.getElementById('todo-list');

function createTodoItem(task) {
	const li = document.createElement('li');
	li.className =
		'flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-md';

	const span = document.createElement('span');
	span.textContent = task;
	span.className = 'flex-grow';

	const editButton = document.createElement('button');
	editButton.textContent = 'Edit';
	editButton.className = 'text-yellow-500 ml-2';
	editButton.addEventListener('click', () => {
		editTodoItem(span);
	});

	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete';
	deleteButton.className = 'text-red-500 ml-2';
	deleteButton.addEventListener('click', () => {
		deleteTodoItem(li);
	});

	li.appendChild(span);
	li.appendChild(editButton);
	li.appendChild(deleteButton);
	todoList.appendChild(li);
}

function addTodoItem(event) {
	event.preventDefault();
	const task = newTodoInput.value.trim();

	if (task) {
		createTodoItem(task);
		console.log(task);
		newTodoInput.value = '';
	}
}

function editTodoItem(span) {
	const newTask = prompt('Edit your Task', span.textContent);
	if (newTask !== null) {
		span.textContent = newTask.trim();
	}
}

function deleteTodoItem(li) {
	todoList.removeChild(li);
}

todoForm.addEventListener('submit', addTodoItem);
