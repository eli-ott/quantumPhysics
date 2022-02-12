//we define the height page when it's ready
$(() => {
    window.contentHeight =  parseInt($("footer").css("top")) - $("footer").height();
});

//whe change the width of the div#progress when the user scroll
$(window).on("scroll", () => {
    let pageYOffsset = window.pageYOffset;
    $("#progress").css("width", `${(pageYOffsset * 100) / contentHeight}%`);
});