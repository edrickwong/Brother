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
    
	
$("#ex6").slider();
$("#ex6").on('slide', function(slideEvt) {
	$("#ex6SliderVal").text(slideEvt.value);
});

$("#ex7").slider();
$("#ex7").on('slide', function(slideEvt) {
	$("#ex7SliderVal").text(slideEvt.value);
});

$("#ex8").slider();
$("#ex8").on('slide', function(slideEvt) {
	$("#ex8SliderVal").text(slideEvt.value);
});

$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    
    if ($(this).find('.btn-primary').size()>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size()>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size()>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size()>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }
    
    $(this).find('.btn').toggleClass('btn-default');
       
});


