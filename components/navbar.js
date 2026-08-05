async function loadNavbar() {
    const response = await fetch("../components/navbar.html");
    const html = await response.text();

    document.getElementById("navbar").innerHTML = html;

    const navbar = document.querySelector(".custom-navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });
}

loadNavbar();