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

const btnLogin = document.getElementById("goLogin");
const btnRegister = document.getElementById("goRegister");
function hideForm (){
    let div1 = document.getElementById("form-login");
    let div2 = document.getElementById("form-register");
    div1.classList.add("hidden");
    div2.classList.add("hidden");
}
btnLogin.onclick = () => {
    let div = document.getElementById("form-login");
    hideForm();
    div.classList.remove("hidden");
}
btnRegister.onclick = () => {
    let div = document.getElementById("form-register");
    hideForm();
    div.classList.remove("hidden");
}