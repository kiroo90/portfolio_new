// 많은 이미지를 제어하기 위해서 window load방식을 사용

$(window).on("load", ()=>{
    $('.slide_item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        autoplay: true,
        dots:true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots:false  //아이패드에서는 dot이 필요 X
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false //모바일에서는 dot이 필요 X
                }
            }
        ]
    });
})