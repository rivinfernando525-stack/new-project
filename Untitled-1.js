const characters = ["ben 10 11", "ben 10 12", "ben 10 13", "ben 10 14", "ben 10 15"];

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