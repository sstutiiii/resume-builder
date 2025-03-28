document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get user input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Basic validation
        if (name === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Save user data (For now, just log it to console)
        console.log("User Created:", { name, email, password });

        alert("Account Created Successfully!");
        
        // Redirect to home page (You can change this to a dashboard page)
        window.location.href = "index.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Show a pop-up box
        alert("🎉 Your profile is created successfully!");
        
        // Optionally, redirect to another page
        // window.location.href = "dashboard.html";  
    });
});
