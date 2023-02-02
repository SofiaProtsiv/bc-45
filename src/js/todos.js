// import {
//     getTodos,
//     getTodoById,
//     createTodo,
//     updateTodo,
//     deleteTodo
// } from "./todos-api";

import * as todosAPI from "./todos-api";
import { Notify } from "notiflix";
import { createNewTaskElement } from "../templates/createNewTaskElement";

// refs
const taskInput = document.getElementById("new-task");
const addButton = document.querySelector("button.add");
const tasksHolder = document.querySelector("#tasks-list");

// handlers
const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const addTask = () => {
    if (taskInput.value === "") {
        taskInput.style.borderColor = "red";
        return;
    }

    const newTodo = { id: uid(), title: taskInput.value };

    todosAPI.createTodo(newTodo).then(res => {
        Notify.success("New task successfully added!", { timeout: 1000 })
        tasksHolder.insertAdjacentHTML("afterbegin", createNewTaskElement(res))
    })

    taskInput.style.borderColor = "#ddd";
    taskInput.value = "";
};

const editTask = (event) => {
    const liEl = event.target.parentNode;
    const todoId = event.target.parentNode.id;

    if (event.target.classList.contains("edit")) {
        const inputToDo = liEl.querySelector('input[type="text"]');
        const toDoLabel = liEl.querySelector("label");
        const toDoEditButton = liEl.querySelector("button.edit");

        if (!liEl.classList.contains("editMode")) {
            inputToDo.value = toDoLabel.textContent;
            toDoEditButton.textContent = "Save";
        } else {
            toDoEditButton.textContent = "Edit";
            toDoLabel.textContent = inputToDo.value;

            // const newTodo = { id: todoId, title: inputToDo.value }
            // todosAPI.updateTodoPUT(newTodo).then(res => {
            //     Notify.info("Task updated successfully!", { timeout: 1000 })
            // })

            const newTodo = { title: inputToDo.value }
            todosAPI.updateTodoPATCH(newTodo, todoId).then(res => {
                Notify.info("Task updated successfully!", { timeout: 1000 })
            })
        }

        liEl.classList.toggle("editMode");
    }
};
const deleteTask = (event) => {
    if (event.target.classList.contains("delete")) {
        const todoId = event.target.parentNode.id;
        const todo = event.target.parentNode;

        todosAPI.deleteTodo(todoId).then(res => {
            Notify.warning("Task deleted successfully!", { timeout: 1000 })
            todo.remove();
        })
    }
};

// EventListeners
taskInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        addTask();
    }
});
taskInput.addEventListener("blur", () => {
    taskInput.style.borderColor = "#ddd";
});
addButton.addEventListener("click", addTask);
tasksHolder.addEventListener("click", editTask);
tasksHolder.addEventListener("click", deleteTask);

window.addEventListener("load", () => {
    todosAPI.getTodos().then(res => {
        if (res.length === 0) {
            Notify.failure("No todos!", { timeout: 1000 });
            return;
        }
        const markup = res.reverse().map(todo => createNewTaskElement(todo)).join("");
        tasksHolder.innerHTML = markup;
    }
    )
});
