$(".pagination__item").click(function() {
    $('[data-paginationItem]').hide();
    $('[data-paginationItem='+$(this).attr('data-paginationIndex')+']').show();
    $(".pagination__item").removeClass("pagination__item_active")
    $(this).addClass("pagination__item_active");
});

$(".pagination__item:eq(1)").click();
