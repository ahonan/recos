/*global $*/
var main=function(){
$('#menu-icon').click(function(){
    if($('.nav').hasClass('open')){
        $('.nav').removeClass('open').animate({left:"-250px"}, 500);
        $('body').animate({left:"0px"}, 500);
    }else{
        $('.nav').addClass('open').animate({left:"0px"}, 500);
        $('body').animate({left:"250px"}, 500);
    }
});
$('.dropdown').click(function(){
    if($('.sub-nav').hasClass('o')){
        $('.sub-nav').toggle(400).removeClass('o');
        $('#caret').addClass('caret-down').removeClass('caret-up');
    }else{
        $('.sub-nav').toggle(400).addClass('o');
        $('#caret').addClass('caret-up').removeClass('caret-down');
    }
});
};
$(document).ready(main);

$(document).ready(main);
