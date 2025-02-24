$(document).ready(function() {
    $(".nav li").hover(
        function() { // mouseenter
            console.log("Hovered on:", $(this).text());
            $(this).children("ul.menu").stop(true, true).slideDown(200);
        },
        function() { // mouseleave
            console.log("Mouse left:", $(this).text());
            $(this).children("ul.menu").stop(true, true).slideUp(200);
        }
    );
});
