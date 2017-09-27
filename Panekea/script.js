		var widths = 100;
		var tran = 0;
		var opa = 1;
	window.onload = function() {
	var column1 = document.getElementsByClassName("column1");
	var column2 = document.getElementsByClassName("column2");
	var column3 = document.getElementsByClassName("column3");

if (window.matchMedia("(max-width: 500px)").matches){
	var a=0;
	var b=0
	while(a<50){
	setTimeout(function() {column1[0].style.display = "none";column2[0].style.display = "inline-block" } ,3000 + b);
	setTimeout(function() {column2[0].style.display = "none";column3[0].style.display = "inline-block" } ,6000 + b);
	setTimeout(function() {column3[0].style.display = "none";column1[0].style.display = "inline-block"}, 9000 + b);

	setTimeout(function() {column1[1].style.display = "none";column2[1].style.display = "inline-block" } ,3000 + b);
	setTimeout(function() {column2[1].style.display = "none";column3[1].style.display = "inline-block" } ,6000 + b);
	setTimeout(function() {column3[1].style.display = "none";column1[1].style.display = "inline-block"}, 9000 + b);
	a++;
	b=b+9000;
	}
}
	var button = document.getElementsByClassName("nl-button2");
	var buttonEmail = document.getElementsByClassName("nl-button1");
	var buttons = document.getElementsByClassName("nl-button");
	var galochka = document.createElement("span");
	var krestik = document.createElement("span");
	galochka.innerHTML = '&#10004;';
	krestik.innerHTML = '&#10008;';
	button[0].onclick = function() {
	// 	button[0].style.backgroundColor = "#dd4b2b";
	// 	setTimeout(function(){
	// 	button[0].style.backgroundColor = "#f3f4f6";
	// },100);
		var target="@";
			for(pos=0; pos<buttonEmail[0].value.length; pos++){

			var foundPos = buttonEmail[0].value.indexOf(target,pos);
			if(foundPos != -1){
			buttonEmail[0].style.border = "1px solid green";
			krestik.style.display = "none";
			galochka.style.display = "inline-block";
			buttons[0].insertBefore(galochka, buttons.firstChild);
			galochka.style.color = "green";
			galochka.style.position = "relative";
			galochka.style.right = "27rem";
			setTimeout(function(){setInterval(frame,10);galochka.style.display = "none";},1000);
			button[0].style.backgroundColor = "#009900";
			setTimeout(function(){
			button[0].style.display = "none";
			},5000);
			break;
			

			}
			else{
			buttonEmail[0].style.border = "1px solid red";
			galochka.style.display = "none";
			krestik.style.display = "inline-block";
			buttons[0].insertBefore(krestik, buttons.firstChild);
			krestik.style.color = "red";
			krestik.style.position = "relative";
			krestik.style.right = "27rem";
			button[0].style.backgroundColor = "#dd4b2b";
			setTimeout(function(){
			button[0].style.backgroundColor = "#f3f4f6";
			},100);
			}
		
		}
		
		
		function frame() {
			if(widths==280){
				clearInterval(id);
			}
			else{
				widths++;
				tran--;
				opa = opa-0.01;
				button[0].style.width = widths + "px";
				button[0].style.transform = 'translateX('+tran+'px)';
				buttonEmail[0].style.opacity = opa;

			}
		}

	}
	button[0].mouseover = function(){
		button[0].style.backgroundColor = "#fff";
	}
	button[0].mousemove = function() {
		button[0].style.backgroundColor = "#f3f4f6";
	}
}