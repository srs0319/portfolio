(function(){
  var header = document.querySelector('.portfolio-header');
  var navToggle = document.getElementById('portfolioNavToggle');
  var navLinks = document.getElementById('portfolioNavLinks');
  var hero = document.querySelector('.sky-hero');
  var lastY = window.scrollY;

  if (header) {
    function updateHeader() {
      var y = window.scrollY;
      var threshold = hero ? Math.max(hero.offsetHeight - 80, 80) : 80;
      if (y <= threshold) header.classList.remove('scrolled');
      else if (y > lastY + 4) header.classList.add('scrolled');
      else if (y < lastY - 4) header.classList.remove('scrolled');
      lastY = Math.max(y, 0);
    }
    window.addEventListener('scroll', updateHeader, {passive:true});
    header.addEventListener('mouseenter', function(){ header.classList.remove('scrolled'); });
    header.addEventListener('mouseleave', function(){
      var threshold = hero ? Math.max(hero.offsetHeight - 80, 80) : 80;
      if (window.scrollY > threshold) header.classList.add('scrolled');
    });
    updateHeader();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function(){
      var open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
