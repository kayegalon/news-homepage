const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.querySelector(".menu");

menu.style.display = "block";

sideMenu.addEventListener("click", function() {
	menu.style.width = "250px";
})

closeMenu.addEventListener("click", function() {
	menu.style.width = "0px";
})