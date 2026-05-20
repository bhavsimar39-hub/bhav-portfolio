// ================= CUSTOM CURSOR =================
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (e) => {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
    setTimeout(() => {
        cursorRing.style.left = e.clientX + "px";
        cursorRing.style.top = e.clientY + "px";
    }, 60);
});

document.querySelectorAll("a, button, .skill-card, .project-card, .cert-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursorRing.style.width = "56px";
        cursorRing.style.height = "56px";
        cursorRing.style.borderColor = "var(--accent)";
        cursorRing.style.opacity = "1";
    });
    el.addEventListener("mouseleave", () => {
        cursorRing.style.width = "36px";
        cursorRing.style.height = "36px";
        cursorRing.style.borderColor = "var(--accent)";
        cursorRing.style.opacity = "0.6";
    });
});

// ================= NAVBAR SCROLL =================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ================= ACTIVE NAVBAR LINK =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 220) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ================= REVEAL ON SCROLL =================
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("visible");
            }, i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

revealEls.forEach(el => revealObserver.observe(el));

// Safety net: after 2.5s force-show any element still hidden
setTimeout(() => {
    revealEls.forEach(el => el.classList.add("visible"));
}, 2500);

// ================= MOBILE MENU =================
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navOverlay = document.getElementById("navOverlay");
const navItems = document.querySelectorAll(".nav-links a");

function openMenu() {
    navMenu.classList.add("active");
    navOverlay.classList.add("active");
    navOverlay.style.display = "block";
    menuBtn.querySelector("i").className = "fa-solid fa-xmark";
    document.body.style.overflow = "hidden";
}
function closeMenu() {
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
    setTimeout(() => { navOverlay.style.display = "none"; }, 400);
    menuBtn.querySelector("i").className = "fa-solid fa-bars";
    document.body.style.overflow = "";
}

menuBtn.addEventListener("click", () => {
    navMenu.classList.contains("active") ? closeMenu() : openMenu();
});

navOverlay.addEventListener("click", closeMenu);

navItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
});

// ================= TYPING ANIMATION =================
var typed = new Typed(".typing", {
    strings: [
        "MERN Stack Apps",
        "AI-Powered Platforms",
        "Full Stack Solutions",
        "Scalable Web Apps"
    ],
    typeSpeed: 75,
    backSpeed: 45,
    backDelay: 1800,
    loop: true
});

console.log("Bhav Simar Portfolio — Loaded ✓");