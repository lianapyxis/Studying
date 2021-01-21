var header = $(".accordion-header");

function accordion() {
    $(this).toggleClass("active");
    $(this).next().slideToggle("normal");
    $(".accordion-header").not(this).removeClass("active");
    $(".accordion-header").not(this).next().hide("slow");
}

header.click(accordion);