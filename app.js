// Ask for the user's age
const age = prompt('How old are you?');
// Ask for the user's email
const email = prompt('What is your email address?');
// Ask for the user's name
const name = prompt('What is your name?');
// Display the collected information
if (age && email && name) {
  alert(`Thank you, ${name}! You are ${age} years old, and your email is ${email}.`);
} else {
  alert('You did not provide all the requested information.');
}
document.addEventListener("DOMContentLoaded", function () {
    const jordanCountInput = document.getElementById("jordanCount");
    const submitButton = document.getElementById("submitButton");
    const output = document.getElementById("output");
    submitButton.addEventListener("click", function () {
        const jordanCount = parseInt(jordanCountInput.value);
        if (isValidCount(jordanCount)) {
            output.innerHTML = ""; // Clear any previous content
            displayCustomJordans(jordanCount);
        } else {
            output.innerHTML = "Please enter a valid positive number.";
        }
    });
    function isValidCount(count) {
        return !isNaN(count) && count > 0;
    }
    function displayCustomJordans(count) {
        output.innerHTML = ""; // Clear previous content
        for (let i = 0; i < count; i++) {
            const jordanImage = document.createElement("img");
            jordanImage.src = "jordan-image.jpg";
            jordanImage.alt = "Custom Jordan Image";
            output.appendChild(jordanImage);
        }
    }
});
var userInput = prompt("How many customs do you own?");
if (userInput !== null) {
    var customsCount = parseInt(userInput);
    if (!isNaN(customsCount)) {
        alert("You own " + customsCount + " customs.");
    } else {
        alert("Please enter a valid number.");
    }
}