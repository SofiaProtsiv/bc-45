const taskInput = document.getElementById('new-task');
const addButton = document.querySelector('button.add');
const tasksHolder = document.getElementById('tasks-list');

const createNewTaskElement = newTodo => {
  return `<li>
        <input type="checkbox" />
        <label>${newTodo}</label>
        <input type="text" value=${newTodo} />
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </li>`;
};

const addTask = event => {
  // console.log(taskInput.textContent); //💩
  const newTodo = taskInput.value;

  if (newTodo === '') {
    taskInput.classList.add('error');
    return;
  }

  tasksHolder.insertAdjacentHTML('afterbegin', createNewTaskElement(newTodo));

  taskInput.value = '';
  taskInput.classList.remove('error');
};

const deleteTask = event => {
  if (!event.target.classList.contains('delete')) {
    return;
  }

  const todoToDelete = event.target.parentNode;

  // todoToDelete.outerHTML = '';
  todoToDelete.remove();
};

const editTask = event => {};

document.addEventListener('keyup', event => {
  if (event.code === 'Enter') {
    addTask();
  }
});
addButton.addEventListener('click', addTask);

tasksHolder.addEventListener('click', editTask);
tasksHolder.addEventListener('click', deleteTask);
