document.addEventListener("DOMContentLoaded", function () {
    $(".navbar-nav .nav-link").on("click", function () {
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $('.carousel').carousel({
        interval: 1500
    })
});