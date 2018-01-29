jQuery(document).ready(function($) {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoPlay: false,
    infinite: false,
  });

  $('.dropdown-toggle').dropdown();
});
