let getProfilesBtn = document.querySelector("#getProfiles");
let getUserProfileBtn = document.querySelector("#getUserProfile")
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

let getProfiles = async () => {
    let users = await getData("https://jsonplaceholder.typicode.com/users")
    console.log(users);

    let ul = document.createElement("ul");
    document.body.append(ul);
    users.forEach(user => {
        let li = document.createElement("li");
        li.style.border = "2px solid black";
        ul.append(li);
        
        //de-structuring
        let {name,phone,email,address,company} = user;
        let {city,street} = address;
        let {name:companyName, bs} = company

        li.innerHTML = `
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Phone:</strong>${phone}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Address:</strong>${street}, ${city}</p>
        <p><strong>Company:</strong>${companyName} - ${bs}</p>
        `

    })
}

let getUserProfile = async () => {
    let userId = document.querySelector("#userId").value;
    let user = await getData(`https://jsonplaceholder.typicode.com/users/${userId}`)
    

    let profile = document.querySelector("#user-profile");

    profile.style.border = "2px solid black";
        
    //de-structuring
    let {name,phone,email,address,company} = user;
    let {city,street} = address;
    let {name:companyName, bs} = company

    profile.innerHTML = `
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Phone:</strong>${phone}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Address:</strong>${street}, ${city}</p>
    <p><strong>Company:</strong>${companyName} - ${bs}</p>
    `
}

getProfilesBtn.addEventListener("click", getProfiles)
getUserProfileBtn.addEventListener("click", getUserProfile);