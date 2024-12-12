let users = [];

function registerUser() {
    const newUsername = document.getElementById('username').value;
    const newPassword = document.getElementById('password').value;

    if (users.some(user => user.username === newUsername)) {
        alert('Username already exists. Please choose a different username.');
    } else {
        users.push({ username: newUsername, password: newPassword });
        alert('User registered successfully.');
        saveUsers();
    }
}

function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

function loadUsers() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
        users = JSON.parse(savedUsers);
    }
}


loadUsers();

document.getElementById('submitBtn').addEventListener('click', registerUser);