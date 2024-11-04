document.getElementById('toggleButton').addEventListener('click', function() {
    const content = document.getElementById('content');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        this.textContent = 'Sembunyikan';
    } else {
        content.style.display = 'none';
        this.textContent = 'Tampilkan';
    }
});
