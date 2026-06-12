//your JS code here. If required.
const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Show existing user button if credentials exist
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
}

// Form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }

    alert(`Logged in as ${username}`);
});

// Existing user login
existingBtn.addEventListener("click", function () {
    const username = localStorage.getItem("username");
    alert(`Logged in as ${username}`);
});