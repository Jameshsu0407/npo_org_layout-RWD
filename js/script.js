// 首頁上方輪播圖
$('#top-ads').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});
// 首頁活動輪播圖
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
// 底部廣告輪播圖
$('#bottom_ads').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }

        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

// 導覽列初始化
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

// goToElement
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (t) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var e = $(this.hash);
        e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && (t.preventDefault(), $("html, body").animate({
            scrollTop: e.offset().top
        }, 600, function () {
            var t = $(e);
            if (t.focus(), t.is(":focus")) return !1;
            t.attr("tabindex", "-1"), t.focus()
        }))
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop()>150){
        // $('#backToTop').css('display','block');
        $('#backToTop').fadeIn();
    }
    else{
        // $('#backToTop').css('display','none');
        $('#backToTop').fadeOut();
    }
});


