function switchTab(tab) {
    // Hide all forms
    document.querySelectorAll('.form-section').forEach(form => {
        form.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.form-tabs button').forEach(button => {
        button.classList.remove('active');
    });

    // Show selected form
    if (tab === 'login') {
        document.getElementById('loginForm').classList.add('active');
        document.querySelectorAll('.form-tabs button')[0].classList.add('active');
    } else if (tab === 'register') {
        document.getElementById('registerForm').classList.add('active');
        document.querySelectorAll('.form-tabs button')[1].classList.add('active');
    }
}

// Form submission handlers
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login form submitted!');
    // Add your login logic here
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Register form submitted!');
    // Add your registration logic here
});
