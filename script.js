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
}

document.addEventListener("DOMContentLoaded", function () {
 
    initializeCarousel('carousel1');
    initializeCarousel('carousel2');
    initializeCarousel('carousel3');

    if (typeof emailjs === "undefined") {
        console.error("EmailJS library failed to load.");
        return;
    }

    emailjs.init("b8t54dHKV6_iioDzq");  
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let statusMessage = document.getElementById("statusMessage");
        emailjs.sendForm("service_d8wbqyq", "template_oj6eepv", this)
            .then(() => {
                statusMessage.innerHTML = "Message sent successfully!";
                statusMessage.style.color = "green";
                document.getElementById("contact-form").reset();
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                statusMessage.innerHTML = "Failed to send message. Please try again.";
                statusMessage.style.color = "red";
            });
    });
});
function initializeCarousel(carouselId) {
    let carousel = document.getElementById(carouselId);
    let imagesContainer = carousel.querySelector(".carousel-images");
    let totalImages = imagesContainer.querySelectorAll("img").length;
    imagesContainer.setAttribute("data-index", 0);
}

 /* i tried................. */