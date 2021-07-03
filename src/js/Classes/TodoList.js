import { ui } from "../../index";
import { syncStorage } from "../functiones/functions";
import { todos } from "../Variables";

class TodoList {
    // constructor() {
    //     this.todos = todoArrLocalStorage || [];
    // }

    // syncStorage() {
    //     localStorage.setItem('todos', JSON.stringify(this.todos));
    // }

    addTodo(todo) {
        todos = [...todos, todo];

        syncStorage();
    }

    completeTodo(id) {
        todos.forEach(todo => {
            if (todo.id === id) {
                if (todo.complete) {
                    todo.complete = false;
                    syncStorage();
                    return todo;
                } else {
                    return todo;
                }
            }
        })
    }

    deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        syncStorage();
    }

    todoCompleteFilter() {
        todos.filter(todo => todo.complete === true); 
        ui.loadHTML()
    }

    clearCompletedTodo () {
        todos = todos.filter(todo => todo.complete === false);
        ui.loadHTML();
        syncStorage();
    }


}

export default TodoList;