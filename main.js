// Menu open and close
const toggleMenu = (event) => {
    const openMenu = (button, menu) => {
        button.classList.add("open")
        menu.classList.add("open")
        menu.classList.remove("closed")
    }

    const closeMenu = (button, menu) => {
        button.classList.remove("open")
        menu.classList.remove("open")
        menu.classList.add("closed")
    }

    const menuButton = event.currentTarget;
    const state = menuButton.getAttribute("class");
    const menuTray = document.getElementById("menu-tray");
    const options = [menuButton, menuTray];

    state === "open" ? closeMenu(...options): openMenu(...options)
}

document.getElementById("nav-menu-button").addEventListener("click", toggleMenu);