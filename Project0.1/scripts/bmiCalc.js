var $ = function (id) {
    return document.getElementById(id);
}

var calculateBMI = function () {
    var height = parseFloat($("height").value) / 100; // Convert height to a number
    var weight = parseFloat($("weight").value); // Convert weight to a number
    var bmiSpan = $("bmiOutput");
    
    var bmi = weight / (height * height); // BMI formula: weight (kg) / height (m)^2

    if (isNaN(height) || isNaN(weight)) {
        // Handle cases where height or weight is not a valid number
        $("bmiOutput").textContent = "Please enter valid numbers.";
        bmiSpan.classList.add("errorText");
        return;
    } else {
        $("bmiOutput").textContent = "Your BMI is: " + bmi.toFixed(2); // Display BMI with two decimal places
    } 
};

window.onload = function () {
    $("bmiCalc").onclick = calculateBMI;
};