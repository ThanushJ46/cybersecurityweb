// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate sending data
        console.log("Form submitted:", { name, email, message });
        alert("Thank you for reaching out! We will get back to you soon.");

        // Clear form
        form.reset();
    });
});
