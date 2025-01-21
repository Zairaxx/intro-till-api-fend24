//Asynkron javascript

 fetch('https://jsonplaceholder.typicode.com/todos')
 .then(response => response.json())
 .then(json => {
    json.forEach(todo => {
        let p = document.createElement("p");
        p.innerText = todo.title;
        document.body.append(p);
    })
 })


 //Async/Await

let getTodos = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let json = await response.json();
    return json
}


let renderPage = async () => {
    let todos = await getTodos();
    
    todos.forEach(todo => {
        let p = document.createElement("p");
        p.innerText = todo.title;
        document.body.append(p);
    })
}

renderPage();

 //setTimeout

// setTimeout(() => {
//     console.log("Lägger på skinka, tomat och ananas");
// }, 5000).then( () => {
//     return setTimeout(() => {
//         console.log("Sätta in pizzan i ugnen")
//     }, 2000)
// }).then( () => {
//     return setTimeout(() => {
//         console.log("Väntar på att den blir färdig")
//     }, 5000)
// }).then( () => {
//     return setTimeout(() => {
//     console.log("Äta pizza!")
// }, 1000)})


