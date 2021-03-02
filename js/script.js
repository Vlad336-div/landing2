/////////////////// slider main

let slides   					= document.querySelectorAll('.slide'),
	numbersSlide 				= slides.length;

for (let i = 0; i < numbersSlide; i++) {
	if (i == 0) {
		document.querySelector('.slider-nav').insertAdjacentHTML('beforeend', "<span class='slider-nav-span slider-nav-active'></span>");
	} else {
		document.querySelector('.slider-nav').insertAdjacentHTML('beforeend', "<span class='slider-nav-span'></span>");
	}
}

let	sliderBand					= document.querySelector('.slider-band'),
	slideActive					= 1,
	sliderDotsWrap				= document.querySelector('.slider-nav'),
	sliderDots					= document.querySelectorAll('.slider-nav-span'),
	fliping						= 100/numbersSlide;

sliderBand.style.width = ""+`${numbersSlide*100}`+"%";

sliderDotsWrap.addEventListener('click', function(event){
	let target = event.target;
	if (target.classList.contains('slider-nav-span')) {
		for (let i = 0; i < numbersSlide; i++) {
			if(slides[i].classList.contains('active-slide')) {
				slides[i].classList.remove('active-slide');
			}
		}
		for (let i = 0; i < sliderDots.length; i++) {
			if(sliderDots[i].classList.contains('slider-nav-active')) {
				sliderDots[i].classList.remove('slider-nav-active');
			}
		}

		target.classList.add('slider-nav-active');

		for (let i = 0; i < sliderDots.length; i++) {
			if(sliderDots[i].classList.contains('slider-nav-active')) {
				slideActive	= i+1;
			}
		}

		sliderBand.style.transform = "translateX(-"+`${(slideActive-1)*fliping}`+"%)";
	}
});

/////////////// smooth scroll

let anchors 						= document.querySelectorAll('.menu-link');

for (let anchor of anchors) {
	anchor.addEventListener('click', function(e){
		e.preventDefault();
		link = anchor.getAttribute('href');
		console.log(link);

		document.querySelector(link).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
}


/////////////////// menu-burger

let burger 							= document.querySelector('.menu-icon'),
	menu 							= document.querySelector('.menu');

burger.addEventListener('click', function(){
	menu.classList.toggle('active-menu');
	console.log('1');
});