$(function (){
    var $allcheckbox = $('input[type="checkbox"]'),//这个是全部的全局盒子
        $wholecheckbox = $('.quan_check'),         //这个是全选的盒子
        $sonCheckbox = $('.son_check');
    $allcheckbox.click(function(){
        if($(this).is(':checked')){
            $(this).next('label').addClass('mark')
        }else {
            $(this).next('label').removeClass('mark')
        }
    })

})