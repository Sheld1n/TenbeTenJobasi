document.getElementById('scrollButton').addEventListener('click', function() {
    const scrollToY = window.scrollY + 830;
    window.scrollTo({
      top: scrollToY,
      behavior: 'smooth'
    });
  });
  