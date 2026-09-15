function createTodo(text) {

    const todo = $('<div>');

    todo.addClass('todo');
    todo.text(text);

    todo.on('click', function () {

        const remove = confirm('Do you want to remove this TO DO?');

        if (remove) {
            $(this).remove();
            saveTodos();
        }
    });

    $('#ft_list').prepend(todo);
}


function saveTodos() {

    const todos = [];

    $('.todo').each(function () {
        todos.push($(this).text());
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

    todos.reverse().forEach(function (text) {
        createTodo(text);
    });
}


$('#new-button').on('click', function () {

    const text = prompt('Create a new TO DO:');

    if (text !== null && text.trim() !== '') {
        createTodo(text.trim());
        saveTodos();
    }
});


loadTodos();