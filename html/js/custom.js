
jQuery(document).ready(function () {

// Menu
jQuery('.stellarnav').stellarNav({
  theme: 'light',
  breakpoint: 960,
  position: 'right',
  //phoneBtn: '18009997788',
  //locationBtn: 'https://www.google.com/maps'
});




//Slick slider initialize
$('.slider').slick({
  arrows:false, 
  dots: false, 
  infinite:true, 
  fade: true,
  speed:500,
  autoplay:false, 
  autoplaySpeed: 3000, 
  slidesToShow:1, 
  slidesToScroll:1
});
//On click of slider-nav childern,
//Slick slider navigate to the respective index.
$('.slider-nav > li').click(function() {
    $('.slider').slick('slickGoTo',$(this).index());
})






});