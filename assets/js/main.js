<<<<<<< HEAD

(() => {
  // ------------------------------ Start Sticky
  const elementHeader = document.querySelector('[data-header]');

  function effectSticky() {
    elementHeader.classList.toggle('sticky', window.scrollY > 0);
  }

  // Init
  window.addEventListener('scroll', effectSticky);
  // ------------------------------ End Sticky



  // ------------------------------ Start Btn
  const elementNav = document.querySelector('[data-nav]');
  const elementToggle = document.querySelector('[data-toggle]');

  function effectBtn() {
    elementToggle.classList.toggle('active')
    elementNav.classList.toggle('active');
  }

  // Init
  elementToggle.addEventListener('click', effectBtn);
  // ------------------------------ End Btn
})();


=======
>>>>>>> 9fe3bc2ec735564f58067348199a300c7afe8d75

(() => {
  // ------------------------------ Start Sticky
  const elementHeader = document.querySelector('[data-header]');

  function effectSticky() {
    elementHeader.classList.toggle('sticky', window.scrollY > 0);
  }

<<<<<<< HEAD
=======
  // Init
  window.addEventListener('scroll', effectSticky);
  // ------------------------------ End Sticky


  // ------------------------------ Start Btn
  const elementNav = document.querySelector('[data-nav]');
  const elementToggle = document.querySelector('[data-toggle]');

  function effectBtn() {
    elementToggle.classList.toggle('active')
    elementNav.classList.toggle('active');
  }

  // Init
  elementToggle.addEventListener('click', effectBtn);
  // ------------------------------ End Btn
})();
>>>>>>> 9fe3bc2ec735564f58067348199a300c7afe8d75
