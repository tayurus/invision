let sliderDescriptor;
function startSlider() {
    let slideWidth = $(window).width();
    let scrollTo = slideWidth;
    let scrollMax = slideWidth * $(".backgrounds-carousel__item").length;
    sliderDescriptor = setInterval(function() {

        $(".backgrounds-carousel").animate({scrollLeft:scrollTo},2000, function() {
            scrollTo += slideWidth;
            if (scrollTo >= scrollMax){
                scrollTo = 0;
            }
        });

    }, 6000);
}

$(window).resize(function() {
    clearInterval(sliderDescriptor);
    startSlider();
})

startSlider()
