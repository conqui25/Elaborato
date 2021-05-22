const API_Link = "http://localhost:8080/";
const btnHome = document.getElementById("btn-home");
const btnAuthors = document.getElementById("btn-authors");
const btnBooks = document.getElementById("btn-books");
const btnProfile = document.getElementById("btn-profile");

function hidePage (){
    let div1 = document.getElementById("div-home");
    let div2 = document.getElementById("div-authors");
    let div3 = document.getElementById("div-books");
    let div4 = document.getElementById("div-profile");
    div1.classList.add("hidden");
    div2.classList.add("hidden");
    div3.classList.add("hidden");
    div4.classList.add("hidden");
}
btnHome.onclick = () => {
    let div = document.getElementById("div-home");
    hidePage();
    div.classList.remove("hidden");
}
btnAuthors.onclick = () => {
    let div = document.getElementById("div-authors");
    hidePage();
    div.classList.remove("hidden");
}
btnBooks.onclick = () => {
    let div = document.getElementById("div-books");
    hidePage();
    div.classList.remove("hidden");
}
btnProfile.onclick = () => {
    let div = document.getElementById("div-profile");
    hidePage();
    div.classList.remove("hidden");
}

const btnGoLogin = document.getElementById("goLogin");
const btnGoRegister = document.getElementById("goRegister");
function hideForm (){
    let div1 = document.getElementById("form-login");
    let div2 = document.getElementById("form-register");
    div1.classList.add("hidden");
    div2.classList.add("hidden");
}
btnGoLogin.onclick = () => {
    let divLogin = document.getElementById("form-login");
    hideForm();
    divLogin.classList.remove("hidden");
}
btnGoRegister.onclick = () => {
    let divRegister = document.getElementById("form-register");
    hideForm();
    divRegister.classList.remove("hidden");
}

const btnLogin = document.getElementById("login");
const btnRegister = document.getElementById("register");
btnLogin.onclick = () =>{
    
    postData(API_Link + "login").then(data => {
        console.log(data);
    });
}
async function postData(url = '') {
    username = document.getElementById("username-login").value;
    password = document.getElementById("password-login").value;
    console.log("username: " + username + "\npassword: " + password);
    let data = {
        username: username,
        password: password
    }
    // Default options are marked with *
    console.log(data);
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response.body);
    return response.json(); // parses JSON response into native JavaScript objects
  }