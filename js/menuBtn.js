const detail_1_menu1 = $('#detail_1_menu1');
const pop01_btn = $('#pop01_btn');
const pop01_btn_cancle = $('#pop01_btn_cancle')

function con1_menu1(){
    detail_1_menu1.click(function(){
        pop01_btn.slideDown(800);
    })
}

function con1_menu1_cancle(){
    pop01_btn_cancle.click(function(){
        pop01_btn.slideUp(500);
    })
}

con1_menu1();
con1_menu1_cancle();