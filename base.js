$(function () {

    var bw = $(window).width;

    if (bw <= 910) {

        /* 햄버거메뉴 클릭 */
        $('.mnb button').click(function () {

            $(this).fadeOut();
            $('.mnb_inner').animate({
                marginRight: 0
            }, 1000);

        })

        /* 닫기 버튼 클릭 */
        $('.exit').click(function () {

            $('.mnb button').fadeIn();
            $('.mnb_inner').animate({
                marginRight: '-60%'
            }, 1000);

        })


    }
    else {
        /* 햄버거메뉴 클릭 */
        $('.mnb button').click(function () {

            $(this).fadeOut();
            $('.mnb_inner').animate({
                marginRight: 0
            }, 1000);

        })

        /* 닫기 버튼 클릭 */
        $('.exit').click(function () {

            $('.mnb button').fadeIn();
            $('.mnb_inner').animate({
                marginRight: '-40%'
            }, 1000);

        })
    }
    $('.dynamic').html(function(i, html) {
        var chars = $.trim(html).split("");
      
        return '<span>' + chars.join('</span><span>') + '</span>';
    });
});

