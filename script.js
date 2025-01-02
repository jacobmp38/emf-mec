// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  // Add click event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Prevent default behavior
      e.preventDefault();

      // Get the target section id from the link's href
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Scroll to the targeted section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
