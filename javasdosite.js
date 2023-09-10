const scrollingText = document.querySelector('.scrolling-text');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    scrollingText.style.top = scrollY + 'px'; // Atualiza a posição do texto com base no deslocamento vertical
});