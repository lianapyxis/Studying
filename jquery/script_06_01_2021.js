//var $myDiv = $('<diV id="my" class="page"> Hello </div>').appendTo("#content");

//var $myDiv = $('<div>Hello</div>',{'id':'my', 'class':'page'}).appendTo('#content');

//var $myDiv = $('<div>Hey</div>').attr({'id':'my', 'class':'page'}).appendTo('#content');

/*
var myDiv = document.createElement('div');
    myDiv.id = "my";
    myDiv.className = "page";
*/

//$("p").after("<hr/>");
$("<hr/>").insertAfter("p");

$("<hr/>").insertBefore("p");

$("p").append("<hr/>");

$("<p>Hey there</p>").appendTo("#content");
$("<p>Hey there from prependTo</p>").prependTo("#content");

$(".second").replaceWith("<h2>New text</h2>");

//$("<h2>New text</h2>").replaceAll(".inner");

//$(".inner").wrap("<div class='new'>Some Text</div>");
$(".inner").wrapAll("<div class='new'>Some Text</div>");
$(".inner").wrapInner("<div class='forinner'>Something</div>");
//unwrap()

$(".first").clone().appendTo(".third");

//detach() - deletes elements from DOM but saves it in jQuery so we can remove an element and put it back

var p;

$(".addet").click(function() {
    if(p) {
        p.appendTo("header");
        p = null;
    } else {
        p = $(".hello").detach();
    }
})

//empty() - deletes some text and child elements of a chosen element

$(".third").empty();

//remove() - deletes an element from DOM forever

$(".fourth").remove();

var t = $(".one");
var offset = t.offset();

t.html("left: " + offset.left + ",top: " + offset.top);
$(".three").offset({top:10,left:350});

//position() - returns the position of an element in reference to its parent element

var k = $(".two");
var position = k.position();

k.html("left: " + position.left + ",top: " + position.top);

//height() - returns the height of an element not taking into account its margins and borders

function showHeight(element, height) {
    $(".result").text("Height of the " + element + " is " + height);
}
$("#getp").click(function() {
    showHeight("paragraph", $(".paragr").height());
});

$("#getd").click(function() {
    showHeight("document", $(document).height());
});

$("#getw").click(function() {
    showHeight("window", $(window).height());
});

//innerHeight - returns the height of an element including its padding

var b = $(".paragrtwo");
$(".paragrthree").text("innerHeight: " + b.innerHeight());
