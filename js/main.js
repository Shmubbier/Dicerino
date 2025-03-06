document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add animations for elements
  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll);
  document
    .querySelectorAll(".animate-on-scroll")
    .forEach((el) => observer.observe(el));
});
