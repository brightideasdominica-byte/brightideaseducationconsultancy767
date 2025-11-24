// Contact Page JavaScript
document.getElementById("form").addEventListener("submit", async function(e){
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("subject-error").textContent = "";
    document.getElementById("message-error").textContent = "";

    if(name.value.trim() === ""){
        document.getElementById("name-error").textContent = "Please enter your name";
        isValid = false;
    }
    if(email.value.trim() === ""){
        document.getElementById("email-error").textContent = "Please enter your email";
        isValid = false;
    }
    if(subject.value.trim() === ""){
        document.getElementById("subject-error").textContent = "Please enter a subject";
        isValid = false;
    }
    if(message.value.trim() === ""){
        document.getElementById("message-error").textContent = "Please enter a message";
        isValid = false;
    }

    if(isValid){
        const formData = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("Your message was sent successfully!");
            this.reset();
        } else {
            alert("Oops! There was a problem sending your message.");
        }
    }
});


// FAQ Toggle
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active"); // adds/removes "active" to expand/collapse
    });
});
