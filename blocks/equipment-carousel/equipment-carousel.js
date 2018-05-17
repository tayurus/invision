$(".equipment-carousel").owlCarousel({
    items:1,
    nav: true,
    dots: false,
    margin: 30,
    loop:true,
    navText: ["<img src='img/service-slider-left.png'>","<img src='img/service-slider-right.png' >"],
    responsive:{
        550:{
            items:2
        },
        800:{
            items:3
        },
        950:{
            items:4
        },
        1000:{
            items:5
        },
        1140:{
            items:6
        }
    }
})
