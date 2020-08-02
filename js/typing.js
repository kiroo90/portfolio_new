$(document).ready(()=>{
    const $window = $(window);
    const $visibility = $(".info");
    const $sotongOn = $(".sotong");
    const $sotongBtn = $(".sotongBtn");
    const $vibeOn = $(".vibeOn");
    const $vibeBtn = $(".vibeBtn");
    const $mibsOn = $(".mibsOn");
    const $mibsBtn = $(".mibsBtn");
    let control = 0;

        // titleTyping function
    function genohco() {
        const text = document.getElementById("genohcoTitle");
    
        const typewriter = new Typewriter(text, {
            loop: false,
            delay: 130
        });
    
        typewriter.typeString('제노코<br/>클론페이지')
            .start();     
    }
    genohco();
    function sotongType() {
        const text = document.getElementById("sotongTitle");
        const typewriter = new Typewriter(text, {
            loop: false,
            delay: 130

        });
        typewriter.typeString('소통핫라인<br/>클론페이지')
        .start();
    }
    function vibeType() {
        const text = document.getElementById("vibeTitle");
        const typewriter = new Typewriter(text, {
            loop: false,
            delay: 130

        });
        typewriter.typeString('VIBE<br/>리뉴얼페이지')
        .start();
    }
    function mibsType() {
        const text = document.getElementById("mibsTitle");
        const typewriter = new Typewriter(text, {
            loop: false,
            delay: 130

        });
        typewriter.typeString('MIBS<br/>개인페이지')
        .start();
    }

    // titleTyping function 종료

    // animation scroll
    $window.scroll(()=>{
        const scroll = $window.scrollTop();
        if(scroll > 380) {
            $sotongOn.addClass("act");
            $sotongBtn.addClass("actBtn");
            $visibility.removeClass("sotong_h");
            if(control === 0) {
                sotongType();
                control++; // 컨트롤의 숫자로 실행하여 재반복을 막음
            }
        }
        if(scroll > 1300) {
            $vibeOn.addClass("act");
            $vibeBtn.addClass("actBtn");
            $visibility.removeClass("vibe_h");
            if(control === 1) {
                vibeType();
                control++;
            }
        }
        if(scroll > 2200) {
            $mibsOn.addClass("act");
            $mibsBtn.addClass("actBtn");
            $visibility.removeClass("mibs_h");
            if(control === 2) {
                mibsType();
                control++;
            }
        }
    })

    // 모바일 대응 scroll ($(document).ready에서 실행되기 때문에 로드시 화면크기를 기준)
    if($(window).width() >= 320 && $(window).width() <= 700) {
        $window.scroll(()=>{
            const scroll = $window.scrollTop();
            if(scroll > 400) {
                $sotongOn.addClass("act");
                $sotongBtn.addClass("actBtn");
                $visibility.removeClass("sotong_h");
                if(control === 0) {
                    sotongType();
                    control++; // 컨트롤의 숫자로 실행하여 재반복을 막음
                }
            }
            if(scroll > 800) {
                $vibeOn.addClass("act");
                $vibeBtn.addClass("actBtn");
                $visibility.removeClass("vibe_h");
                if(control === 1) {
                    vibeType();
                    control++;
                }
            }
            if(scroll > 1400) {
                $mibsOn.addClass("act");
                $mibsBtn.addClass("actBtn");
                $visibility.removeClass("mibs_h");
                if(control === 2) {
                    mibsType();
                    control++;
                }
            }
            console.log(scroll)
        })
    }
    // 모바일 대응 scroll 종료
    // animation scroll 종료
})