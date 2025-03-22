document.getElementById('guestForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    
    let errorMessage = '';

    // Validate name
    if (!name) {
        errorMessage += 'Full Name is required.\n';
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
        errorMessage += 'A valid Email is required.\n';
    }

    // Validate phone
    const phonePattern = /^\d{10,15}$/; // Basic phone validation (adjust as needed)
    if (!phone || !phonePattern.test(phone)) {
        errorMessage += 'A valid Phone number is required.\n';
    }

    // If there's an error, show alert and prevent form submission
    if (errorMessage) {
        alert(errorMessage);
        event.preventDefault();
    }
});
