$(document).ready(() => {
    $(".burger-nav").on("click", ()=> {
        $("header nav ul").toggleClass("open");
    });

    $('.banner').hide();
    $('.banner').fadeIn(4000);
    $('.slide').slideUp(1);
    $('.slide').slideDown(4000);

});