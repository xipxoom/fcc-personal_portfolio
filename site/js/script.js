$(function() {
  $.extend($.easing,
    {
      easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
      }
  });

  $('.header').find('a').on('click', function(e) {
    e.preventDefault();

    var scrollTarget = this.hash;

    $('html,body').animate(
      { scrollTop: $(scrollTarget).offset().top },
      {
        duration: 400,
        easing: 'easeOutCubic',
        complete: function() {
          window.location.hash = scrollTarget;
        }
      });
  });
});
