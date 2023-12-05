// Get the password input and show password checkbox elements by class name
const passwordInputs = document.getElementsByClassName('password');
const showPasswordCheckboxes = document.getElementsByClassName('showPasswordCheckbox');

// Function to toggle password visibility for all password inputs
function togglePasswordVisibility() {
    for (let i = 0; i < passwordInputs.length; i++) {
        if (passwordInputs[i].type === 'password') {
            passwordInputs[i].type = 'text';
        } else {
            passwordInputs[i].type = 'password';
        }
    }
}

// Event listener for checkbox change for each show password checkbox
for (let i = 0; i < showPasswordCheckboxes.length; i++) {
    showPasswordCheckboxes[i].addEventListener('change', function () {
        togglePasswordVisibility();
    });
}