// ajout d'un élément dans le localStorage
const saveItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Récupération des éléments dans le localStorage
const getItems = (key) => {
    const items = localStorage.getItem(key);
    if (items == null) {
        return [];
    } else {
        return JSON.parse(items);
    }
};

// Ajout d'un élément dans le localStorage
const setItem = (key, value) => {
    let items = getItems(key, value);
    console.log(items);
    if (items.length === 0) {
        items = [value];
    } else {
        items.push(value);
    }
    saveItem(key, items);
};

// Suppression d'un élément dans le localStorage
const deleteItem = (key, value) => {
    const items = getItems(key);
    const updatedItems = items.filter((item) => item !== value);
    saveItem(key, updatedItems);
};

export { getItems, setItem, deleteItem };
