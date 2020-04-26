$("#openSB").click(function (e) { 
    e.preventDefault();
    $("#sidebar").css("margin-left", "0");
});

$("#closeSB").click(function (e) { 
    e.preventDefault();
    $("#sidebar").css("margin-left", "-250px");
});

// $(document).ready(function () {
    var WWidth=screen.width;
    console.log(WWidth);
    if (WWidth<=767) {
        $(".curDevice1").addClass("selected");
        $(".curDevice2").removeClass("selected");
        $(".curDevice3").removeClass("selected");
    }
    if (WWidth>767 && WWidth<1000) {
        $(".curDevice2").addClass("selected");
        $(".curDevice1").removeClass("selected");
        $(".curDevice3").removeClass("selected");
    }
    if (WWidth>=1000) {
        $(".curDevice3").addClass("selected");
        $(".curDevice2").removeClass("selected");
        $(".curDevice1").removeClass("selected");
    }
// });