function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }

    $(function () {
        //모바일, 태블릿 햄버거 메뉴
        $('.hamburger').on('click', function () {
            close()
            $('.hamburger').css('display', 'none')
            $('.cross').css('display', 'block')
            $('.hamburger_whole_menu').animate({marginLeft: 0}, 300)
        })

        function cross() {
            $('.hamburger_whole_menu').animate({marginLeft: '-100%'}, 300)
            $('.hamburger').css('display', 'block')
            $('.cross').css('display', 'none')
        }

        $('.cross').click(function () {
            cross();
        })

        //PC 메뉴
        let menu_bar = $('#total_menu');
        menu_bar.on('mouseenter focus', function () {
            $('.menu_box').stop().slideDown('fast')
        })
        menu_bar.mouseleave(function () {
            $('#menu_box').stop().slideUp('fast')
        })

        //검색 메뉴 버튼
        $(".book_search_menu").on('click focus', function (e) {
            e.preventDefault()
            cross()
            $('.search_input').show('fast')
            $('.typing_area').focus()
            $('.book_search_menu').hide('slow')
        })

        function close() {
            $('.search_input').hide('fast')
            $('.book_search_menu').show('slow')
            $('.typing_area').val('')
        }

        $('.close_search').on('click', function () {
            close()
        })

        $('.search_btn').on('click', close(), function () {
            var typing = $(this).siblings().children('input').val();
            console.log(typing)
            if (!typing) {
                alert('검색어를 입력해주세요')
                $(this).siblings('input').focus()
            } else {
                alert('검색 기능은 구현 중입니다.' + ' 감사합니다.')
                close();
            }
        })
    });
}

