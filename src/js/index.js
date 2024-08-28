const buttonCarousel = document.querySelectorAll(".button");
const images = document.querySelectorAll('.image');
const information = document.querySelectorAll(".information");

let indice = 0;

function updateImage(index) {
    const imageSelected = document.querySelector(".image.selected");
    imageSelected.classList.remove("selected");
    images[index].classList.add("selected");

    const informationActive = document.querySelector(".information.active");
    informationActive.classList.remove("active");
    information[index].classList.add("active");

    const buttonSelect = document.querySelector(".button.select");
    buttonSelect.classList.remove("select");
    buttonCarousel[index].classList.add("select");
}

function startImageRotation() {
    setInterval(() => {
        indice++;
        if (indice >= images.length) {
            indice = 0;
        }
        updateImage(indice);
    }, 10000);
}

buttonCarousel.forEach((button, index) => {
    button.addEventListener('click', () => {
        indice = index; 
        updateImage(indice);
    });
});

startImageRotation();
