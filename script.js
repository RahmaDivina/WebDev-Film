const toggleText = document.getElementById('toggle-text');
const signInForm = document.getElementById('sign-in-form');
const signUpForm = document.getElementById('sign-up-form');

// Gunakan event delegation untuk menangani klik pada tombol register dan login
toggleText.addEventListener('click', (event) => {
    if (event.target.id === 'register') {
        signInForm.classList.add('d-none');
        signUpForm.classList.remove('d-none');
        toggleText.innerHTML = `Already have an account? <button class="btn btn-link p-0" id="login">Sign In</button>`;
    } else if (event.target.id === 'login') {
        signUpForm.classList.add('d-none');
        signInForm.classList.remove('d-none');
        toggleText.innerHTML = `Don't have an account? <button class="btn btn-link p-0" id="register">Sign Up</button>`;
    }
});

// document.querySelectorAll('.toggle-password').forEach(item => {
//     item.addEventListener('click', function() {
//         let input = document.getElementById('password');
//         if (input.type === "password") {
//             input.type = "text";
//             this.classList.remove("fa-eye");
//             this.classList.add("fa-eye-slash");
//         } else {
//             input.type = "password";
//             this.classList.remove("fa-eye-slash");
//             this.classList.add("fa-eye");
//         }
//     });
// });
