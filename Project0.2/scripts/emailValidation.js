var $ = function (selector) {
    return document.querySelector(selector);
}

var $$ = function (selector) {
    return document.querySelectorAll(selector);
}

var isValidEmail = function(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

var isValidPassword = function(password) {
    // Password validation criteria (e.g., minimum length)
    return password.length >= 8; // Adjust as needed
};

var validateForm = function () {
    var emailAddress1 = $(".email1").value;
    var emailAddress2 = $(".email2").value;
    var password1 = $(".pass1").value;
    var password2 = $(".pass2").value;
    var isValid = true;

    // Email validation
    if (emailAddress1 === "") { 
        $(".email1Error").textContent = "This field is required.";
        isValid = false;
    } else if (!isValidEmail(emailAddress1)) {
        $(".email1Error").textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        $(".email1Error").textContent = "";
    } 

    if (emailAddress1 !== emailAddress2) { 
        $(".email2Error").textContent = "Emails must match";
        isValid = false;
    } else {
        $(".email2Error").textContent = "";
    } 

    // Password validation
    if (password1 === "") {
        $(".password1Error").textContent = "This field is required.";
        isValid = false;
    } else if (!isValidPassword(password1)) {
        $(".password1Error").textContent = "Password should be at least 8 characters long.";
        isValid = false;
    } else {
        $(".password1Error").textContent = "";
    }

    if (password1 !== password2) {
        $(".password2Error").textContent = "Passwords must match";
        isValid = false;
    } else {
        $(".password2Error").textContent = "";
    }

    if (isValid) {
        var forms = $$(".emailForm");
        if (forms.length > 0) {
            forms[0].submit(); 
        }
    }
};

window.onload = function () {
    var registerButton = $(".validate");
    if (registerButton) {
        registerButton.onclick = validateForm;
    }
    var email1Input = $(".email1");
    if (email1Input) {
        email1Input.focus();
    }
};