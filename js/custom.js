$(document).ready(function () {



$('.toggle-btn').click(function() {
	$("body").toggleClass('menu_open');
})

$('.plus_icon').click(function() {
	$('.get-moving-quote-sec-bottom').slideToggle('linear');

})

$('.get-moving-quote-sec-bottom').hide();

$('.plus_icon').click(function() {
	$(".plus_icon").toggleClass('plus_rotate');
})

$('.left-side-scroll-btn').click(function() {
	$(".long-distance-sec-left-side").toggleClass('long-distance-sec-left-open');
})



//fixed header
    $(window).scroll(function() {
        var header = $('.header');
        var scroll = $(window).scrollTop();
        var homeScroll = 100;
        if (scroll > homeScroll) {
            header.addClass('fixed');
            jQuery('#return-to-top').fadeIn(300);
        } else {
            header.removeClass('fixed');
            jQuery('#return-to-top').fadeOut(300);
        }
    });


$('.testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
    items:3,
    dots:true,
    
    responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    
})
});

