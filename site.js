/*global $*/
var main=function(){
$('#menu-icon').click(function(){
    if($('.nav').hasClass('open')){
        $('.nav').removeClass('open').animate({
            left:"-250px"
        }, 200);
        $('body').animate({
            left:"0px"
        }, 200);
    }else{
        $('.nav').addClass('open').animate({
            left:"0px"
        }, 200);
        $('body').animate({
            left:"250px"
        }, 200);
    }
});
$('.dropdown').click(function(){
    if($('.sub-nav').hasClass('o')){
        $('.sub-nav').toggle(false).toggleClass('o', false);
    }else{
        $('.sub-nav').toggle(true).toggleClass('o', true);
    }
    if($('.sub-nav').hasClass('o')){
        $('.caret-up').css("display", "inline-block");
        $('.caret-down').css("display", "none");
    }else{
        $('.caret-up').css("display", "none");
        $('.caret-down').css("display", "inline-block");
    }
});
};

$(document).ready(main);
