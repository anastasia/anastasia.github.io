$(document).ready(() => {
    $("#sidebar").hide();
    $(".main-content").css({"width": "100%"});
    $(".header").hide();
    $("#mode-switch").hide();
    $(".carousel-inner").click(()=> {
        console.log("carousel item click");
        $(".carousel").carousel('next');
    })
});
