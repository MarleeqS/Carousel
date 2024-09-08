function toggleNav(){
    const navLink = document.getElementById('navLinks');
    navLink.classList.toggle('active')
}


let currentIndex = 0;
function showSlides(index){
    const carousel = document.getElementById('carousel');
    const slides = carousel.children;
    const totalSlides = slides.length;

    if(index >= totalSlides){
        currentIndex = 0;
    }else if(index < 0){
        currentIndex = -totalSlides - 1;
    }else{
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide(){
    showSlides(currentIndex + 1)
}

function prevSlide(){
    showSlides(currentIndex - 1)
}

function autoSlide(){
   nextSlide();
   setTimeout(autoSlide, 3000) 
}

document.addEventListener('DOMContentLoaded', ()=>{
    showSlides(0);
    setTimeout(autoSlide, 3000);
})