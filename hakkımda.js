function toggleContent(contentId, button) {
    const content = document.getElementById(contentId);

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'inline';
        button.textContent = 'Daha Az Göster';
    } else {
        content.style.display = 'none';
        button.textContent = 'Daha Fazla Göster';
    }
}
