// 많은 이미지를 제어하기 위해서 window load방식을 사용

$(window).on("load",()=>{

    // design img rendam
    const listLength = $(".item_box").length;

    $(listLength).each(()=>{

        const list = $(".item_box");

        list.sort(()=>{
            let temp = parseInt(Math.random() * listLength);
            let temp2 = parseInt(Math.random() * listLength);
            return temp-temp2;
        }).appendTo('.masonry_img');
    });
    // design img rendam end

    // masonry media
    function masonryMedia() {
        if(($(window).width() >= 320 && $(window).width() <= 450)) {
            $(".masonry_img").masonry({
                columnWidth: 140,
                itemSelector: '.item_box',
                gutter: 12,
                fitWidth: true
            });
        } else if(($(window).width() >= 450 && $(window).width() <= 700)) {
            $(".masonry_img").masonry({
                columnWidth: 160,
                itemSelector: '.item_box',
                gutter: 12,
                fitWidth: true
            });
        } else if(($(window).width() >= 700 && $(window).width() <= 1000)) {
            $(".masonry_img").masonry({
                columnWidth: 240,
                itemSelector: '.item_box',
                gutter: 12,
                fitWidth: true
            });
        } else if(($(window).width() >= 1000 && $(window).width() <= 1940)) {
            $(".masonry_img").masonry({
                columnWidth: 320,
                itemSelector: '.item_box',
                gutter: 20,
                fitWidth: true
            });
        };
    };
    masonryMedia();

    $(window).resize(()=>{
       setTimeout(()=>{
           masonryMedia();
       },200);
    });

    // masonry media end

    //scrollReveal
    ScrollReveal().reveal('.item_box' , {
        origin: "top",
        duration: 800,
        distance: "25rem",
        delay: 100,
    });
    //scrollReveal end

   // masonry filter
    const btns = $(".btns button");
    const item = $(".item_box");
    btns.on("click", (e) =>{
      var category = e.currentTarget.dataset.id;
      btns.removeClass("on");
      $(e.currentTarget).addClass("on");
      if (category === "all") {
        ScrollReveal().clean(".item_box"); 
        item.fadeIn();
        masonryMedia();
      } else {
        ScrollReveal().clean(".item_box"); 
        item.hide().filter("[data-item = " + category + "]").fadeIn(300);
        masonryMedia();
    }
    });
    // masonry filter end
});
