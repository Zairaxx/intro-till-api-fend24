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
//Uppgift 3

let createItem = (data, element) => {
  let item = document.createElement("li");
  item.innerText = "#" + data.id + " " + data.title;
  element.append(item);
};

let renderUserList = async () => {
  let users = await getData("https://jsonplaceholder.typicode.com/users");
  let listOfUsers = document.createElement("ul");
  let profileInfo = document.createElement("div");
  profileInfo.style.border = "2px solid black";
  
  document.body.append(profileInfo, listOfUsers);
  users.forEach((user) => {
    let listItem = document.createElement("li");
    listItem.innerText = user.name;
    listOfUsers.append(listItem);

    //Buttons
    let showInfoBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    showInfoBtn.innerText = "Show info";
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", (e) => {
      if (confirm("Are you sure you want to delete this user?")) {
        listItem.remove();
      }
    });
    showInfoBtn.addEventListener("click", async () => {
      let unfinishedTodos = await getData(
        `https://jsonplaceholder.typicode.com/todos?userId=${user.id}&completed=false`
      );

      let posts = await getData(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      );

      profileInfo.innerHTML = "";
      
      //Loopa ut alla todos
      let listOfTodos = document.createElement("ul");
      unfinishedTodos.forEach((todo) => {
        createItem(todo, listOfTodos);
      });
      //Loopa ut alla posts
      let listOfPosts = document.createElement("ul");
      posts.forEach((post) => {
        createItem(post, listOfPosts);
      });

      let userName = document.createElement("p");
      let userEmail = document.createElement("p");
      let todosH3 = document.createElement("h3");
      let postsH3 = document.createElement("h3");
      todosH3.innerText = "Unfinished todos";
      postsH3.innerText = "Latest posts";
      userName.innerText = "Name: " + user.name;
      userEmail.innerText = "Email: " + user.email;
      profileInfo.append(
        userName,
        userEmail,
        todosH3,
        listOfTodos,
        postsH3,
        listOfPosts
      );
    });

    listItem.append(showInfoBtn, deleteBtn);
  });
};

renderUserList();