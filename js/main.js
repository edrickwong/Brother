jQuery("#loadscreen").fitText();

$(function () {
    $('.tlt').textillate({
       loop: true
});
})

$(document).ready(function() {
    $("#splash").delay(5000).hide(0, function() {
        $("#mainMenu").fadeIn();
        $("#time").fadeIn();
    });
    
});

$("#copy").click(function() {
    $("#mainMenu").fadeOut();
    $("#copyMenu").fadeIn();
});
    
