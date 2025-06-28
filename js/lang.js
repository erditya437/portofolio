document.addEventListener("DOMContentLoaded", function () {
  const langSelect = document.getElementById("languageSelect");
  const defaultLang = localStorage.getItem("lang") || "id";

  // Set value dropdown sesuai pilihan terakhir
  if (langSelect) {
    langSelect.value = defaultLang;
    langSelect.addEventListener("change", function () {
      const selectedLang = this.value;
      localStorage.setItem("lang", selectedLang);
      applyLanguage(selectedLang);
    });
  }

  // Terapkan bahasa awal saat load
  applyLanguage(defaultLang);
});

function applyLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then((res) => res.json())
    .then((translations) => {
      // Untuk setiap key di JSON, ubah innerText elemen yang punya ID sesuai
      for (const key in translations) {
        const el = document.getElementById(key);
        if (el) {
          el.innerText = translations[key];
        }
      }
    })
    .catch((err) => console.error("Gagal memuat bahasa:", err));
}
