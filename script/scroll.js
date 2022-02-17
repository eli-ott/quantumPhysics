let contentHeight;

//we define the height of page when it's ready
$(() => {
    //we define the footer position (yes it's strange)
    $("footer").css("top", parseInt($("#content").css("top")) + $("#content").height() + 150)
    
    contentHeight =  parseInt($("footer").css("top")) - $("footer").height();
});

//whe change the width of the div#progress when the user scroll
$(window).on("scroll", () => {
    let pageYOffsset = window.pageYOffset;
    $("#progress").css("width", `${(pageYOffsset * 100) / contentHeight}%`);
});

console.log("for anyone who resize the window and see that the header is not in a great place it's bacause the header place is calculated when the page is loading so it takes the first screen size not the resize screen size. XoXo, Eliott");