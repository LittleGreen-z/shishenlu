
// 顶部部分
//轮播网易严选宝箱
yanxuan();
function yanxuan() {
    var index = 0;
    window.setInterval(function () {
        index++;
        $('.top_nav .select ul').animate({
            top:-index * 54
        },500,function () {
            if (index == 2) {
                index = 0;
                $('.top_nav .select ul').css('top',0);
            }
        })
    },1500);
}
// top_nav 左侧top_menu
    $('.top_nav > p').hover(
        function () {
            $('.top_nav .top_menu')
            .stop().slideDown(300);
            $('.main_nav').css('opacity','0');
        },
        function () {
            $('.top_nav .top_menu')
            .stop().slideUp(300);
            $('.main_nav').css('opacity','1');
        }
    );
    $('.top_nav .top_menu').hover(
        function () {
            $('.top_nav .top_menu')
            .stop().slideDown(300);
            $('.main_nav').css('opacity','0');
        },
        function () {
            $('.top_nav .top_menu')
            .stop().slideUp(300);
            $('.main_nav').css('opacity','1');
        }
    );
// top_nav  banner
$('.top_banner1').hover(
    function () {
        $('.banner_pic1')
        .stop().show(0);
        $('.main_nav').css('opacity','0');
        $('.top_banner1').children('img').css('opacity','0');
    },
    function () {
        $('.banner_pic1')
        .stop().hide(0);
        $('.main_nav').css('opacity','1');
        $('.top_banner1').children('img').css('opacity','1');
    }
);
    $('.banner_pic1').hover(
        function () {
            $('.banner_pic1')
            .stop().show();
            $('.main_nav').css('opacity','0');
            $('.top_banner1').children('img').css('opacity','0');
        },
        function () {
            $('.banner_pic1')
            .stop().hide();
            $('.main_nav').css('opacity','1');
            $('.top_banner1').children('img').css('opacity','1');
        }
    );
// top_nav 最右侧隐藏
$('.top_nav .recomand').hover(
    function () {
        $('.top_nav .rec_pic')
        .stop().show();
        $('.main_nav').css('opacity','0');
    },
    function () {
        $('.top_nav .rec_pic')
        .stop().hide();
        $('.main_nav').css('opacity','1');
    }
);
$('.top_nav .rec_pic').hover(
    function () {
        $('.top_nav .rec_pic')
        .stop().show();
        $('.main_nav').css('opacity','0');
    },
    function () {
        $('.top_nav .rec_pic')
        .stop().hide();
        $('.main_nav').css('opacity','1');
    }
);

// 首页导航

$('.nav a').mouseenter(function () {
    var num = $(this).index();
    $('.nav p').eq(num).fadeIn(500, 'linear');
    $('.nav span').eq(num).hide();
    $('.nav i').eq(num).show();
    $('.nav .span1').hide();


})
$('.nav a').mouseleave(function () {
    var num = $(this).index();
    $('.nav p').eq(num).fadeOut(500, 'linear');
    $('.nav span').eq(num).show();
    $('.nav i').eq(num).hide();
    $('.nav .span1').hide();

})

// 周免式神

var index = 4;
var move = -150;

$('.r_btn').click(function () {
    if (index == 4) {
        move = -155 * index;
        $('.free_hero ul').css('left', move);
    }
    index++;

    if (index >= 13) {
        index = 4;
        // $('.free_hero ul').css('left',0);
    }
    move = -155 * index;
    $('.free_hero ul').css('left', move);
})



$('.l_btn').click(function () {

    if (index == 4) {
        move = -155 * index;
        $('.free_hero ul').css('left', move);
    }
    index--;

    if (index < 0) {
        index = 8;
        // $('.free_hero ul').css('left',0);
    }
    move = -155 * index;
    $('.free_hero ul').css('left', move);
})


// 式神列表
var _index = 0;
// 鼠标进入
$('.hr_box .hr_tab a').mouseenter(function () {
    $(this).addClass('a_bg').siblings().removeClass('a_bg');
    $('.hr_box .hr_tab a').eq(_index).addClass('a_bg');
})
// 鼠标离开
$('.hr_box .hr_tab a').mouseleave(function () {
    $('.hr_box .hr_tab a').removeClass('a_bg');
    $('.hr_box .hr_tab a').eq(_index).addClass('a_bg');
})
// 鼠标点击
$('.hr_tab a').click(function () {

    $('.hr_search input').val('');
    $('.hero_all ul').show();
    $('.hero_all .selet_fal').hide();


    $(this).addClass('a_bg');
    var num = $(this).index();
    _index = num;
    if (num == 0) {
        $('.hero_all li').show();
        $('.hr_box .hr_tab a').eq(num).addClass('a_bg').siblings().removeClass('a_bg');
    } if (num == 1) {
        $('.hero_all ul li').hide();
        $('.hero_all ul').find('.wu').show();
        $('.hr_box .hr_tab a').eq(num).addClass('a_bg').siblings().removeClass('a_bg');
    } if (num == 2) {
        $('.hero_all ul li').hide();
        $('.hero_all ul').find('.shi').show();
        $('.hr_box .hr_tab a').eq(num).addClass('a_bg').siblings().removeClass('a_bg');
    } if (num == 3) {
        $('.hero_all ul li').hide();
        $('.hero_all ul').find('.ren').show();
        $('.hr_box .hr_tab a').eq(num).addClass('a_bg').siblings().removeClass('a_bg');
    } if (num == 4) {
        $('.hero_all ul li').hide();
        $('.hero_all ul').find('.she').show();
        $('.hr_box .hr_tab a').eq(num).addClass('a_bg').siblings().removeClass('a_bg');
    } if (num == 5) {
        $('.hero_all ul li').hide();
        $('.hero_all ul').find('.shou').show();
        $('.hr_box .hr_tab a').eq(num).addClass('a_bg').siblings().removeClass('a_bg');
    } if (num == 6) {
        $('.hero_all ul li').hide();
        $('.hero_all ul').find('.zhu').show();
        $('.hr_box .hr_tab a').eq(num).addClass('a_bg').siblings().removeClass('a_bg');
    }

})

// 搜索框
$('.hr_search a').click(function () {
    var flag = true;
    var a = $('.hr_search input').val();
    for (var i = 0; i < $('.hero_all ul p').length; i++) {
        var b = $('.hero_all ul p').eq(i).text();
        if (a == b) {

            $('.hero_all ul li').hide();
            $('.hero_all .selet_fal').css('display', 'none');
            $('.hero_all li').eq(i).show();
            flag = false;
            break;

        }

    }
    if (flag) {
        $('.hero_all ul').hide();
        $('.hero_all .selet_fal').show();

    }
})
