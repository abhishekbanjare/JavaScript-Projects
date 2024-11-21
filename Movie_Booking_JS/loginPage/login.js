function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Perform simple validation
    if (username === "abhishek" && password === "abhishek") {
        errorMessage.innerHTML = "";
        window.location.href = "/main/index.html";
        // alert("Login successful! Redirecting...");
        // You can add redirection logic here
    } else {
        errorMessage.innerHTML = "Invalid username or password";
    }
}
