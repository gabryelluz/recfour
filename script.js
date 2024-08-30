// Relógio em Tempo Real
function startClock() {
    const clock = document.getElementById('clock');
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock(); // chama imediatamente para não esperar 1 segundo
}

// Animações de Hover
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('hover-effect');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover-effect');
    });
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modo Noturno
function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}
document.getElementById('nightModeBtn').addEventListener('click', toggleNightMode);

// Iniciar o relógio
window.onload = startClock;
