function moveSlide(carouselId, direction) {
    let carousel = document.getElementById(carouselId);
    let imagesContainer = carousel.querySelector(".carousel-images");
    let images = imagesContainer.querySelectorAll("img");
    let totalImages = images.length;
    
    let currentIndex = parseInt(imagesContainer.getAttribute("data-index")) || 0;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; 
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; 
    }

    imagesContainer.setAttribute("data-index", currentIndex);
    imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    console.log(`Carousel ${carouselId} is at index ${currentIndex}`);
}
document.addEventListener("DOMContentLoaded", function () {
    initializeCarousel('carousel1');
    initializeCarousel('carousel2');
    initializeCarousel('carousel3');
});
function initializeCarousel(carouselId) {
    let carousel = document.getElementById(carouselId);
    let imagesContainer = carousel.querySelector(".carousel-images");
    let totalImages = imagesContainer.querySelectorAll("img").length;
    imagesContainer.setAttribute("data-index", 0);
}

