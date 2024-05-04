const wrapper = document.querySelector(".wrapper"),
carousel = document.querySelector(".carousel"),
images = document.querySelectorAll("img"),
buttons = document.querySelectorAll(".button");

let imageIndex = 1,
    intervalId;

    
// Función para iniciar el desplazamiento automático
const autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};

autoSlide();

// Función para desplazar el carrusel a la imagen correspondiente
const slideImage = () => {

    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;

    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// Función para manejar el clic en los botones de flecha
const updateClick = (e) => {
    clearInterval(intervalId);

    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex)
};

buttons.forEach(button => button.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

wrapper.addEventListener("mouseleave", autoSlide);