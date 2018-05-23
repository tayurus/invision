$(".zoomIn").click(function(){
    $(".blackout").show();
    $(".blackout__img").attr("src", $(this).parent().find(".img-example").attr("src"));
})

$(".blackout").click(function(){
    $(this).hide();
})
