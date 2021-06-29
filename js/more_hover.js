const work_list =$('#work_list')
const work_hover_wrap = $('#work_hover_wrap')

const work_list2 =$('#work_list2')
const work_hover_wrap2 = $('#work_hover_wrap2')

function list_con01_hover(){
    work_list.hover(function(){
        work_hover_wrap.stop().slideToggle(800);
    })
}
function list_con02_hover(){
    work_list2.hover(function(){
        work_hover_wrap2.stop().slideToggle(800);
    })
}

list_con01_hover();
list_con02_hover();