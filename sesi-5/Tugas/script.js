let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let loginButton = document.getElementById('loginButton');
let logoutButton = document.getElementById('logoutnButton');

function onRegister() {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("role", "basic");
}

function onLogin() {
    localStorage.getItem("username", usernameInput.value);

    if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
        localStorage.setItem("role", "admin");
    } else {
        localStorage.getItem
    }
}
