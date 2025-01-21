//Asynkron javascript


//Hämta data med .then

 fetch('https://jsonplaceholder.typicode.com/todos')
 .then(response => response.json())
 .then(json => {

    //Använd datat och skriv ut det i DOM:en
    json.forEach(todo => {
        let p = document.createElement("p");
        p.innerText = todo.title;
        document.body.append(p);
    })
 })


 //Async/Await - Kan användas istället för .then - Nyare/Enklare syntax!

let getTodos = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let json = await response.json();
    return json
}

//Skapa en funktion som kör getTodos-funktionen och skriver ut datat i DOM:en!
let renderPage = async () => {
    let todos = await getTodos();
    
    todos.forEach(todo => {
        let p = document.createElement("p");
        p.innerText = todo.title;
        document.body.append(p);
    })
}

renderPage();