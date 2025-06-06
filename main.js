document.addEventListener('DOMContentLoaded', function() {
    const images = [
      "/slide-show/0uwKKkkhbVSa.jpg",
      "/slide-show/12CMYSK8Zo15.jpg",
      "/slide-show/uF3slhs26zzZ.jpg",
    ];
  
    const descriptions = [
      "Description for Image 1. This could be a longer text about the movie or image.",
      "Description for Image 2. More details can go here, perhaps a short synopsis.",
      "Description for Image 3. Even more text can be added for each image.",
    ];
  
    const titles = [
      "ចំណាត់ខ្មាំងនៅលើយន្តហោះ",
      "ផ្នូរបិសាច – Exhuma",
      "ព្យុះភ្លៀងឋានកណ្តាល",
    ];
  
    const details = [
      "Emergency Incident on the Plane",
      "Details for Image 2. More details here.",
      "Details for Image 3. Even more details.",
    ];
  
    let currentImageIndex = 0;
    let imageLoaded = false;
    let intervalId;
  
    // DOM elements
    const currentImageElement = document.getElementById('currentImage');
    const currentDescriptionElement = document.getElementById('currentDescription');
    const currentTitleElement = document.getElementById('currentTitle');
    const currentDetailsElement = document.getElementById('currentDetails');
    const navigationDotsElement = document.getElementById('navigationDots');
  
    // Create navigation dots
    images.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = `w-4 h-4 border-2 border-white rounded-full cursor-pointer transition-all duration-300 ${
        index === currentImageIndex ? 'bg-white' : 'bg-transparent'
      }`;
      dot.addEventListener('click', () => setImage(index));
      navigationDotsElement.appendChild(dot);
    });
  
    // Update content based on current index
    function updateContent() {
      currentImageElement.src = images[currentImageIndex];
      currentImageElement.onload = () => {
        currentImageElement.classList.remove('opacity-0');
        currentImageElement.classList.add('opacity-100');
      };
      currentTitleElement.textContent = titles[currentImageIndex];
      currentDetailsElement.textContent = details[currentImageIndex];
      currentDescriptionElement.textContent = descriptions[currentImageIndex];
      
      // Update dots
      const dots = navigationDotsElement.querySelectorAll('div');
      dots.forEach((dot, index) => {
        dot.classList.toggle('bg-white', index === currentImageIndex);
        dot.classList.toggle('bg-transparent', index !== currentImageIndex);
      });
    }
  
    // Set image with transition
    function setImage(index) {
      // Clear the auto-advance interval
      clearInterval(intervalId);
      
      currentImageElement.classList.remove('opacity-0');
      currentImageElement.classList.add('opacity-100');
      
      setTimeout(() => {
        currentImageIndex = index;
        updateContent();
        // Restart the auto-advance interval
        startAutoAdvance();
      }, 500);
    }
  
    // Auto-advance images
    function startAutoAdvance() {
      intervalId = setInterval(() => {
        currentImageElement.classList.remove('opacity-100');
        currentImageElement.classList.add('opacity-100');
        
        setTimeout(() => {
          currentImageIndex = (currentImageIndex + 1) % images.length;
          updateContent();
        }, 500);
      }, 3000);
    }
  
    // Initialize
    updateContent();
    startAutoAdvance();
  });