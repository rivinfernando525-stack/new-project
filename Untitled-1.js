const characters = ["ben 10", "ben 10 2", "ben 10 3", "ben 10 4", "ben 10 5"];

const dropdown = document.getElementById("characterSelect");
const image = document.getElementById("characterImage");

// Fill dropdown
characters.forEach(function(character) {

    let option = document.createElement("option");
    option.value = character;
    option.text = character;

    dropdown.appendChild(option);

});

// Change image when selection changes
dropdown.addEventListener("change", function() {

    let selectedCharacter = dropdown.value;
    image.src = "images/" + selectedCharacter + ".jpg";

});