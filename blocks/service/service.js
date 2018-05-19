$(".service-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav:true,
    margin:300,
    navText: ["<img src='img/service-slider-left.png'>","<img src='img/service-slider-right.png' >"],
    onDragged: serviceCallBack,
    mouseDrag: false,
    touchDrag: true
});


function serviceCallBack(event) {
    var item      = event.item.index;     // Position of the current item
    $(event.target).find('.service-carousel-current').text(item + 1);
}

$(".service-carousel .owl-prev").each(function(index,item) {
    $(item).after("<div class='service-carousel__counter'>\
    <span class='service-carousel-current'>1</span>\
    /\
    <span class='service-carousel-total'>"+$(this).parent().parent().find('.owl-stage-outer .owl-stage .owl-item').length+"</span>\
    </div>");
});

$(".service-carousel .owl-prev").click(function() {
    let curr = parseInt($(this).siblings().find('.service-carousel-current').text());
    if (curr > 1)
         $(this).siblings().find('.service-carousel-current').text(curr - 1);
});

$(".service-carousel .owl-next").click(function() {
    let curr = parseInt($(this).siblings().find('.service-carousel-current').text());
    let total = parseInt($(this).parent().parent().find('.owl-stage-outer .owl-stage .owl-item').length);
    if (curr < $(this).parent().parent().find('.owl-stage-outer .owl-stage .owl-item').length)
         $(this).siblings().find('.service-carousel-current').text(curr + 1);
});
