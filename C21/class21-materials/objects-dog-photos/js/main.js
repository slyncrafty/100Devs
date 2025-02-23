//Get a dog photo from the dog.ceo api and place the photo in the DOM
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    const img = document.querySelector("img");

    button.addEventListener("click", function() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            img.src = data.message;
            img.alt = "a dog"
        })
        .catch(error=> {
            console.error("Error fetching image", error);
        });
    });
});