import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function() {
	//* --- Slider --- *//
	$('.accessories__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 1400,
		speed: 600,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	//* --- Burger --- *//
	const burger = document.querySelector('.header__burger');
	const burgerMenu = document.querySelector('.nav');
	const burgerList = [burger, burgerMenu];
	burger.addEventListener('click', () => {
		burgerList.forEach((e) => {
			e.classList.toggle('active');
		})
	});
});