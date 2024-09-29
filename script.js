document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Clear previous error messages
    clearErrors();
    
    // Collect form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    // Name validation: must not be empty
    if (name.trim() === '') {
        showError('name-error', 'Name is required');
        isValid = false;
    }

    // Email validation: must follow proper email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showError('email-error', 'Please enter a valid email');
        isValid = false;
    }

    // Message validation: must not be empty
    if (message.trim() === '') {
        showError('message-error', 'Message is required');
        isValid = false;
    }

    // If form is valid, submit the form (you can replace this with actual form submission logic)
    if (isValid) {
        alert('Form submitted successfully!');
        // Optionally reset the form
        document.getElementById('contact-form').reset();
    }
});

// Function to display error message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Function to clear error messages
function clearErrors() {
    document.querySelectorAll('.error').forEach(errorElement => {
        errorElement.style.display = 'none';
        errorElement.textContent = '';
    });
}
