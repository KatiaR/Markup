const gamburgers = document.getElementsByClassName("gamburger");
const gamburger = gamburgers[0]
gamburger.addEventListener('click',()=>{
	document.getElementsByClassName("list_routes")[0].classList.toggle("open");
})

let slideIndex = 0;
showSlides(slideIndex)

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	const slides = document.getElementsByClassName("mySlides");
	const dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}
    slides[slideIndex].style.display = "flex";
    [...dots].forEach((elem,index) => {
        if (slideIndex === index % slides.length) {
            elem.classList.add("active");
        }
    })
}
