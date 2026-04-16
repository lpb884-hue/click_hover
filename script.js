$(document).ready(function () {
    // Start the gradient flow as soon as the page loads
    $("body").addClass("gradient-flow");

    // Tag sub-pages so each can have its own gradient palette
    var path = window.location.pathname;
    if (path.indexOf("page1.html") !== -1) {
        $("body").addClass("page-one");
    } else if (path.indexOf("page2.html") !== -1) {
        $("body").addClass("page-two");
    } else if (path.indexOf("page3.html") !== -1) {
        $("body").addClass("page-three");
    } else if (path.indexOf("page4.html") !== -1) {
        $("body").addClass("page-four");
    }

    // Toggle messages on button click
    $("button").on("click", function () {
        const messageOne = $(this).next("p");
        const messageTwo = messageOne.next("p");

        messageOne.toggleClass("hidden");
        messageTwo.toggleClass("hidden");

        // Small click pulse on the button
        $(this).addClass("btn-pulse");
        setTimeout(() => $(this).removeClass("btn-pulse"), 200);
    });

    // Scroll-based subtle tilt / shift of the content instead of an alert
    $(window).on("scroll", function () {
        const scrollY = $(this).scrollTop();
        const tilt = Math.min(scrollY / 400, 0.08); // clamp
        const shift = Math.min(scrollY / 10, 40);

        $(".page-shell").css(
            "transform",
            "translateY(" + (-shift) + "px) rotateX(" + (tilt * 20) + "deg)"
        );
    });
});