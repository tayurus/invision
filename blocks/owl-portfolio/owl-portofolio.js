$(".owl-portfolio").owlCarousel({
    items:1,
    nav:true,
    dots:false,
    navText: ["<img src='img/service-slider-left.png'>","<img src='img/service-slider-right.png' >"],
    onDragged: portfolioCallBack,
    mouseDrag: false,
    touchDrag: true
});


function portfolioCallBack(event) {
    var item      = event.item.index;     // Position of the current item
    $(event.target).find('.portfolio-current').text(item + 1);
}

$(".owl-portfolio .owl-prev").each(function(index,item) {
    $(item).after("<div class='portfolio__counter'>\
    <span class='portfolio-current'>1</span>\
    /\
    <span class='portfolio-total'>"+$(this).parent().parent().find('.owl-stage-outer .owl-stage .owl-item').length+"</span>\
    </div>");
});

$(".owl-portfolio .owl-prev").click(function() {
    let curr = parseInt($(this).siblings().find('.portfolio-current').text());
    if (curr > 1)
         $(this).siblings().find('.portfolio-current').text(curr - 1);
});

$(".owl-portfolio .owl-next").click(function() {
    let curr = parseInt($(this).siblings().find('.portfolio-current').text());
    let total = parseInt($(this).parent().parent().find('.owl-stage-outer .owl-stage .owl-item').length);
    if (curr < $(this).parent().parent().find('.owl-stage-outer .owl-stage .owl-item').length)
         $(this).siblings().find('.portfolio-current').text(curr + 1);
});
