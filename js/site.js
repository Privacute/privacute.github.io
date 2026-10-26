/* Navbar shrink on scroll and mobile menu close, replacing the template's
   cbpAnimatedHeader and jquery.easing. Smooth scrolling is CSS. */
(function ($) {
  'use strict';

  var $nav = $('.navbar-fixed-top');
  function shrink() { $nav.toggleClass('navbar-shrink', $(window).scrollTop() > 80); }
  shrink();
  $(window).on('scroll', shrink);

  // Close the collapsed menu after a section link is tapped.
  $('.navbar-collapse ul li a').on('click', function () {
    $('.navbar-collapse.in').collapse('hide');
  });
})(jQuery);
