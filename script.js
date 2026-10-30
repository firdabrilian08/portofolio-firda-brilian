
// Menampilkan tahun secara otomatis pada footer

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
