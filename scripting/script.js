$(document).ready(() => {
    $(".burger-nav").on("click", ()=> {
        $("header nav ul").toggleClass("open");
    });

    $('.banner').hide();
    $('.banner').fadeIn(2000);
});