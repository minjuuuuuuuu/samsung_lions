$(function () {

        $("header ul,.h_inner ul li,nav").on({
            mouseenter: function () {
                $("nav").stop(true).fadeIn()
            },
            mouseleave: function () {
                $("nav").stop(true).fadeOut()
            }
        });

        //menu scroll background-color
        $("header").each(function () {

            let win = $(window); // 창을 제이쿼리 객체화시켜서 담아줌
            let header = $(this); //header 객체화를 해서 변수에 저장

            let spot = header.offset().top;
            console.log(spot);

            let res = outerWidth;
            console.log(res);


            // 이건 클래스가 적용만 됨

            win.scroll(function () {
                if (win.scrollTop() > spot) {
                    header.addClass("fix")
                } else if (res <= 767 && res >= 200) {
                    header.removeClass("fix")
                } else {
                    header.removeClass("fix")
                }
            });

            //resize event 를 줘야함 window에


        });


        let tog = $("header .right .btn .tog")
        let tog_p = $("header .right .btn .tog p")

        //toggle
        $("header .right .btn .tog").on('click', function () {
            $("header .right .btn").toggleClass("bg")
            $("header .right .btn .tog").toggleClass("tog_r")

            if ($(tog).hasClass("tog_r")) {
                tog_p.text("EN")
            } else {
                tog_p.text("KR")
            }
        });


          //hamburger bar
    $(".ham").click(function(){
    $(".ham").toggleClass("open");

    if($(".ham").hasClass("open")){
      $("#hammenu").fadeIn();
      $(".top").stop(true).css({
        transform:'translateY(15px) rotate(45deg)'
      });
      $(".mid").animate({opacity:'0'});
      $(".btm").stop(true).css({
        transform:"translateY(-15px)  rotate(-405deg)"
      })
    } else{
      $("#hammenu").fadeOut();
      $(".top").stop(true).css({
        transform:'translateY(0) rotate(0)'
      });
      $(".mid").animate({opacity:'1'});
      $(".btm").stop(true).css({
        transform:"translateY(0) rotate(0)"
      })
    }

  });



});