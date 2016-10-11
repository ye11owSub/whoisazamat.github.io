$(document).ready(function () {

    // $('#event').click(function () {
    //     $(#event).removeClass("event-active");
    //     $(this).addClass("event-active");
    // });

    function makeActive() {
        concole.log('1');
    }

    $('.owl-carousel').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        margin: 10
        // mouseDrag: false
        // nav: true,
        // navText: [
        //     "<i class='icon-chevron-left icon-white'><</i>",
        //     "<i class='icon-chevron-right icon-white'>></i>"
        // ]
    });
    // $(".next_button").click(function(){
    //     $('.owl-carousel').trigger("owl-carousel.next");
    // });
    // $(".prev_button").click(function(){
    //     owl.trigger("owl-carousel.prev");
    // });

});