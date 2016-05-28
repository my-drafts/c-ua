
$(document).ready(function () {
	//initialize swiper when document ready
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		direction: 'vertical', // 'vertical' horizontal
		loop: true,
		autoHeight: true,
		autoplay: 1000,
		freeMode: true,
		speed: 1000,
		// If we need pagination
		pagination: '.swiper-pagination',
		// Navigation arrows
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
		// And if we need scrollbar
		//scrollbar: '.swiper-scrollbar'
	})
});
