// Dark Mode Script (persistent with localStorage)
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const savedMode = localStorage.getItem('darkMode');

  // Apply saved mode when the page loads
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
    if (toggleButton) toggleButton.textContent = '🌙'; // dark mode = moon
  } else {
    document.body.classList.remove('dark-mode');
    if (toggleButton) toggleButton.textContent = '☀️'; // light mode = sun
  }

  // Add click event for toggle button
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled'); 
        toggleButton.textContent = '🌙';
      } else {
        localStorage.setItem('darkMode', 'disabled'); 
        toggleButton.textContent = '☀️';
      }
    });
  }
});

// Get the scroll-to-top button
const upButton = document.querySelector('.up a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    upButton.style.display = 'flex';
  } else {
    upButton.style.display = 'none';
  }
});

upButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

upButton.style.display = 'none';

