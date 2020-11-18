// Next/previous controls
function plusSlides(n) {
	var slide = slideIndex+n
  	showSlides(slide);
}

function showSlides(n) {
	slideIndex = n
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("ss-dot");
	if (slideIndex > slides.length) {slideIndex = 1}
	if (slideIndex < 1) {slideIndex = slides.length}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" ss-active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " ss-active";
}

var slideIndex = 0;