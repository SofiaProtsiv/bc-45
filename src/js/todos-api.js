const BASE_URL = "http://localhost:4000";

// GET -> /todos
export const getTodos = () => {
    return fetch(`${BASE_URL}/todos`).then(res => res.json())
};

// GET -> /todos/:id
export const getTodoById = (id) => { };

// POST -> /todos
export const createTodo = (todo) => {
    const options = {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }

    return fetch(`${BASE_URL}/todos`, options).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText)
        }

        return res.json()
    })
};

// PUT -> /todos/:id
export const updateTodoPUT = (newTodo) => {
    const options = {
        method: "PUT",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }

    return fetch(`${BASE_URL}/todos/${newTodo.id}`, options).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText)
        }

        return res.json()
    })
};

// PATCH -> /todos/:id
export const updateTodoPATCH = (newTodo, id) => {
    const options = {
        method: "PATCH",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }

    return fetch(`${BASE_URL}/todos/${id}`, options).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText)
        }

        return res.json()
    })
};

// DELETE -> /todos/:id
export const deleteTodo = (id) => {
    const options = {
        method: "DELETE"
    }

    return fetch(`${BASE_URL}/todos/${id}`, options).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText)
        }

        return res.json()
    })
};
