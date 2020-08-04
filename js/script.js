$(document).ready(function($) {
    // 列表點選連結
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
    // 導覽列初始化
    // $('#bootnavbar').bootnavbar();


    // selectpicker手機原生選單
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('.selectpicker').selectpicker('mobile');
        // $.fn.selectpicker.Constructor.DEFAULTS.mobile = true;
    } 
    else{
        // selectpicker初始化
        // $('.selectpicker').selectpicker().selectpicker("render");
        $(".selectpicker").selectpicker("refresh");
    }
});

// 首頁上方輪播圖
$('#top-ads').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});
// 首頁活動輪播圖
$('#activity_card').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // adaptiveHeight: true,
    dots:true,
    // centerMode: true,
    arrows: false
});
// 首頁商品輪播圖
$('.shop_slick').slick({
    arrows: false,
    autoplay: true,
    // adaptiveHeight: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }

        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }

        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots:true
            }
        }
    ]
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

// // 列表點選連結
// $(document).ready(function($) {
//     $(".clickable-row").click(function() {
//         window.document.location = $(this).data("href");
//     });
// });

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
// goToElement漸入漸出
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

// // 調整圖片不符規定尺寸時留白部分
// $( ".fixed_size" ).each(function (i) {
//     var pic_width= $(this).width();
//     var pic_height= $(this).height();
    
//     if(pic_width > pic_height){
//         $(this).addClass('width_100');
//         $(this).removeClass('height_100');
       
//     }
//     else if(pic_width <= pic_height){
//         $(this).addClass('height_100');
//         $(this).removeClass('width_100');
//     }
// })

// 顯示上傳檔案名稱
$('input[type="file"]').change(function(e){
    var fileName = e.target.files[0].name;
    $('.custom-file-label').html(fileName);
});

// 無障礙導覽列下拉選單
$(".tab-dropdown-menu1").on("focusout", "li:last", function (e) {
    $(this).parents("ul.dropdown-menu").css("display", "none");
    $(this)
        .parents("li.tab-dropdown-menu1")
        .removeClass("dropdown on")
        .addClass("dropdown");
});
$(".tab-dropdown-menu2").on("focusout", "li:last", function (e) {
    $(this).parents("ul.menu-default").css("display", "none");
    $(this)
        .parents("li.tab-dropdown-menu1")
        .removeClass("dropdown on")
        .addClass("dropdown");
});
$(".dropdown").on("focusin", "a", function (e) {
    $(this)
        .next("ul")
        .css("display", "block")
        .css("opacity", "1")
        .parent(".dropdown")
        .addClass("dropdown on")
        .siblings(".dropdown")
        .removeClass("dropdown on")
        .addClass("dropdown");
});