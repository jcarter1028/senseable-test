console.log("Menu");

let menuOpen = false;
const clickSubmenu = document.getElementById("#click-submenu");

document.getElementById("#menu-button").addEventListener("click", function () {
  console.log("Handle menu button clicked");
  menuOpen = !menuOpen;
  clickSubmenu.className = `menu-click-submenu ${menuOpen ? "" : "hidden"}`;
});
