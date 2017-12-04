function floatval (mixedVar) {
    //  discuss at: http://locutus.io/php/floatval/
    // original by: Michael White (http://getsprink.com)
    //      note 1: The native parseFloat() method of JavaScript returns NaN
    //      note 1: when it encounters a string before an int or float value.
    //   example 1: floatval('150.03_page-section')
    //   returns 1: 150.03
    //   example 2: floatval('page: 3')
    //   example 2: floatval('-50 + 8')
    //   returns 2: 0
    //   returns 2: -50
    return (parseFloat(mixedVar) || 0);
}

jQuery(document).ready(function($) {
    $('.dropdown-toggle').dropdown();

  $( ".menu-div" ).click(function() {
    $( ".mobile-nav" ).toggleClass('open');
    $(".menu-div").toggleClass('open');
  });
	$( ".mobile-nav ul li" ).click(function() {
    $( ".mobile-nav" ).toggleClass('open');
    $(".menu-div").toggleClass('open');
  });
  $(window).scroll(function () {
    var $this = $(this);
    if ($this.scrollTop() > 500) {
       $( ".scrolled" ).addClass('fixed-logo');
    } else {
       $( ".scrolled" ).removeClass('fixed-logo');
    }
  });
  $('.aditus-button1').click(function(){
	  $(this).hide();
	  $(this).parents('.team-people').find('.aditus-button2').show();
	  $(this).parents('.team-people').find('.deshide').show();
  });
  $('.aditus-button2').click(function(){
	  $(this).hide();
	  $(this).parents('.team-people').find('.aditus-button1').show();
	  $(this).parents('.team-people').find('.deshide').hide();
  });

  // blog vertical carousel
  $('.posts-wrap').slick({
    dots: false,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: false,
    infinite: false,
  });

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 8000,
            easing: 'swing',
            step: function (now) {
                //$(this).text(Math.ceil());
                $(this).text(floatval(now).toFixed(2));
            }
        });
    });
});
