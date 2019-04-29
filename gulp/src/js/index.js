$(function () {
    //顶部导航
    var navIndex = $('.cs-header_nav .active').index();
    $('.cs-header_bg s:first-child').width(navIndex*206).siblings().width(824-navIndex*206);
    $('.cs-header_nav li').click(function () {
        $(this).addClass('active').siblings().removeClass();
        navIndex = $('.cs-header_nav .active').index();
    }).hover(function () {
        $('.cs-header_bg s:first-child').stop().animate({
            width: $(this).index()*206
        }).siblings().stop().animate({
            width: 824-$(this).index()*206
        });
        navIndex = $('.cs-header_nav .active').index();
        $(this).siblings().removeClass();
    },function () {
        $('.cs-header_bg s:first-child').stop().animate({
            width: navIndex*206
        }).siblings().stop().animate({
            width: 824-navIndex*206
        });
        $('.cs-header_nav li').eq(navIndex).addClass('active');
    });

    //旅游服务工具条
    setInterval(function() {
        $('.cs-toolbox .handle').removeClass('animated-in').addClass('animated-out');
        setTimeout(function() {
            $('.cs-toolbox .handle').removeClass('animated-out').addClass('animated-in');
        }, 900);
    }, 10000);
    $('.cs-toolbox .handle').click(function() {
        $(this).animate({'left': -167}, 200);
        setTimeout(function() {
            $('.cs-toolbox .box_new').animate({'left': 0}, 500);
        }, 200);
    });
    $('.cs-toolbox .packup').click(function() {
        $(this).parents('.box_new').animate({'left': '-100%'}, 500);
        setTimeout(function() {
            $('.cs-toolbox .handle').animate({'left': 0}, 200);
        }, 500);
    });
    $('.cs-toolbox .box_new').mousemove(function(evt){
        evt=evt || window.event;
        showP(evt.clientX,evt.clientY);
    });
    function showP(x,y) {
        var xP = (x-500)/500;
        var yP = (y-250)/250 + 10;
        $('.cs-toolbox_ip1')[0].style.left=(xP*30)+290+"px";
        $('.cs-toolbox_ip2')[0].style.left=(xP*5)+10+"px";
        $('.cs-toolbox_ip3')[0].style.left=(xP*10)-110+"px";
    }
});