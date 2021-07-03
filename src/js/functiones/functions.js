import { todosArr, ui } from "../..";

export function syncStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

export function validarForm(e) {
    e.preventDefault();

    const todo = document.querySelector('#form-input').value;

    if (todo === '' || todo.length < 2) {
        ui.mostrarError('No puedes no tener nada que hacer. Agrega algo, por favor!');
        return;
    }

    agregarTodo(todo);
}

export function agregarTodo(todo) {
    const todoObj = new TODO(todo);

    todosArr.addTodo(todoObj);

    console.log(todosArr);
    // const { todos } = todosArr;


    const formulario = document.querySelector('#formulario');
    formulario.reset();

    syncStorage();


    ui.loadHTML(todos);
}
