const hero = document.querySelector(".hero-image-container");

document.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    hero.style.transform = `
        rotateY(${-x}deg)
        rotateX(${y}deg)
    `;

});