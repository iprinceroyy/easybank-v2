const btn = document.querySelector(".nav-toggler");
const icon = document.querySelector("#imgId");
const navMenu = document.querySelector(".nav-menu");

let navIsToggled = false;

btn.addEventListener("click", () => {
    if (!navIsToggled) {
        icon.src = "assets/images/icon-close.svg";
        navMenu.classList.add("show");
    } else {
        navMenu.classList.remove("show");
        icon.src = "assets/images/icon-hamburger.svg";
    }

    navIsToggled = !navIsToggled;
});

// Close navigation on scroll if it is opened
document.addEventListener(
    "scroll",
    () => {
        if (navMenu.classList.contains("show")) {
            navMenu.classList.remove("show");
        }
    }, { passive: true }
);