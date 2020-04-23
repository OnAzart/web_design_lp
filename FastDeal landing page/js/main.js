$(function(){
    $('.slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.png" alt="next arrow" height=50 weight=50></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.png" alt="prev arrow" height=50 weight=50></button>',
        fade:true
    })
});

$(function() {
	$(".menu a").mPageScroll2id({
		offset : 50
	});
});