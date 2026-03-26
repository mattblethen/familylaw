const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (header) {
  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const note = form.querySelector(".form-note");

    if (button) {
      button.textContent = "Consultation Request Ready";
    }

    if (note) {
      note.textContent = "Starter site note: connect this form to your intake workflow, CRM, or email handler before launch.";
    }
  });
});
