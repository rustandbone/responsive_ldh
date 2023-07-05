$(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        loop: true,
        speed: 700,
        centeredSlides: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false
    })

    //영상자료 메뉴바
    $('#theology').on('click', function (e) {
        e.preventDefault();
        $('.main_section_title h2 a').removeClass('on');
        $(this).addClass('on')
        $('.theology').css('display', 'block')
        $('.saint').css('display', 'none')
        $('.blanket').css('display', 'none')
    })

    $('#saint').on('click', function (e) {
        e.preventDefault();
        $('.main_section_title h2 a').removeClass('on')
        $(this).addClass('on')
        $('.theology').css('display', 'none')
        $('.saint').css('display', 'block')
        $('.blanket').css('display', 'none')
    })

    $('#blanket').on('click', function (e) {
        e.preventDefault();
        $('.main_section_title h2 a').removeClass('on')
        $(this).addClass('on')
        $('.theology').css('display', 'none')
        $('.saint').css('display', 'none')
        $('.blanket').css('display', 'block')
    })

    //비디오 팝업
    $('.video_popup').on('click', function () {
        let path = $(this).attr('href')
        $(path).show()
        $(this).siblings('.dim').show()
    })

    $('.close').on('click', function () {
        let embed = $(this).parent('.inner'); //동영상 코드
        $(this).parent().parent().siblings('.dim').hide();
        $(this).parent().parent('.play_video').hide().append(embed)
    })

    $('.dim').on('click', function () {
        let embed = $(this).siblings('.play_video').find('.inner'); //동영상 코드
        $(this).hide();
        $(this).siblings('.play_video').hide().append(embed)
    })
})