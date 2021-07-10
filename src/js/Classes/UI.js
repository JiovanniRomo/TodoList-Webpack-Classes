import { syncStorage } from "../functiones/functions";
import { mainContainer } from "../Variables";

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

export default UI;