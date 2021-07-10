import TodoList from './js/Classes/TodoList';
import UI from './js/Classes/UI';
import { validarForm } from './js/functiones/functions';
import { formTodo, todos } from './js/Variables';
import './styles.css';


export const ui = new UI();
export const todosArr = new TodoList();


loadListeners();
function loadListeners() {
    formTodo.addEventListener('click', validarForm);

    document.addEventListener('DOMContentLoaded', () => {

        if(todos !==  []) {
            ui.loadHTML(todos);
        }
    });
}