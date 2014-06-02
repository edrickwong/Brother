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
    
$("#submit").click(function(){
	$("#copyMenu").fadeOut();
	progress(100,$("#progressBar"));
});

function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').$("animate({ width: progressBarWidth }, 3000).html(percent + "%&nbsp;");
}


