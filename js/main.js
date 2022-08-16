function scrollHeader() {
    const menu = document.getElementById('home')
    
    if(this.scrollY >= 50) {
        menu.classList.add('menuscroll-active')
    } else {
        menu.classList.remove('menuscroll-active')
    }
}

window.addEventListener('scroll', scrollHeader)

//DROPDOWN MENU

let dropdowMenu = document.getElementById('dropdown-item-1');
let menuItem = document.getElementById('menu-item');

function  showdropdownMenu() {
    dropdowMenu.classList.toggle('active-dropdown-menu');
}

function removedropdown() {
   dropdowMenu.classList.remove('active-dropdown-menu')
}

menuItem.addEventListener('click', showdropdownMenu);
dropdowMenu.addEventListener('mouseleave',removedropdown);



let menuBtn = document.getElementById('menu-btn');
let menuMobile = document.getElementById('menu-mobile')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menuMobile.classList.add('menu-mobile-active')
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menuMobile.classList.remove('menu-mobile-active')
        
    }
})


 
//slide

const activeClass = "active";
const previewClass = "preview";
const buttons = document.querySelectorAll(".preview-element");
let activeId = null;
let timer = startTimer();

buttons.forEach((button) => {
	button.addEventListener("click", ($event) =>
		select($event.target.dataset.slide)
        
	);
});



function startTimer() {
	return setInterval(() => {
		const nextButton =
			getActiveButton().nextElementSibling ||
			document.querySelector(".preview-element");
            
		if (nextButton) {
			select(nextButton.dataset.slide);
		}
		
	}, 5000);
}

function select(slideId) {
	if (activeId === slideId) {
		return;
	}
	activeId = slideId;
	removeActiveSlide(slideId);
	setNextSlidePreview(slideId);
	removeActiveButton();
	addActiveButton(slideId);
	clearInterval(timer);
	timer = startTimer();
}

function setActiveSlide(id) {
	const activeSlide = document.querySelector(`#slider-${id}`);
	activeSlide.classList.add(activeClass);
}

function removeActiveSlide(id) {
	const activeSlide = document.querySelector(".slider-content.active");
	activeSlide.classList.remove(activeClass);
}

function setNextSlidePreview(id) {
	const preview = document.querySelector(`#slider-${id}`);
	preview.classList.add(previewClass);
	setTimeout(() => {
		setActiveSlide(id);
		preview.classList.remove(previewClass);
	}, 250);
}

function addActiveButton(id) {
	const activeButton = document.querySelector(`[data-slide="${id}"]`);
	activeButton.classList.add(activeClass);
}

function getActiveButton() {
	return document.querySelector(".preview-element.active");
}

function removeActiveButton() {
	getActiveButton().classList.remove(activeClass);
}



