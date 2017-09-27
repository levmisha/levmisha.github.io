window.onload = function () {
	var enterLi = document.querySelector(".nav__enter");
	var enter = document.querySelector(".enter");
	var newUser = document.querySelector(".new-user");
	var main = document.querySelector(".main");
	var enterClose = enter.firstElementChild;
	var newUserClose = newUser.firstElementChild;
	var enterRegister = document.querySelector(".enter__register");
	var newUserEnter = document.querySelector(".new-user__enter");
	var jobBlocks = document.querySelectorAll(".job__blocks");
	
// jobBlocks.onclick = function(event){
//   var target = event.target;
//   	while (target != jobBlocks) {
//   		alert("sd");
//    	 if (target.hre == "Bitrix"){
//     	  // num(target);
//      	 alert("ds");
//      	 return;
//    	 }
//    	   break;
//    	 }
//     target = target.parentNode;
//   }

	// jobBlock.onclick = function(){
	// 	for(i=0; i<=jobBlock.length; i++){
	// 		if(jobBlock[i].href="Bitrix"){
	// 			open("Bitrix");
	// 		}
	// 	}
	// }
	// Авторизация и регистрация 
	enterLi.onclick = function(){
		enter.classList.add("open");
		main.classList.add("hidden");
	}
	enterRegister.onclick = function(){
		enter.classList.remove("open");
		newUser.classList.add("open");
	}
	enterClose.onclick = function(){
		enter.classList.remove("open");
		main.classList.remove("hidden");
	}
	newUserClose.onclick = function(){
		newUser.classList.remove("open");
		main.classList.remove("hidden");
	}
}