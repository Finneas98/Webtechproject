var $ = function (id) {
    return document.getElementById(id);
}

var isValidEmail = function(email) {
    // Regular expression to check for a basic email pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

var joinList = function () {
    var emailAddress1 = $("email1").value;
    var emailAddress2 = $("email2").value;
    var isValid = true;
    
    if (emailAddress1 === "") { 
        $("email1Error").textContent = "This field is required.";
        isValid = false;
    } else if (!isValidEmail(emailAddress1)) {
        $("email1Error").textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        $("email1Error").textContent = "";
    } 

    if (emailAddress1 !== emailAddress2) { 
        $("email2Error").textContent = "Emails must match";
        isValid = false;
    } else {
        $("email2Error").textContent = "";
    } 

    if (isValid) {
        // Assuming "emailForm" is the ID of your form element
        $("emailForm").submit(); 
    }
};

window.onload = function () {
    $("register").onclick = joinList;
    $("email1").focus();
};