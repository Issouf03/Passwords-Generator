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

// getting the generate btn and calling the generatePass function when btn is pressed.
generate.onclick = generatePass;



// Function to generate the password.
function generatePass() {

    // Defining criterias
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
    }
    if (lower === true){
        criteria += lowerCaseLetters;
    }
    if (upper === true){
        criteria += upperCaseLetters;
    }
    if (numbers === true){
        criteria += allNumbers;
    }
    if (symbols === true){
        criteria += specialSymbols;
    }

    for ( var i = 1; i <= passwordLenght; ++i){
        password += criteria.charAt(Math.floor(Math.random() * (criteria.length-1)));
        console.log(password);
    }
};