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
    $("#progressPage").fadeIn().delay(600);
    
	progress(100,$("#progressBar"));
    window.setTimeout(showDefault, 5000);
});

function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 3000).html(percent + "%&nbsp;");
}

function showDefault(){
    $("#progressPage").fadeOut();
    $("#mainMenu").fadeIn();
}


