const visual_text = $('#visual_text');
const intro_wrap = $('#intro_wrap');
const scroll_down_wrap = $('#scroll_down_wrap')


function intro_text(){
    setTimeout(function() {
        visual_text.slideDown(1200);
    }, 3000);
}

function intro_scroll_down(){
    setTimeout(function() {
        scroll_down_wrap.css('display','block');
    }, 7000);
}


function intro(){
    setTimeout(function() {
        intro_wrap.slideUp(1500);
    }, 2500);
}

intro();
intro_scroll_down();
intro_text();
