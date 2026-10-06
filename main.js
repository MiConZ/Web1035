window.onload = pageLoad;

function pageLoad() {
    const menuItems = document.querySelectorAll(".menu-item");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].onclick = goToSection;
    }
}

function goToSection(event) {
    const menuItems = document.querySelectorAll(".menu-item");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("active");
    }

    event.target.classList.add("active");

    const targetId = event.target.dataset.target;
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
