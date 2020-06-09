$('#top-ads').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('#activity_card').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    // centerMode: true,
    arrows: false
});

$(function () {
    $('#bootnavbar').bootnavbar({
    });
})

// 列表點選連結
$(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
});

