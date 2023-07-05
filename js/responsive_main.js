$(function () {
    var window_size = $(window).width(),
        mobile_new = 2,
        mobile_message = 4,
        mobile_card = 4,
        tablet_new = 3,
        tablet_message = 6,
        tablet_card = 6,
        pc_new = 5,
        pc_message = 5,
        pc_card = 5,
        plus_new = $('.plus_button'),
        plus_message = $('.plus_button2'),
        plus_card = $('.plus_button3'),
        minus_new = $('.minus_button'),
        minus_message = $('.minus_button2'),
        minus_card = $('.minus_button3'),
        directory_new0 = $('.new_books'),
        directory_message0 = $('.message_bible'),
        directory_card0 = $('.card_news'),
        directory_new = $('.new_books ul'),
        directory_message = $('.message_bible ul'),
        directory_card = $('.card_news ul');

    function minus(plus_button, minus_button, hide_area, number) {
        plus_button.css({'display': 'inline-block'})
        minus_button.css({'display': 'none'})
        hide_area.find('ul').hide()
        hide_area.find('ul:lt(' + number + ')').show()
    }

    function plus(minus_button, picture, directory, plus_button) {
        minus_button.css({'display': 'inline-block'})
        // mobile_new = (b + d <= c.length) ? b + d : c.length;
        // $('.new_books').find('ul:lt(' + mobile_new + ')').show()
        if (picture === directory.length) {
            plus_button.css({'display': 'none'})
        }
    }

    if (window_size < 768) {
        $('.new_books ul:lt(' + 2 + ')').show()
        $('.message_bible ul:lt(' + 4 + ')').show()
        $('.card_news ul:lt(' + 4 + ')').show()

        plus_new.click(function () {
            mobile_new = (mobile_new + 2 <= directory_new.length) ? mobile_new + 2 : directory_new.length;
            directory_new0.find('ul:lt(' + mobile_new + ')').show()
            plus(minus_new, mobile_new, directory_new, plus_new)
        })

        minus_new.on('click', function () {
            minus(plus_new, minus_new, directory_new0, 2)
            mobile_new = 2;
        })

        plus_message.click(function () {
            mobile_message = (mobile_message + 2 <= directory_message.length) ? mobile_message + 2 : directory_message.length;
            $('.message_bible ul:lt(' + mobile_message + ')').show()
            plus(minus_message, mobile_message, directory_message, plus_message)
        })

        minus_message.on('click', function () {
            minus(plus_message, minus_message, directory_message0, 4)
            mobile_message = 4;
        })

        plus_card.click(function () {
            mobile_card = (mobile_card + 4 <= directory_card.length) ? mobile_card + 4 : directory_card.length;
            $('.card_news ul:lt(' + mobile_card + ')').show()
            plus(minus_card, mobile_card, directory_card, plus_card)
        })

        minus_card.click(function () {
            minus(plus_card, minus_card, directory_card0, 4)
            mobile_card = 4;
        })
    }

    else if (window_size < 1025) {
        $('.new_books ul:lt(' + 3 + ')').show()
        $('.card_news ul:lt(' + 6 + ')').show()
        $('.message_bible ul:lt(' + 6 + ')').show()

        plus_new.click(function () {
            tablet_new = (tablet_new + 3 <= directory_new.length) ? tablet_new + 3 : directory_new.length;
            $('.new_books ul:lt(' + tablet_new + ')').show()
            plus(minus_new, tablet_new, directory_new, plus_new)
        })

        minus_new.click(function () {
            minus(plus_new, minus_new, directory_new0, 3)
            tablet_new = 3;
        })

        plus_message.click(function () {
            tablet_message = (tablet_message + 3 <= directory_message.length) ? tablet_message + 3 : directory_message.length;
            $('.message_bible ul:lt(' + tablet_message + ')').show()
            plus(minus_message, tablet_message, directory_message, plus_message)
        })

        minus_message.click(function () {
            minus(plus_message, minus_message, directory_message0, 6)
            tablet_message = 6;
        })

        plus_card.click(function () {
            tablet_card = (tablet_card + 6 <= directory_card.length) ? tablet_card + 6 : directory_card.length;
            $('.card_news ul:lt(' + tablet_card + ')').show()
            plus(minus_card, tablet_card, directory_card, plus_card)
        })

        minus_card.click(function () {
            minus(plus_card, minus_card, directory_card0, 6)
            tablet_card = 6;
        })
    }

    else {
        $('.new_books ul:lt(' + 5 + ')').show()
        $('.message_bible ul:lt(' + 5 + ')').show()
        $('.card_news ul:lt(' + 5 + ')').show()

        plus_new.click(function () {
            pc_new = (pc_new + 5 <= directory_new.length) ? pc_new + 5 : directory_new.length;
            $('.new_books ul:lt(' + pc_new + ')').show()
            plus(minus_new, pc_new, directory_new, plus_new)
        })

        minus_new.click(function () {
            minus(plus_new, minus_new, directory_new0, 5)
            pc_new = 5;
        })

        plus_message.click(function () {
            pc_message = (pc_message + 5 <= directory_message.length) ? pc_message + 5 : directory_message.length;
            $('.message_bible ul:lt(' + pc_message + ')').show()
            plus(minus_message, pc_message, directory_message, plus_message)
        })

        minus_message.click(function () {
            minus(plus_message, minus_message, directory_message0, 5)
            pc_message = 5;
        })

        plus_card.click(function () {
            pc_card = (pc_card + 5 <= directory_card.length) ? pc_card + 5 : directory_card.length;
            $('.card_news ul:lt(' + pc_card + ')').show()
            plus(minus_card, pc_card, directory_card, plus_card)
        })

        minus_card.click(function () {
            minus(plus_card, minus_card, directory_card0, 5)
            pc_card = 5;
        })
    }
});


$(function () {
    swiper = new Swiper('.swiper1', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        loop: true,
        speed: 1000,
        autoplay: 4000,
        autoplayDisableOnInteraction: false
    })
})

$(function () {
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

var slideIndex = 1
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

//팝업창
// 쿠키 가져오기
var getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name) !== -1) return c.substring(name.length, c.length);
    }
    return "";
}

// 24시간 기준 쿠키 설정하기
var setCookie = function (cname, cvalue, exdays) {
    var todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + todayDate.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

var couponClose = function () {
    if ($("input[name='chkbox']").is(":checked") === true) {
        setCookie("close", "Y", 1);   //기간( ex. 1은 하루, 7은 일주일)
    }
    $("#pop").fadeOut('slow');
}

$(document).ready(function () {
    cookiedata = document.cookie;
    // console.log(cookiedata);
    if (cookiedata.indexOf("close=Y") < 0) {
        $("#pop").fadeIn(1200);
    } else {
        $("#pop").fadeOut('slow');
    }
    $("#close").click(function () {
        couponClose();
    });
    $(".popup_dimmed").click(function () {
        couponClose();
    });
});

