var sliderValue = document.getElementById("lenght");
var slider = document.getElementById("slider");
var generate = document.getElementById("generatebtn");
var copy = document.getElementById("copybtn");

// setting the default password lenght.
sliderValue.innerHTML = "Lenght: " + slider.value;

// setting the user password lenght using mouse.
slider.onclick = function() {
  sliderValue.innerHTML = "Lenght: " + slider.value;
};

// setting the user password lenght using arrow keys.
slider.onkeydown = function() {
  sliderValue.innerHTML = "Lenght: " + slider.value;
};

generate.onclick = generatePass;

// Function to generate the password.
function generatePass() {

    // Defining criterias
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var allNumbers = "0123456789";
    var specialSymbols = "!@#$%^&*()_+";

    // Getting the desired password lenght.
    var passwordLenght = slider.value;

    // setting  the desired criterias.
    var lower = document.getElementById("lower").checked;
    var upper = document.getElementById("upper").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;

    // variable to hold all criterias selected.
    var criteria = "";

    // variable to hold the generated password.
    var password = "";

    // getting user selections for the criteria.
    
    if (lower!== true && upper !== true && numbers !== true && symbols !== true){
        alert('Please select at least one criteria');
    };
    if (lower === true){
        criteria += lower;
    };
    if (upper === true){
        criteria += upper;
    };
    if (numbers === true){
        criteria += numbers;
    };
    if (symbols === true){
        criteria += symbols;
    };

};