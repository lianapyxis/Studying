$(".skillbar").each(function() {
    $(this).find(".skillbar-bar").animate({
        width:$(this).attr("data-percentage")
    }, 2000);
});