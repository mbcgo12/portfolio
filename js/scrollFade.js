$(window).scroll(function() {  

    var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.  
    // console.log(position);

    $(window).scroll(function() {  

    var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다. 

    if (position >= 500){
    $('.card_aside').fadeIn('slow');
    }

    if (position >= 2079){
        $('#BTC_area').fadeIn('slow');
    }

    if (position >= 3094){
        $('#Kaka_area').fadeIn('slow');
    }

    if (position >= 4009){
        $('#Devcat_area').fadeIn('slow');
    }

    if (position >= 5168){
        $('#government_area').fadeIn('slow');
    }

    if (position >= 5983){
        $('#PHP_area').fadeIn('slow');
    }

    if (position >= 7172){
        $('#work_list_wrap').fadeIn('slow').css({display: 'flex'});
    }
    });      



    
});  

