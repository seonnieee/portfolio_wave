$(document).ready(function(){
    var box = $('.mobile > div');
    var box_height = box.height(); // 460px
    var margin_plus = 0;

    function mobileSlide(){
        margin_plus += 430;

        if(margin_plus >= box.children('img').height()-box_height){
            margin_plus = 0;
        }

        box.children("img").stop().animate({marginTop: -margin_plus},800);
    }
    setInterval(mobileSlide,3000);
});