// ================= LOADING MESSAGE =================

console.log("Bhav Simar Portfolio Loaded Successfully");

// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ================= SCROLL ANIMATION =================

const cards = document.querySelectorAll(
".skill-card, .project-card"
);

window.addEventListener("scroll", () => {

    cards.forEach((card) => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});

// ================= INITIAL CARD STYLE =================

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";

});

// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// ================= TYPING ANIMATION =================

var typed = new Typed(".typing", {

    strings: [

        "MERN Stack Developer",
        "Frontend Developer",
        "AI Enthusiast",
        "Web Designer"

    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true

});