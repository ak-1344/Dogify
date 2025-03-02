document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");

    emailInput.addEventListener("input", function () {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!gmailRegex.test(emailInput.value)) {
            emailInput.style.border = "2px solid red";
            return false;
        } else {
            emailInput.style.border = "2px solid green";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", function (event) {
        this.value = this.value.replace(/\D/g, ""); 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.querySelector(".signup-btn");

    signupBtn.addEventListener("click", function (event) {
        const fullName = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password")?.value.trim();
        const confirmPassword = document.getElementById("confirmpassword")?.value.trim();

        if (!fullName || !email || !phone || !password || !confirmPassword) {
            alert("All fields are mandatory. Please fill in all fields.");
            event.preventDefault(); 
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault(); 
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            event.preventDefault(); 
            return;
        }

        localStorage.setItem("loginSuccess", "true");
        window.location.href = "index.html";
    });
});
