$(window).on('scroll', function(){
    let scrollActual = $(window).scrollTop();
    
    $('.reveal').each(function(){
        let profundidad = $(this).offset().top - $(window).innerHeight() / 1.2;
        if (scrollActual > profundidad) {
            $(this).addClass('visible');
        } else{
            $(this).removeClass('visible');

        }
    });
});

// RETARDOS EN IMAGENES
$('.reveal').each(function(){
    $(this).css('transition-delay', $(this).data('delay') + 'ms');
});

