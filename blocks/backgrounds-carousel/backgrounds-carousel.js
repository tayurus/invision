let sliderDescriptor;

function startSlider(){
    let slidesCount = 7;
    let currentSlide = 1;
    sliderDescriptor = setInterval(function() {
        $(".backgrounds-carousel__item").css({"background" : "url(img/main-bg-" + ( currentSlide++ % slidesCount ) + ".jpg) no-repeat center / cover"});
    },4000);

}

startSlider();
