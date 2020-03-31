var sliderValue = document.getElementById("lenght");
var slider = document.getElementById("slider");

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

// function to generate the password.
function generatePass() {
    // Getting the desired password lenght.
    var passwordLenght = slider.value;

    var lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var symbol = "!@#$%^&*()_+";

}
