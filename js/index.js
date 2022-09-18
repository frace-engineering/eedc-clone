$(document).ready(function(){
    $('#about').hover(function(){
        $('.about').slideDown('slow', function(){
            $('#about').mouseleave(function(){
                $('.about').slideUp('slow')
            });
        });
    })

    $('#customer').hover(function(){
        $('.customer-information').slideDown('slow', function(){
            $('#customer').mouseleave(function(){
                $('.customer-information').slideUp('slow')
            });
        });
    })

    $('#location').hover(function(){
        $('.locations').slideDown('slow', function(){
            $('#location').mouseleave(function(){
                $('.locations').slideUp('slow')
            });
        });
    })

    $('#media').hover(function(){
        $('.media').slideDown('slow', function(){
            $('#media').mouseleave(function(){
                $('.media').slideUp('slow')
            });
        });
    })

    $('#career').hover(function(){
        $('.job-listings').slideDown('slow', function(){
            $('#career').mouseleave(function(){
                $('.job-listings').slideUp('slow')
            });
        });
    })

    $('#contact').hover(function(){
        $('.contact-us').slideDown('slow', function(){
            $('#contact').mouseleave(function(){
                $('.contact-us').slideUp('slow')
            });
        });
    })

    $('#map').hover(function(){
        $('.meter-request').slideDown('slow', function(){
            $('#map').mouseleave(function(){
                $('.meter-request').slideUp('slow')
            });
        });
    })

    $('#e-bill').hover(function(){
        $('.e-bill').slideDown('slow', function(){
            $('#e-bill').mouseleave(function(){
                $('.e-bill').slideUp('slow')
            });
        });
    })



})

