let getData = async (url) => {
    // try/catch
    try {
        let response = await fetch(url);
        let json = await response.json();
        return json
    } catch(error){
        let h2 = document.createElement("h2");
        h2.innerText = "Oj, något gick fel! Testa igen senare eller kontakta webbutvecklaren som tabbat sig. Error meddelande: " + error;
        document.body.append(h2);
    }

}

let createTodo = (todo) => {
    let li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerText = `#${todo.id} - ${todo.title}`;

    //Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.disabled = todo.completed;
    li.append(checkbox);
    return li
}

let renderTodos = async () => {
    let todos = await getData("https://jsonplaceholder.typicode.com/todos");
    //Om man vill hämta data från ett annat API;
    // let posts = await getData("https://jsonplaceholder.typicode.com/posts");
    // // console.log(posts);


    let currentId = 0;
    let ul;
    todos.forEach((todo) => {
        //Om det är en ny user - Skapa en ny ul
        if(todo.userId !== currentId) {
            let h2 = document.createElement("h2");
            h2.innerText = `User #${todo.userId} todo-list`
            ul = document.createElement("ul");
            document.body.append(h2,ul);
            currentId = todo.userId;
        }

        let li = createTodo(todo);
        ul.append(li);
    })
}

renderTodos();