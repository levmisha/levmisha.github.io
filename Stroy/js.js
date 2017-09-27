window.onload = function () {
var option = document.querySelector(".calc__type");
var rezult = document.querySelector(".calc__rez-smail-zn");
var button = document.querySelector(".calc__button");
var size = document.querySelector(".calc__size");
var menuLi = document.querySelectorAll('.menu__li');
var footerLi = document.querySelectorAll('.footer__li');
	var level = 0;
	var rez = 0;
	option.onchange = function(){
		if(option.value=="Косметический ремонт"){
			level = 1000;
		}
		if(option.value=="Капитальный ремонт"){
			level = 1500;
		}
		if(option.value=="Эксклюзивный ремонт"){
			level = 2000;
		}
		if(option.value=="Дизайн-проект"){
			level = 500;
		}
	}
	button.onclick = function(){
		rez = level*size.value;
		rezult.innerHTML = rez + "рублей";
	}

menuLi[0].onclick = function(){
	time = 50;
	var scr = setInterval(function(){
		scrollTo(0, time);
		time+=50;
		if(time >= 200){
	clearInterval(scr);
	time = 50;
	}	
	},30);
  }
menuLi[1].onclick = function(){
	time = 50;
  	var scr = setInterval(function(){
		scrollTo(0, time);
		time+=50;
		if(time >= 900){
	clearInterval(scr);
	time = 50;
	}	
	},30);
  }
menuLi[2].onclick = function(){
	time = 50;
  	var scr = setInterval(function(){
		scrollTo(0, time);
		time+=50;
		if(time >= 1700){
	clearInterval(scr);
	time = 50;
	}	
	},30);
  }
  menuLi[3].onclick = function(){
  	time = 50;
  	var scr = setInterval(function(){
		scrollTo(0, time);
		time+=50;
		if(time >= 2200){
	clearInterval(scr);
	time = 50;
	}	
	},30);
  }
	footerLi[0].onclick = function(){
		time=2200;
  	var scr = setInterval(function(){
		scrollTo(0, time);
		time-=50;
		if(time <= 100){
	clearInterval(scr);
	time = 2200;
	}	
	},30);
  }
footerLi[1].onclick = function(){
	time=2200;
  	var scr = setInterval(function(){
		scrollTo(0, time);
		time-=50;
		if(time <= 800){
	clearInterval(scr);
	time = 2200;
	}	
	},30);
  }
  footerLi[2].onclick = function(){
  	time=2200;
  	var scr = setInterval(function(){
		scrollTo(0, time);
		time-=50;
		if(time <= 1600){
	clearInterval(scr);
	time = 2200;
	}	
	},30);
  }
  footerLi[3].onclick = function(){
  	time=2200;
  	var scr = setInterval(function(){
		scrollTo(2200, time);
		time-=50;
		if(time <= 2100){
	clearInterval(scr);
	time = 2200;
	}	
	},30);
  }
}
