function sendemail(event) {
    event.preventDefault();

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create the email link
    const mailtoLink = `mailto:samuelnebiyu88@gmail.com?subject=Contact from ${username}&body=${encodeURIComponent(message)}%0A%0AReply to: ${email}`;

    // Open the email client
    window.location.href = mailtoLink;

    // Clear the form
    document.getElementById("contact-form").reset();

    // Show a success message
    alert("Thank you for your message! Your email client should open shortly.");
}

document.getElementById('contact-form').addEventListener('submit', sendemail);