$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".topBar").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".topBar").removeClass("active");
    }
});
const loadingInterval = setInterval(function(){
    let percent = parseInt($('.percentage').html().replace('%', ''));
    if(percent == 100) {
        endLoading();
        return;
    }
    const add =  Math.floor(Math.random()*10+1);
    const res = percent+add;
    $('.percentage').html(res > 100? 100+'%': res + '%');
}, 60);

function endLoading(){
    clearInterval(loadingInterval);

            var wow = new WOW();
    
    setTimeout(function(){
        $('.pageWrapper').css('display', 'block');
        $('.loadingScreen').fadeOut();
        wow.init();
    }, 100);
}