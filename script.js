var hamburguer = document.getElementsByClassName("btn-menu-stay")[0];

function appearMenu() {

  var menuHam = document.getElementsByClassName("menu")[0];

  if (menuHam.style.display == "none" || menuHam.style.display === ""){

      menuHam.style.display = "block";
  }
  else {

      menuHam.style.display = "none";
  }
}

hamburguer.addEventListener("click", appearMenu);
