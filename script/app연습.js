$(function () {

  //경기일정
  $('.slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  //라이온즈티비 (경기일정이랑 비슷함)
  $('.sec4slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });




  //submenu
  $("header ul,.h_inner ul li,nav").on({
    mouseenter: function () {
      $("nav").stop(true).fadeIn()
    },
    mouseleave: function () {
      $("nav").stop(true).fadeOut()
    }
  });


  //menu scroll background-color
  $("header").each(function(){

    let win = $(window); // 창을 제이쿼리 객체화시켜서 담아줌
    let header = $(this); //header 객체화를 해서 변수에 저장

    let spot = header.offset().top;
    console.log(spot);

    let res = outerWidth;
    console.log(res);


    // 이건 클래스가 적용만 됨

    win.scroll(function(){
      if(win.scrollTop() >0 ){
        header.addClass("fix")
      }else {
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

    if($(tog).hasClass("tog_r")){
      tog_p.text("EN")
    } else{
      tog_p.text("KR")
    }
  });




  //hamburger bar
  $("header .h_inner .ham, #hammenu").on({
    mouseenter: function () {
      $("#hammenu").stop(true).fadeIn()
    },
    mouseleave: function () {
      $("#hammenu").stop(true).fadeOut()
    }
  });






});