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
    $('.percentage').html(++percent + '%');
}, 10);

function endLoading(){
    clearInterval(loadingInterval);
    $('.pageWrapper').show();
    $('.loadingScreen').fadeOut();
}