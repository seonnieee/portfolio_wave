// 메인이미지 슬라이드 효과
$(function(){
    $('#webpage_img1').mouseover(function(){
        $('#webpage_img1 img').stop().animate({marginTop:-2338},4000);
    }).mouseleave(function(){
        $('#webpage_img1 img').stop().animate({marginTop:0},2000);
    });

    $('#webpage_img2').mouseover(function(){
        $('#webpage_img2 img').stop().animate({marginTop:-2960},5000);
    }).mouseleave(function(){
        $('#webpage_img2 img').stop().animate({marginTop:0},2000);
    });

    $('#webpage_img3').mouseover(function(){
        $('#webpage_img3 img').stop().animate({marginTop:-2045},4000);
    }).mouseleave(function(){
        $('#webpage_img3 img').stop().animate({marginTop:0},2000);
    });

    $('#webpage_img4').mouseover(function(){
        $('#webpage_img4 img').stop().animate({marginTop:-3760},6000);
    }).mouseleave(function(){
        $('#webpage_img4 img').stop().animate({marginTop:0},2000);
    });
})
