$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
//            autoplay: true,
//            autoplayTimeout: 3000,
//            autoplayHoverPause: true,
        navText: ['','']
    });

    $('.dropdown-title').on('click', function(){
        $(this).parent().toggleClass('opened');
    });
    $(document).on('mouseup', function (e) {
        var opened = $('.dropdown.opened');
        if(opened.length>0 && !opened.is(e.target) && opened.has(e.target).length === 0) {
            opened.removeClass('opened');
        }
    });
    $('.dropdown-list li').on('click', function () {
        var opened = $('.dropdown.opened');
        var text = $(this).text();
        opened.find('li').removeClass('active');
        $(this).addClass('active');
        opened.find('.dropdown-title b').text(text);
        opened.removeClass('opened');
    });

    $('.sidebar nav li:has(ul)').on('click', function (e) {
        $(this).toggleClass('opened');
        e.preventDefault();
    });
});