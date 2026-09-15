const newButton = document.querySelector('#new-button');
const todoList = document.querySelector('#ft_list');


function createTodo(text) {
  const todo = document.createElement('div');

  todo.className = 'todo';
  todo.textContent = text;

  todo.addEventListener('click', function () {
    const remove = confirm('Do you want to remove this TO DO?');

    if (remove) {
      todo.remove();
      saveTodos();
    }
  });

  todoList.prepend(todo);
}


function saveTodos() {
  const todos = [];

  document.querySelectorAll('.todo').forEach(function (todo) {
    todos.push(todo.textContent);
  });

  document.cookie =
    'todos=' +
    encodeURIComponent(JSON.stringify(todos)) +
    '; max-age=31536000; path=/';
}


function loadTodos() {
  const cookies = document.cookie.split('; ');

  const todoCookie = cookies.find(function (cookie) {
    return cookie.startsWith('todos=');
  });

  if (!todoCookie) {
    return;
  }

  const todos = JSON.parse(
    decodeURIComponent(todoCookie.substring(6))
  );

  todos.forEach(function (text) {
    createTodo(text);
  });
}


newButton.addEventListener('click', function () {
  const text = prompt('Create a new TO DO:');

  if (text !== null && text.trim() !== '') {
    createTodo(text.trim());
    saveTodos();
  }
});


loadTodos();