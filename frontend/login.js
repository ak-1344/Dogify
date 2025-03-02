document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login-btn");
    
    loginBtn.addEventListener("click", function (event) {
        const fullName = document.getElementById("username").value.trim();
        const password = document.getElementById("password")?.value.trim();
            
        if (!fullName || !password) {
            alert("All fields are mandatory. Please fill in all fields.");
            event.preventDefault(); 
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault(); 
            return;
        }
    
        alert("Login successful!");
    });
});