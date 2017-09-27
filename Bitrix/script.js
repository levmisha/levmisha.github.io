window.onload = function () {

var down1 = document.getElementById('str2');
var down2 = document.getElementById('str1');
var text = document.getElementById('lp__box__text');
var img = document.getElementById('lp__img');
var content = document.getElementById('blog__cnv1');
var aboutCnv1 = document.querySelectorAll('.about__cnv1');
var aboutCnv2 = document.querySelectorAll('.about__cnv2');
var aboutCnv3 = document.querySelectorAll('.about__cnv3');
var aboutCnv4 = document.querySelectorAll('.about__cnv4');
var menuLi = document.querySelectorAll('.menu__li');
var ramka1 = 0;
var ramka2 = 0;
var ramka3 = 0;
var ramka4 = 0;
window.onscroll = function() {
	if(window.pageYOffset > "400" && ramka1 == 0){
		aboutCnv1[0].style.animation = "about-brd1 0.5s linear forwards";
		setTimeout(function() {
			aboutCnv2[0].style.animation = "about-brd2 0.5s linear forwards";
		},500);
		setTimeout(function() {
			aboutCnv3[0].style.animation = "about-brd1 0.5s linear forwards";
		},1000);
		setTimeout(function() {
			aboutCnv4[0].style.animation = "about-brd2 0.5s linear forwards";
		},1500);
		ramka1++;
	}
	if(window.pageYOffset > "1400" && ramka2 == 0){
		aboutCnv1[1].style.animation = "latest_projects1 0.5s linear forwards";
		setTimeout(function() {
			aboutCnv2[1].style.animation = "latest_projects2 0.5s linear forwards";
		},500);
		setTimeout(function() {
			aboutCnv3[1].style.animation = "latest_projects1 0.5s linear forwards";
		},1000);
		setTimeout(function() {
			aboutCnv4[1].style.animation = "latest_projects2 0.5s linear forwards";
		},1500);
		ramka2++;
	}

	if(window.pageYOffset > "1900" && ramka3 == 0){
		aboutCnv1[2].style.animation = "blog1 0.5s linear forwards";
		setTimeout(function() {
			aboutCnv2[2].style.animation = "blog2 0.5s linear forwards";
		},500);
		setTimeout(function() {
			aboutCnv3[2].style.animation = "blog1 0.5s linear forwards";
		},1000);
		setTimeout(function() {
			aboutCnv4[2].style.animation = "blog2 0.5s linear forwards";
		},1500);
		setTimeout(function() {
			aboutCnv1[3].style.animation = "blog1 0.5s linear forwards";
		},1000);
		setTimeout(function() {
			aboutCnv2[3].style.animation = "blog2 0.5s linear forwards";
		},1500);
		setTimeout(function() {
			aboutCnv3[3].style.animation = "blog1 0.5s linear forwards";
		},2000);
		setTimeout(function() {
			aboutCnv4[3].style.animation = "blog2 0.5s linear forwards";
		},2500);
		setTimeout(function() {
			aboutCnv1[4].style.animation = "blog1 0.5s linear forwards";
		},2000);
		setTimeout(function() {
			aboutCnv2[4].style.animation = "blog2 0.5s linear forwards";
		},2500);
		setTimeout(function() {
			aboutCnv3[4].style.animation = "blog1 0.5s linear forwards";
		},3000);
		setTimeout(function() {
			aboutCnv4[4].style.animation = "blog2 0.5s linear forwards";
		},3500);
		ramka3++;
	}

	if(window.pageYOffset > "2300" && ramka4 == 0){
		aboutCnv1[5].style.animation = "contact1 0.5s linear forwards";
		setTimeout(function() {
			aboutCnv2[5].style.animation = "contact2 0.5s linear forwards";
		},500);
		setTimeout(function() {
			aboutCnv3[5].style.animation = "contact1 0.5s linear forwards";
		},1000);
		setTimeout(function() {
			aboutCnv4[5].style.animation = "contact2 0.5s linear forwards";
		},1500);

		ramka4++;
	}
}
down1.onclick = function() {
	text.style.marginLeft = "9rem";
	text.style.transition = "margin 2s linear";
	img.style.left = "4rem";
	img.style.transition = "left 2s linear";
	setTimeout(function(){
		content.style.opacity = "0";
		content.style.transition = "opacity 1s linear";
	}, 2000);
}
down2.onclick = function() {
	text.style.marginLeft = "9rem";
	text.style.transition = "margin 2s linear";
	img.style.left = "4rem";
	img.style.transition = "left 2s linear";
	setTimeout(function(){
		content.style.opacity = "0";
		content.style.transition = "opacity 1s linear";
	}, 2000);
}
var time = 50;
menuLi[0].onclick = function(){
	var scr = setInterval(function(){
		scrollTo(0, time);
		time+=50;
		if(time >= 1500){
	clearInterval(scr);
	time = 50;
	}	
	},30);
  }
menuLi[1].onclick = function(){
  	var scr = setInterval(function(){
		scrollTo(0, time);
		time+=50;
		if(time >= 2100){
	clearInterval(scr);
	time = 50;
	}	
	},30);
  }
menuLi[2].onclick = function(){
  	var scr = setInterval(function(){
		scrollTo(0, time);
		time+=50;
		if(time >= 2650){
	clearInterval(scr);
	time = 50;
	}	
	},30);
  }
}
window.onscroll = function() {
	
}