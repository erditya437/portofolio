// dark.js
document.addEventListener("DOMContentLoaded", () => {
  // Cek apakah user sebelumnya sudah aktifkan dark mode
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) {
    document.body.classList.add("dark-mode");
  }

  // Jika ada tombol toggle (di settings.html)
  const toggle = document.getElementById("darkModeToggle");
  if (toggle) {
    toggle.checked = isDark;

    toggle.addEventListener("change", function () {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", this.checked);
    });
  }
});
