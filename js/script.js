$(document).ready(function ($) {
	// 列表點選連結
	$(".clickable-row").click(function () {
		window.document.location = $(this).data("href");
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		// selectpicker手機原生選單
		$(".selectpicker").selectpicker("mobile");
	} else {
		// selectpicker初始化
		$(".selectpicker").selectpicker("refresh");
	}
});

$(window).resize( function (){
	if ($(window).width() > 992) {
		// 移除手機版table樣式
		$("table.table.table-striped").removeClass("rwd-table");
	}
	else if($(window).width() <= 992){
		// 手機版table樣式
		$("table.table.table-striped").addClass("rwd-table");
	}
});

// 首頁上方輪播圖
$("#top-ads").slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
});
// 首頁活動輪播圖
$("#activity_card").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	// adaptiveHeight: true,
	dots: true,
	// centerMode: true,
	arrows: false,
});
// 首頁商品輪播圖
$(".shop_slick").slick({
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
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				dots: true,
			},
		},
	],
});

// 底部廣告輪播圖
$("#bottom_ads").slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

// 漢堡在點開時
$("body").on("click", ".navbar-toggle", function () {
	// 注意，這邊抓到的狀態是上一個狀態
	// 意思是：當按下button展開選單時我們以為show會出現，但是程式在show還沒出現時就已經進入if else裡面了
	// 所以if else裡面的東西要寫反的
	// if裡面放沒有show的
	if ($("#navbar-menu").hasClass("show")) {
		// 頁面可以滾動
		$("body").css("overflow-y", "auto");
		$("body").css("overflow", "auto");
		// icon變成回漢堡
		$(".navbar-toggle i").removeClass("fa-times");
		$(".navbar-toggle i").addClass("fa-bars");
	}
	// else裡面放有show的
	else {
		// 底下頁面不會滑動
		$("body").css("overflow-y", "hidden");
		$("body").css("overflow", "hidden");
		// icon變成叉叉
		$(".navbar-toggle i").removeClass("fa-bars");
		$(".navbar-toggle i").addClass("fa-times");
	}
});

// GoToElement
$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (t) {
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			var e = $(this.hash);
			(e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")),
				e.length &&
					(t.preventDefault(),
					$("html, body").animate(
						{
							scrollTop: e.offset().top,
						},
						600,
						function () {
							var t = $(e);
							if ((t.focus(), t.is(":focus"))) return !1;
							t.attr("tabindex", "-1"), t.focus();
						}
					));
		}
	});

// 當視窗滾動時
$(window).scroll(function () {
	
	// if($(window).width() < 576){
	// 	// 滑動導覽列上縮
	// 	HideNav();
	// }
	// GoToTop漸入漸出
	FadeGoToTop();
});

// 滑動導覽列上縮
// 一開始的高度
var prevScrollpos = $(window).scrollTop();
function HideNav() {
	// 現在高度
	var currentScrollPos = $(this).scrollTop();
	if (currentScrollPos < 0) {
		$("#navbar").css("top", "0px");
	} else if (prevScrollpos > currentScrollPos) {
		$("#navbar").css("top", "0px");
	} else {
		$("#navbar").css("top", "-35px");
	}
	// 現在的高度變成先前的高度
	prevScrollpos = currentScrollPos;
}

// GoToTop漸入漸出
function FadeGoToTop() {
	if ($(this).scrollTop() > 150) {
		$("#backToTop").fadeIn();
	} else {
		$("#backToTop").fadeOut();
	}
}

// 顯示上傳檔案名稱
$('input[type="file"]').change(function (e) {
	var fileName = e.target.files[0].name;
	$(".custom-file-label").html(fileName);
});

if ($(window).width() > 992) {
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
	// 移除手機版table樣式
	$("table.table.table-striped").removeClass("rwd-table");
}
else if($(window).width() <= 992){
	// 手機版table樣式
	$("table.table.table-striped").addClass("rwd-table");
}

// fullcalendar初始化
document.addEventListener("DOMContentLoaded", function () {
	var calendarEl = document.getElementById("calendar");
	var calendar = new FullCalendar.Calendar(calendarEl, {
		// 只顯示該月份
		showNonCurrentDates: false,
		// 根據該月顯示幾行
		fixedWeekCount: false,
		// 高度
		contentHeight: 450,
		// 選到日期
		dateClick: function (info) {
            // alert("clicked " + info.dateStr);
            window.location.href = "#";
            // 將點擊到的日期加上底色
            var days = document.querySelectorAll(".selectedDate");
            days.forEach(function(day) {
                day.classList.remove("selectedDate");
            });
            info.dayEl.classList.add("selectedDate");
		},
		// 選到事件
		eventClick: function(info){
			var selectedContainer = findContainerForDate(calEvent.start);
			$(".fc-highlight").removeClass("fc-highlight");
			$(selectedContainer).addClass("fc-highlight");
		},
        // 標記
		events: [
			{
				description: "蝦皮618活動！全館滿千送百",
				start: "2020-08-01",
				url: "#",
			},
			{
				description: "WWDC 2020",
				start: "2020-08-22",
				url: "#",
			},
        ]
	});
	calendar.render();
	// 中文語系
	calendar.setOption("locale", "zh-tw");
});

// 履歷查詢readonly
$('.read_only input').attr('readonly', 'readonly');
$('.read_only input').attr('disabled', 'disabled');
$('.read_only textarea').attr('disabled', 'disabled');
$('.read_only select').attr('disabled', 'disabled');
