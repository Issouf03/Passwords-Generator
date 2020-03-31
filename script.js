
var sliderValue = document.getElementById("lenght");
var slider = document.getElementById("slider");

// setting the default password lenght.
sliderValue.innerHTML = "Lenght: " + slider.value;

// setting the user password lenght using mouse.
slider.onclick = function(){
    sliderValue.innerHTML = "Lenght: " + slider.value;
}

// setting the user password lenght using arrow keys.
slider.onkeydown = function(){
    sliderValue.innerHTML = "Lenght: " + slider.value;
}




