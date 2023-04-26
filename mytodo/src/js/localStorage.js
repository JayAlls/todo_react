// Récupération des tâche dans le localStorage

const getTasks = (key) => {
    const items = localStorage.getItem(key)
    return items ? JSON.parse(items) : null;
}

// Ajout d'une tâche dans le localStorage

const setTasks = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export {getTasks, setTasks};