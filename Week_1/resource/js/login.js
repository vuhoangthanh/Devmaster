const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const showPopup = document.getElementById('login');

showPopup.addEventListener('click', () => {
    overlay.style.display = 'block'; // Hiện overlay
    popup.style.display = 'block';  // Hiện popup
});

// Ẩn popup khi ấn ra ngoài overlay
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});