$(function() {
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.SiteHeader').addClass('SiteHeader__bg');
        }else{
            $('.SiteHeader').removeClass('SiteHeader__bg');
        }
    });

    $('.SiteNavi__toggle').on("click", function() {
        $('.SiteHeader').toggleClass('SiteNavi__open');
    });

    $(".SiteNavi__shadow").click(function() {
        $('.SiteHeader').removeClass('SiteNavi__open');
    });
});