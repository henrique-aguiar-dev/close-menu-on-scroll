//------JS------

//--------------MENU--------------------

function initMenuMobile(){
	const menuMobile = document.getElementById("menu-mobile");
	const speed = 600;
	const delay = speed * 1.1; //re-click allowed after: speed + 10%
	let menuDown = false; //down = true; up = false
	let clicked = true;

	document.querySelector('.icon-menu-mob').addEventListener('click', event => {
		while(clicked == true){
			if(menuDown == false){
				slideDown(menuMobile, speed);
				menuDown = true;
			 }else{
				slideUp(menuMobile, speed);
				  menuDown = false;
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
			if(menuDown == true){
				slideUp(menuMobile, speed);
				  menuDown = false;
			 }
			clicked = false;
			setTimeout( () => {
				clicked = true;
			},delay);
		}
		 event.stopPropagation();
	})

	window.addEventListener('scroll', () => {
		if (window.scrollY > 0 && menuDown == true) {
			//pode escolher um valor maior que zero, para que não feche com um scroll leve demais, exemplo: 2
			slideUp(menuMobile, speed);
			menuDown = false;
		}
	})

}//End initMenuMobile

initMenuMobile();


