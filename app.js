// Sticky navbar on scroll script
$(window).scroll(function () {
  const scrollY = this.scrollY;
  const navbar = $('.navbar');
  const scrollUpBtn = $('.scroll-up-btn');

  if (scrollY > 20) {
    navbar.addClass('sticky');
  } else {
    navbar.removeClass('sticky');
  }

  if (scrollY > 500) {
    scrollUpBtn.addClass('show');
  } else {
    scrollUpBtn.removeClass('show');
  }
});

// Scroll-up button script
$('.scroll-up-btn').click(function () {
  $('html').animate({ scrollTop: 0 }, 'slow');
  $('html').css('scrollBehavior', 'auto');
});

// Smooth scroll on menu items click
$('.navbar .menu li a').click(function () {
  $('html').css('scrollBehavior', 'smooth');
});

// Toggle menu/navbar script
$('.menu-btn').click(function () {
  $('.navbar .menu').toggleClass('active');
  $('.menu-btn i').toggleClass('active');
});

// Typing text animation script
const typed = new Typed('.typing', {
  strings: ['Frontend', 'Backend', 'Fullstack Developer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Project Tab scripts
const openPage = (event, pageName) => {
  const tabContent = $('.tab-content');
  const tabLinks = $('.tab-link');

  tabContent.hide();
  tabLinks.removeClass('active');
  $(`#${pageName}`).show();
  $(event.currentTarget).addClass('active');
};

// Open default tab
$('#default-open').click();
