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
        loop: true,
        // margin: 10,
        mouseDrag: false,
        nav: true
        // navText: [
        //     "<i class='icon-chevron-left'></i>",
        //     "<i class='icon-chevron-right'></i>"
        // ]
    });
    $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');

    // $(".item").click(function() {
    //     $(".item").removeClass("white");
    //     $(this).toggleClass("white");
    // })

});