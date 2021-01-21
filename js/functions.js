//------JS------

//--------------MENU--------------------

function initMenuMobile(){
	let menudown = false; //down = true; up = false
	let speed = 600;
	let clicked = true;
	let delay = speed * 1.1; //re-click allowed after: speed + 10%

	document.querySelector('.icon-menu-mob').addEventListener('click', event => {
		while(clicked == true){
			if(menudown == false){
				slideDown(document.getElementById("menu-mobile"), speed);
				menudown = true;
			 }else{
				slideUp(document.getElementById("menu-mobile"), speed);
				  menudown = false;
			 }
		clicked = false;
		setTimeout( () => {
			clicked = true;
		},delay);
	}
	event.stopPropagation();
	});

	document.querySelector('body,html').addEventListener('click', event => {
		while(clicked == true){
			if(menudown == true){
				slideUp(document.getElementById("menu-mobile"), speed);
				  menudown = false;
			 }
			clicked = false;
			setTimeout( () => {
				clicked = true;
			},delay);
		}
		 event.stopPropagation();
	})

	window.addEventListener('scroll', () => {
		if (window.scrollY > 0 && menudown == true) {
			//pode escolher um valor maior que zero, para que não feche com um scroll leve demais, exemplo: 2
			slideUp(document.getElementById("menu-mobile"), 600);
			menudown = false;
		}
	})

}//End initMenuMobile

initMenuMobile();


