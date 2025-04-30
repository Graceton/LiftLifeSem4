// Wait for DOM to load before applying theme settings
document.addEventListener("DOMContentLoaded", () => {
    // Check if dark mode is enabled from Settings.js
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }
});
// Apply saved theme when About Us page loads
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        document.body.classList.toggle('light-mode', savedTheme === 'light');
    }
});
