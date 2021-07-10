import { ui } from "../../index";
import { todos } from "../Variables";

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(todo) {
        this.todos = [...this.todos, todo];

        ui.loadHTML(this.todos);
    }

    completeTodo(id) {
        this.todos.forEach(todo => {
            if (todo.id === id) {
                if (todo.complete) {
                    todo.complete = false;
                    return todo;
                } else {
                    return todo;
                }
            }
        })
    }


    deleteTodo(id) {
        this.todos = todos.filter(todo => todo.id !== id);
    }

    todoCompleteFilter() {
        this.todos.filter(todo => todo.complete === true);
        ui.loadHTML();
    }

    clearCompletedTodo() {
        this.todos = this.todos.filter(todo => todo.complete === false);
        ui.loadHTML();
    }


}

export default TodoList;