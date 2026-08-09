console.log("My Social App started");

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach((card) => {

    card.addEventListener("click", () => {

        const title =
            card.querySelector("strong")?.textContent;

        alert(
            `${title} akan kita aktifkan pada tahap berikutnya.`
        );

    });

});


const navItems =
    document.querySelectorAll(".nav-item");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navItems.forEach((nav) => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

    });

});
