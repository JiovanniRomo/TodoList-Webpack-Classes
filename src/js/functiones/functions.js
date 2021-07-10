import { todosArr, ui } from "../..";
import TODO from '../Classes/TODO';


export function validarForm(e) {
    e.preventDefault();

    const todo = document.querySelector('#form-input').value;

    if (todo === '' || todo.length < 2) {
        ui.mostrarError('No puedes no tener nada que hacer. Agrega algo, por favor!');
        return;
    }

    agregarTodo(todo);
}

export function agregarTodo(todoValue) {
    const todoObj = new TODO(todoValue);

    todosArr.addTodo(todoObj);


    const formulario = document.querySelector('#formulario');
    formulario.reset();


}
