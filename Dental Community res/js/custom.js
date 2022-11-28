$(document).ready(function(){
    $('.hamburger').click(function(){
        $('nav').toggleClass('active')
    });
    let navScroll = 0;
    $(document).scroll(function() {
        navScroll = $(this).scrollTop();
        if (navScroll > 10) {
            $("nav").css({
                "background-color": "#482AFD24",
                "backdrop-filter": "saturate(180%) blur(20px)"
            });

        } else {
            $("nav").css({
                "background-color": "none",
                "backdrop-filter": "none"
            });

        }
    });
});