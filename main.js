// Minimal JS for smooth in-page navigation and accessibility
(function(){
  // Add “skip to content” support if needed
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
        target.focus({preventScroll: true});
      }
    });
  });
})();
