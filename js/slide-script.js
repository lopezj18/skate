$(function () {



$("#slider1").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  pager: true,
  nav: true,
  speed: 1500,            // Integer: Speed of the transition, in milliseconds
  timeout:3500,          // Integer: Time between slide transitions, in milliseconds
  namespace: "centered-btns",
  pause: true,           // Boolean: Pause on hover, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: 900,         // Integer: Max-width of the slideshow, in pixels
  maxheight:430
});
});