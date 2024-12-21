document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const rollno = document.getElementById('rollno').value;
    const message = document.getElementById('message');

    // Simple validation (you can expand this)
    if (email === "test@example.com" && rollno === "123456") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password.";
    }
});
