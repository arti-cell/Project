document.addEventListener('DOMContentLoaded', () => {

  // Theme Toggle Functionality
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');

      if (theme === 'light') {
          document.documentElement.setAttribute('data-theme', 'dark');
          themeIcon.classList.replace('fa-moon', 'fa-sun');
          localStorage.setItem('theme', 'dark');
      } else {
          document.documentElement.setAttribute('data-theme', 'light');
          themeIcon.classList.replace('fa-sun', 'fa-moon');
          localStorage.setItem('theme', 'light');
      }
  });

  // Show More/Show Less Hobbies Section Functionality
  const toggleHobbiesBtn = document.getElementById('toggle-hobbies');
  const hobbiesSection = document.getElementById('hobbies');

  toggleHobbiesBtn.addEventListener('click', function () {
      if (hobbiesSection.style.display === 'none') {
          hobbiesSection.style.display = 'block';
          this.textContent = 'Show Less';
      } else {
          hobbiesSection.style.display = 'none';
          this.textContent = 'Show More';
      }
  });
});
