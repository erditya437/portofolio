window.addEventListener('DOMContentLoaded', () => {
  const dark = localStorage.getItem('darkMode') === 'true';
  const lang = localStorage.getItem('language') || 'id';

  darkModeToggle.checked = dark;
  document.documentElement.classList.toggle('dark', dark);

  languageSelect.value = lang;
  loadLanguage(lang);
});

// dark mode
darkModeToggle.addEventListener('change', () => {
  const isDark = darkModeToggle.checked;
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('darkMode', isDark);
});

// language
languageSelect.addEventListener('change', () => {
  const lang = languageSelect.value;
  localStorage.setItem('language', lang);
  loadLanguage(lang);
});


// Reset
resetBtn.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});
