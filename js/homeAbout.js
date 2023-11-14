$(document).ready(function(){
    $('.about_icon > li').mouseover(function(){
        $(this).children('.burble').stop().fadeIn();
    }).mouseout(function(){
        $(this).children('.burble').stop().fadeOut('slow');
    })
})