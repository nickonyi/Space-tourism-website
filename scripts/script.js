const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

//when someone clicks my hamburger button
navToggle.addEventListener("click", () => {
    //if the nav is open close it
    const blindNigga = nav.getAttribute("data-visible");
    console.log(blindNigga);
    //if the nav is closed open it
});