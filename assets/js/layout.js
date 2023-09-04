$(function(){
    var wheelArea = $('.admin_contents');
    var wheelPosition = 0;

    wheelArea.on("wheel", function(e){
        
        if(e.originalEvent.deltaY < 0){
            //wheel up
            wheelPosition += e.originalEvent.deltaY;
            if(wheelPosition < 0){
                wheelPosition = 0;
            }
        } else {
            //wheel down
            wheelPosition += e.originalEvent.deltaY;
            if(wheelPosition > 200){
                wheelPosition = 200;
            }
        }
        movePowerScroll(wheelPosition)
    })

    $('.admin_contents_nav > div').click(function(){
        var clickPosition = $(this).index() * 100;
        $('.admin_contents_nav > div').removeClass('on');
        $(this).addClass('on');
        movePowerScroll(clickPosition);
    })

    $('.room').click(function(){
        controlPower(this) 
    })

    $('.screen').click(function(){
        controlPower(this) 
    })

    $('.etc').click(function(){
        controlPower(this) 
    })

    $('.tab_place_btn ul li').click(function(){
        var index = $(this).index();
        $('.tab_place_btn ul li').removeClass('on');
        $(this).addClass('on');

        $('.place_list').removeClass('on');
        $('.place_list').eq(index).addClass('on')
    })

    $('.pagenation ul li').click(function(){
        var id_name = $(this).attr('id');
        if(id_name != 'page_prev' && id_name != 'page_next'){
            $('.pagenation ul li').removeClass('on');
            $(this).addClass('on');
        }
    })
});

function movePowerScroll(wp){
    var adminRoomHeight = $('#admin_room').outerHeight();
    var adminScreenHeight = $('#admin_room').outerHeight();
    var adminEtcHeight = $('#admin_etc').outerHeight();
    
    console.log(adminRoomHeight)
    if(wp == 0){
        $(".admin_contents").animate({scrollTop: 0},400);
        $('.admin_contents_nav > div').removeClass('on');
        $('.admin_contents_nav > div:nth-child(1)').addClass('on');
        $('.admin_cont_menu_left > span:last-child').html('스크린골프 룸 전원 관리');
    } else if(wp == 100){
        $(".admin_contents").animate({scrollTop: adminRoomHeight},400);
        $('.admin_contents_nav > div').removeClass('on');
        $('.admin_contents_nav > div:nth-child(2)').addClass('on');
        $('.admin_cont_menu_left > span:last-child').html('스크린연습장 타석 전원 관리');
    } else if(wp == 200){
        $(".admin_contents").animate({scrollTop: adminRoomHeight + adminScreenHeight},400);
        $('.admin_contents_nav > div').removeClass('on');
        $('.admin_contents_nav > div:nth-child(3)').addClass('on');
        $('.admin_cont_menu_left > span:last-child').html('조명 | 에어컨 | 전원 관리');
    }
}

function controlPower(el){
    var checkOn = $(el).attr('class').indexOf('on');
    if(checkOn > -1){
        $(el).removeClass('on');
        $(el).addClass('off');
    } else {
        $(el).removeClass('off');
        $(el).addClass('on');
    }
}