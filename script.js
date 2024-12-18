function validateLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded credentials for validation
    if (username === "admin" && password === "mahin213") {
        window.location.href = "welcome.html";
    } else {
        alert("Invalid credentials, please try again.");
    }
}
