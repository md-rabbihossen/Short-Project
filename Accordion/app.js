document.addEventListener("DOMContentLoaded", () => {
    const accordionTitles = document.querySelectorAll(".according-title");

    accordionTitles.forEach((title) => {
      title.addEventListener("click", () => {
        const isActive = title.classList.contains("active");

        // Close all accordion items
        accordionTitles.forEach((t) => {
          t.classList.remove("active");
        });

        // Toggle current item if it wasn't active
        if (!isActive) {
          title.classList.add("active");
        }
      });
    });
  });