$(function () {

    var bw = $(window).width;

    if (bw <= 910) {

        /* �ܹ��Ÿ޴� Ŭ�� */
        $('.mnb button').click(function () {

            $(this).fadeOut();
            $('.mnb_inner').animate({
                marginRight: 0
            }, 1000);

        })

        /* �ݱ� ��ư Ŭ�� */
        $('.exit').click(function () {

            $('.mnb button').fadeIn();
            $('.mnb_inner').animate({
                marginRight: '-60%'
            }, 1000);

        })


    }
    else {
        /* �ܹ��Ÿ޴� Ŭ�� */
        $('.mnb button').click(function () {

            $(this).fadeOut();
            $('.mnb_inner').animate({
                marginRight: 0
            }, 1000);

        })

        /* �ݱ� ��ư Ŭ�� */
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

