// ================= CUSTOM CURSOR (desktop only) =================
const cursorDot  = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

const isTouch = () => window.matchMedia("(hover: none)").matches;

if (cursorDot && cursorRing && !isTouch()) {
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
            cursorRing.style.width = "56px";
            cursorRing.style.height = "56px";
            cursorRing.style.opacity = "1";
        });
        el.addEventListener("mouseleave", () => {
            cursorRing.style.width = "36px";
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

// ================= ACTIVE NAV LINKS (top + bottom) =================
const sections      = document.querySelectorAll("section");
const topNavLinks   = document.querySelectorAll(".nav-links a");
const bottomNavItems = document.querySelectorAll(".bottom-nav-item");

function updateActiveLinks() {
    let current = "";
    sections.forEach((section) => {
        if (pageYOffset >= section.offsetTop - 220) {
            current = section.getAttribute("id");
        }
    });

    topNavLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });

    // Map section IDs to bottom nav hrefs
    const bottomMap = {
        "home": "#home",
        "about": "#about",
        "experience": "#skills",  // experience not in bottom nav, map to skills
        "skills": "#skills",
        "projects": "#projects",
        "certifications": "#projects", // map to work tab
        "contact": "#contact"
    };
    const targetHref = bottomMap[current] || "#home";
    bottomNavItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === targetHref);
    });
}

window.addEventListener("scroll", updateActiveLinks, { passive: true });
updateActiveLinks();

// ================= REVEAL ON SCROLL =================
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add("visible"), i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(el => observer.observe(el));
    setTimeout(() => revealEls.forEach(el => el.classList.add("visible")), 2500);
}

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