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

// Select packages in mobile
const previousPackage = () => {
    const packages = Array.prototype.slice.call(document.getElementsByClassName("package"));
    const [activePackage] = document.getElementsByClassName("package active");

    packages.forEach((pkg, index) => {
        if (pkg === activePackage) {
            if (index === 0) {
                activePackage.classList.remove("active");
                return packages[packages.length - 1].classList.add("active");
            }

            activePackage.classList.remove("active");
            return packages[index - 1].classList.add("active");
        }
    });
}

const nextPackage = () => {
    const packages = Array.prototype.slice.call(document.getElementsByClassName("package"));
    const [activePackage] = document.getElementsByClassName("package active");

    packages.forEach((pkg, index) => {
        if (pkg === activePackage) {
            if (index === (packages.length -1)) {
                activePackage.classList.remove("active");
                return packages[0].classList.add("active");
            }

            activePackage.classList.remove("active");
            return packages[index + 1].classList.add("active");
        }
    });
}

document.getElementById("prev-package").addEventListener("click", previousPackage);
document.getElementById("next-package").addEventListener("click", nextPackage);
