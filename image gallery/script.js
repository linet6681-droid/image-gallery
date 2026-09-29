let images = document.querySelectorAll(".gallery img");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        alert("You clicked an image.");
    });
});