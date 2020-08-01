$(document).ready(()=>{
    const $window = $(window);
    const $contactModal = $(".modal_container");
    const $contactBtn = $(".contact_btn");
    const $close = $(".close");
    const $navScroll = $("#navScroll");
    const $goTop = $(".go_top");
    const $sotong = $(".sotonghotline");
    const $sotongOn = $(".sotong");
    
    // contact 
    $contactBtn.on("click", ()=>{
        $contactModal.addClass("on");
    });
    $close.on("click",()=>{
        $contactModal.removeClass("on");
    });
    // contact 종료

    // navScrollEvent
    $window.scroll(()=>{
       const top = $window.scrollTop();
       if(top > 100) {
            $navScroll.addClass("on");
        } else {
            $navScroll.removeClass("on");
        }
    });
    // navScrollEvent 종료

    // topBtn
    $window.on("scroll", ()=>{
        let scroll = $window.scrollTop();
        if(scroll > 500) {
            $goTop.fadeIn();
        } else {
            $goTop.fadeOut();
        }
    });

    $goTop.on('click', ()=>{
        $('html, body').animate({
            scrollTop: 0
          }, 500)
      })
 
    // topBtn 종료

    // animation scroll
    $window.scroll(()=>{
        const sotong = $sotong.offset().top;
        var text02 = document.getElementById("sotongTitle");
        if($window.scrollTop() < sotong) {
            $sotongOn.addClass("act");
            var typewriter = new Typewriter(text02, {
                loop: false,
                delay: 150
            });
            typewriter.typeString('소통핫라인<br/>클론페이지')
            .start(); 
        }
    })
    // animation scroll 종료

    // titleTyping
    var text = document.getElementById("genohcoTitle");
    var text02 = document.getElementById("sotongTitle");
    
    var typewriter = new Typewriter(text, {
        loop: false,
        delay: 150
    });

    typewriter.typeString('제노코<br/>클론페이지')
        .start(); 
})