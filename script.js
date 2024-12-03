document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("toggle-theme");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      // Update button text based on mode
      if (body.classList.contains("light-mode")) {
          themeToggle.textContent = "🌙 Dark Mode";
      } else {
          themeToggle.textContent = "☀️ Light Mode";
      }
  });
});
