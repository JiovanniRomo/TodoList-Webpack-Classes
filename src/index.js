import './styles.css';


const formTodo = document.querySelector('#agregar-todo');
const mainContainer = document.querySelector('.main-container__todos--items');
const allBtn = document.querySelector('#all--todos');
const activeBtn = document.querySelector('#active--todos');
const completedBtn = document.querySelector('#completed--todos');
const themeBtn = document.querySelector('.icon');
const containerFilter = document.querySelector('.item-filter');
const body = document.querySelector('body');
const clearBtn = document.querySelector('#clear--todos');
let todos = [];

//Classes
class UI {

    mostrarError(mensaje) {

        const errorExiste = document.querySelector('.error');
        if (!errorExiste) {

            const error = document.createElement('div');
            error.classList.add('item', 'error');

            const errorParrafo = document.createElement('p');
            error.classList.add('error--mensaje');
            errorParrafo.textContent = mensaje;

            error.appendChild(errorParrafo);

            mainContainer.appendChild(error);

            setTimeout(() => {
                error.remove();
            }, 3000);
        }
    }

    loadHTML(todos) {

        this.clearHTML();

        todos.map(todo => {

            const { id, description } = todo;

            const container = document.createElement('div');
            container.classList.add('item', 'item--todo');
            container.dataset.id = id;

            const completed = document.createElement('a');
            completed.classList.add('complete--todo');


            const paragraphTodo = document.createElement('p');
            paragraphTodo.textContent = description;

            const spanDelete = document.createElement('span');
            spanDelete.classList.add('todo--delete');


            container.appendChild(completed);
            container.appendChild(paragraphTodo);
            container.appendChild(spanDelete);


            mainContainer.appendChild(container);
        })

        syncStorage();
    }

    clearHTML() {
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
    }

}

class TODOS {
    // constructor() {
    //     this.todos = todoArrLocalStorage || [];
    // }

    // syncStorage() {
    //     localStorage.setItem('todos', JSON.stringify(this.todos));
    // }

    addTodo(todo) {
        todos = [...todos, todo];
    }


}

class TODO {
    constructor(description) {
        this.id = new Date().getTime();
        this.description = description;
        this.done = false;
    }
}

//instancias
const ui = new UI();
const todosArr = new TODOS();

// Object.assign(ui, syncStorage);

//Listeners 
loadListeners();
function loadListeners() {
    formTodo.addEventListener('click', validarForm);

    document.addEventListener('DOMContentLoaded', () => {
        todos = JSON.parse(localStorage.getItem('todos')) || [];
        ui.loadHTML(todos);

        console.log(todos);
    });
}

function validarForm(e) {
    e.preventDefault();

    const todo = document.querySelector('#form-input').value;

    if (todo === '' || todo.length < 3) {
        ui.mostrarError('No puedes no tener nada que hacer. Agrega algo, por favor!');
        return;
    }

    agregarTodo(todo);
}

function agregarTodo(todo) {
    const todoObj = new TODO(todo);

    todosArr.addTodo(todoObj);

    console.log(todosArr);
    // const { todos } = todosArr;


    const formulario = document.querySelector('#formulario');
    formulario.reset();

    syncStorage();


    ui.loadHTML(todos);
}

// function addTodo(e) {
//     e.preventDefault();


//     if (todo === '') {
//         alert('No puedes agregar un TODO vacio');
//         return;
//     }

//     const todoObj = {
//         id: Date.now(),
//         todo,
//         complete: false
//     };

//     todos = [...todos, todoObj];
//     syncStorage();
//     loadHTML();

//     formTodo.reset();
// }

// function loadHTML(todosArr = todos) {

//     cleanHTML();

//     if (todosArr.length > 0) {
//         todosArr.forEach(todo => {

//             const container = document.createElement('div');
//             container.classList.add('item', 'item--todo');
//             container.setAttribute('id', 'item');

//             const completed = document.createElement('a');
//             completed.classList.add('complete--todo');
//             completed.onclick = () => {
//                 completeTodo(todo.id)
//             }

//             const paragraphTodo = document.createElement('p');
//             paragraphTodo.textContent = todo.todo;

//             const spanDelete = document.createElement('span');
//             spanDelete.classList.add('todo--delete');
//             spanDelete.onclick = () => {
//                 deleteTodo(todo.id);
//             }

//             container.appendChild(completed);
//             container.appendChild(paragraphTodo);
//             container.appendChild(spanDelete);


//             mainContainer.appendChild(container);
//         });
//     }

//     syncStorage();
// }

// function cleanHTML() {

// }

// function completeTodo(id) {
//     let todosUpdated = todos.map(todo => {

//         if (todo.id === id) {


//             if (todo.complete) {
//                 todo.complete = false;
//                 syncStorage();
//                 return todo;
//             } else {
//                 todo.complete = true;
//                 syncStorage();

//                 return todo;
//             }
//         } else {
//             return todo;
//         }
//     })

//     todos = [...todosUpdated];
// }

// function deleteTodo(id) {
//     todos = todos.filter(todo => todo.id !== id);
//     loadHTML();
// }

function syncStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// function allTodos() {
//     loadHTML();
// }

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