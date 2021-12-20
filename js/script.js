$(document).ready(function () {
    $('header h1 img').hover(function () {
        $(this).attr("src", $(this).attr("src").replace(".png", "_hover.png"))
    }, function () {
        $(this).attr("src", $(this).attr("src").replace("_hover.png", ".png"))
    })
    $('.language,.language-box').mouseenter(function () {
        $('.language-box').stop().fadeIn(300);
    })

    $('.language,.language-box').mouseleave(function () {
        $('.language-box').stop().fadeOut(300);
    })
    $('.language-box').mouseenter(function () {
        $('header .nav-s ul li:last').addClass('show')
    })
    $('.language-box').mouseleave(function () {
        $('header .nav-s ul li:last').removeClass('show')
    })
    $('.slide').bxSlider({
        auto: true,
        stopAutoOnClick: true
    })
    $(".insta-images ul li a img").hover(function () {
        $(this).attr("src", $(this).attr("src").replace(".jpg", "_on.jpg"))
    }, function () {
        $(this).attr("src", $(this).attr("src").replace("_on.jpg", ".jpg"))
    })

    $('footer .logos img').hover(function () {
        $(this).attr("src", $(this).attr("src").replace(".png", "_on.png"))
    }, function () {
        $(this).attr("src", $(this).attr("src").replace("_on.png", ".png"))
    })
});