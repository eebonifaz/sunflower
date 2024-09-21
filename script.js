document.addEventListener('DOMContentLoaded', function() {
    const stem = document.querySelector('.stem');
    const flower = document.querySelector('.flower');

    // Crecimiento del tallo
    setTimeout(() => {
        stem.style.height = '250px'; // Ajusta la altura del tallo
    }, 500);

    // Aparecer la flor después de que el tallo haya crecido
    setTimeout(() => {
        // flower.style.display = 'block';
        // flower.style.transform = 'scale(1)';
        flower.classList.add('florecer');
    }, 2500); // 2.5 segundos después de comenzar la animación del tallo
});
