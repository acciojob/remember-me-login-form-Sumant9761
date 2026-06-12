const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

if (
    localStorage.getItem("username") &&
    localStorage.getItem("password")
) {
    existingBtn.style.display = "block";
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = username.value;
    const pass = password.value;

    if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        existingBtn.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }

    alert(`Logged in as ${user}`);
});

existingBtn.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");
    alert(`Logged in as ${savedUser}`);
});