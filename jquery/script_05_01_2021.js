$(function() {
    $("h1").css("color", "green");
});

$("h1").html("New Text");

$("#btn_start").click(function() {
    $("#message")
    .html("Message")
    .css("background-color", "green")
    .parent()
    .css("background-color", "fff4dd")
    .width(150)
    .height(80)
});

$("#btn_reset").click(function() {
    $("#message")
    .css("display", "none");
});

$("#content").css("color", "red");
$(".wrapper").css("color", "red");
$(".wrapper.box").css("color", "red");
$("article h2").css("color", "blue");
$("article").find("h2").css("color", "blue");
$("h1 + p").css("color", "orange"); // choosing all the paragraphs after elements h10
$("#content").prev().css("color", "red"); // choosing the previous element
$("#content").next().css("color", "red"); // choosing the nex element

//$("*").css("color", "red"); - choosing all elements

//$("article > h2").css("color", "red"); // choosing all children and grandchildren h2 of this element
//$("article > *").css("color", "red"); // choosing all children and grandchildren of this element

//$("#content a.button");
//$("a.button", "#content");

/*
$("#content a.button");
$("#content h3.title");

var content = $("#content");
$content.find("a.button");
$content.find("h3.title");

$("#content div input:disabled");

$("#content div").find("input:disabled");
*/

$(".boxtwo").css({"color": "green",
                    "font-size": "12px",
                    "margin-left": "10px"});

$("#contenttwo").css("height", function(i, value) {
    return parseFloat(value)*1.2;
});

//$("#contenttwo").addClass("name");


//$("#contenttwo").addClass(index, function() {
//    return className;
//});
// .hasClass()
// .removeClass("boxtwo")
// .toggle() --- hides an element, display: none

//attr(attrName)
//attr(attrName, attr Value)
//removeattr(attrName)

/*
var altText = $('img').attr('alt');
$("img").attr("src", "/img/default.jpg");

$("a#my").atrr({
    "href": "google.com",
    "title": "Google"
});
*/

/*
$("a").click(function(event) {
    alert("Hey!");
    event.preventDefault();
    event.stopPropagation(); // prevents bubbling
    // these two methods can be done together with one line:
    // return false;
});

$("header").click(function(event) {
    alert("Hey there!!!");
    event.preventDefault();
});
*/

$("#quantity").keyup(function() {
    var Value = $(this).val();
    $("#messagetwo").text(Value);
})

//hide()
//show()

//$(".anim").hide("slow", function() {
//    alert("Hello");
//}); 

//$(".anim").click(function() {
//    $(this).hide("slow");
//});

//slideDown()
//slideUp()
//slideToggle
/*$("#stick").click(function() {
    $("#hide").slideDown("slow");
});

function changeClass(){
    $(this).prev().toggleCLass("active");
};
$(function() {
        $("article h2").click(function() {
            $(this).next().slideToggle();
            $(this).toggleCLass('active');
        });
});

*/

$('#stick').click(function(){
    $('#hide').slideToggle("slow");
});


//fadeIn()
//fadeOut()
//fadeToggle()
//fadeTo()

$(".anim").click(function() {
    $(this).fadeOut(2000);
    $(this).fadeIn(2000);
    $(this).fadeTo("slow", 0.4);
});
//.animate
/*
$(".aanim").animate({
    "opacity": "hide"
});
*/
$(".aanim").animate({"opacity": "-=0.3", "height": "+=50px",})

            .animate({"width": "-=25px"}, {queue: false}).stop();

//jQuery.fx.off = true; - to turn off all animation









