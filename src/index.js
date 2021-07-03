import TodoList from './js/Classes/TodoList';
import UI from './js/Classes/UI';
import { syncStorage, validarForm } from './js/functiones/functions';
import { formTodo, todos } from './js/Variables';
import './styles.css';


//instancias
export const ui = new UI();
export const todosArr = new TodoList();


//Listeners 
loadListeners();
function loadListeners() {
    formTodo.addEventListener('click', validarForm);

    document.addEventListener('DOMContentLoaded', () => {
        todos = JSON.parse(localStorage.getItem('todos')) || [];
        ui.loadHTML(todos);
        syncStorage();
        console.log(todos);
    });
}



// function activeFilter() {

//     filterTODOS = todos.filter(todo => todo.complete === false);

//     loadHTML(filterTODOS);
// }

// function completedFilter() {

//     filterTODOS = todos.filter(todo => todo.complete === true);
//     loadHTML(filterTODOS);
//     console.log(filterTODOS)
// }

// function clearCompleted() {
//     todos = todos.filter(todo => todo.complete !== true);
//     loadHTML();
//     syncStorage();
// }