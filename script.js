// ================= CUSTOM CURSOR (desktop only) =================
const cursorDot  = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

if (cursorDot && cursorRing && !isTouchDevice()) {
    document.addEventListener("mousemove", (e) => {
        cursorDot.style.left  = e.clientX + "px";
        cursorDot.style.top   = e.clientY + "px";
        setTimeout(() => {
            cursorRing.style.left = e.clientX + "px";
            cursorRing.style.top  = e.clientY + "px";
        }, 60);
    });

    document.querySelectorAll("a, button, .skill-card, .project-card, .cert-card").forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursorRing.style.width  = "56px";
            cursorRing.style.height = "56px";
            cursorRing.style.opacity = "1";
        });
        el.addEventListener("mouseleave", () => {
            cursorRing.style.width  = "36px";
            cursorRing.style.height = "36px";
            cursorRing.style.opacity = "0.6";
        });
    });
}

// ================= NAVBAR SCROLL =================
const navbar = document.getElementById("navbar");
if (navbar) {
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }, { passive: true });
}

// ================= ACTIVE NAVBAR LINK =================
const sections = document.querySelectorAll("section");
const navLinks  = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        if (pageYOffset >= section.offsetTop - 220) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
}, { passive: true });

// ================= REVEAL ON SCROLL =================
const revealEls = document.querySelectorAll(".reveal");

if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add("visible"), i * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach(el => revealObserver.observe(el));

    // Safety net — force-show after 2.5s in case observer doesn't fire
    setTimeout(() => {
        revealEls.forEach(el => el.classList.add("visible"));
    }, 2500);
}

// ================= MOBILE MENU =================
const menuBtn    = document.getElementById("menuBtn");
const navMenu    = document.getElementById("navMenu");
const navOverlay = document.getElementById("navOverlay");
const navItems   = document.querySelectorAll(".nav-links a");

function openMenu() {
    if (!navMenu || !menuBtn) return;
    navMenu.classList.add("active");
    if (navOverlay) { navOverlay.style.display = "block"; setTimeout(() => navOverlay.classList.add("active"), 10); }
    menuBtn.querySelector("i").className = "fa-solid fa-xmark";
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    if (!navMenu || !menuBtn) return;
    navMenu.classList.remove("active");
    if (navOverlay) {
        navOverlay.classList.remove("active");
        setTimeout(() => { navOverlay.style.display = "none"; }, 400);
    }
    menuBtn.querySelector("i").className = "fa-solid fa-bars";
    document.body.style.overflow = "";
}

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu && navMenu.classList.contains("active") ? closeMenu() : openMenu();
    });
}

const navCloseBtn = document.getElementById("navCloseBtn");
if (navCloseBtn) navCloseBtn.addEventListener("click", closeMenu);

if (navOverlay) {
    navOverlay.addEventListener("click", closeMenu);
}

navItems.forEach(item => item.addEventListener("click", closeMenu));

// ================= TYPING ANIMATION =================
if (typeof Typed !== "undefined" && document.querySelector(".typing")) {
    new Typed(".typing", {
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
}

console.log("Bhav Simar Portfolio — Loaded ✓");