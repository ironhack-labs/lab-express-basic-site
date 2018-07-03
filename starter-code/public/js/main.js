$(function() {
  var randomBg = Math.floor(Math.random() * (3 - 1) + 1);
  $('header').addClass(`bg-${randomBg}`);

  $('.timeline-title').on('click', function() {
    $('.timeline-content').slideUp();

    $(this).next('.timeline-content').slideDown();
  });

  $('.img-gallery').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });
});