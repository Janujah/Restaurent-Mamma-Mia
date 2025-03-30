// Gallery Image Preview
function openPreview(img) {
    const previewContainer = document.getElementById("preview");
    const previewContainerImg = document.getElementById("previewImg");
    previewContainerImg.src = img.src;
    previewContainer.classList.add("active");
}

function closePreview() {
    document.getElementById("preview").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");

    function showImages() {
        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add("show");
            }, index * 300);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showImages();
                observer.disconnect();
            }
        });
    }, { threshold: 0.2 });

    observer.observe(document.querySelector(".gallery"));
});


// Our Service Slider
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.display = 'block';  
}

function udjustSlides(n) {
    let slides = document.querySelectorAll('.slide');
    slideIndex += n;

    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

showSlides();
setInterval(showSlides, 3000); 

// Animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function checkSections() {
        sections.forEach((section) => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.8;

            if (sectionPosition < screenPosition) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkSections);
    checkSections(); 
});
