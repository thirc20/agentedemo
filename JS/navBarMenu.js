function openDropMenu() {
    var navMenu = document.querySelector('.navMenu');
    navMenu.style.display = 'block';
    setTimeout(function() {
      navMenu.classList.add('open');
    }, 0);
  }
  
  function closeDropMenu() {
    var navMenu = document.querySelector('.navMenu');
    navMenu.classList.remove('open');
    setTimeout(function() {
      navMenu.style.display = 'none';
    }, 300);
  }