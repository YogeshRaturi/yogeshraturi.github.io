// dropdown hover
const $dropdown = $('.dropdown');
const $dropdownToggle = $('.dropdown-toggle');
const $dropdownMenu = $('.dropdown-menu');
const showClass = 'show';

$(window).on('load resize', function () {
  if (this.matchMedia('(min-width: 768px)').matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr('aria-expanded', 'true');
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr('aria-expanded', 'false');
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off('mouseenter mouseleave');
  }
});

$(function () {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});

// $('.owl-carousel').owlCarousel({
//   loop: true,
//   margin: 20,
//   stagePadding: 50,
//   nav: true,
//   responsiveClass: true,
//   autoplay: true,
//   autoplayTimeout: 3000,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1,
//       nav: false,
//     },
//     600: {
//       items: 2,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// });
