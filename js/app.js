$(document).ready(()=>{
    $contactModal = $(".modal_container");
    $contactBtn = $(".contact_btn");
    $close = $(".close");
    
    $contactBtn.on("click", ()=>{
        $contactModal.addClass("on");
    });

    $close.on("click",()=>{
        $contactModal.removeClass("on");
    });
})