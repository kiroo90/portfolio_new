$(document).ready(()=>{
    const $contactModal = $(".modal_container");
    const $contactBtn = $(".contact_btn");
    const $close = $(".close");
    const $navScroll = $("#navScroll");
    const $goTop = $(".go_top");
    

    // contact 
    $contactBtn.on("click", ()=>{
        $contactModal.addClass("on");
    });
    $close.on("click",()=>{
        $contactModal.removeClass("on");
    });
    // contact 종료

    // navScrollEvent
    $(window).scroll(()=>{
       const top = $(window).scrollTop();
       if(top > 100) {
            $navScroll.addClass("on");
        } else {
            $navScroll.removeClass("on");
        }
    });
    // navScrollEvent 종료

    // topBtn
    $(window).on("scroll", ()=>{
        let scroll = $(window).scrollTop();
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

})