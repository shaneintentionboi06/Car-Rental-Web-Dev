const Loginform = document.getElementById('logForm');

if (Loginform) {
    Loginform.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = "index.html"
    });
}
