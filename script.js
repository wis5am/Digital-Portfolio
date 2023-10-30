
document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
      const welcomeMessage = document.getElementById('welcome-message');
      if(welcomeMessage) {
          welcomeMessage.remove();
      }
  }, 3000); // corresponds to the length of your CSS animation
});
window.onload = function() {
  
  
  const skillCarousels = document.querySelectorAll('.skill-category-carousel');
  const navigationContainer = document.querySelector('.navigation-dots');

  skillCarousels.forEach((_, index) => {
    // Create a dot button for each skill carousel
    const dotButton = document.createElement('button');
    dotButton.className = 'dot';
    dotButton.onclick = function() { showSpecificSkillPage(index); };
    navigationContainer.appendChild(dotButton);
  });

  // Function to display the specific skill page and hide others
  function showSpecificSkillPage(activeIndex) {
    skillCarousels.forEach((carousel, index) => {
      carousel.style.display = index === activeIndex ? 'block' : 'none';
    });

    // Update the dots to reflect the active page
    let dots = navigationContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  }

  // Initially show the first skill page
  showSpecificSkillPage(0);
};