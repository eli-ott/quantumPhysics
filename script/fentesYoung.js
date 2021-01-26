let circleIndex = 0;
$("#startAnimation").on("click", () => {
    let electronsDisplay = setInterval(() => {
        circleIndex == $(".electrons").length ? clearInterval(electronsDisplay): circleIndex++;; 
        $(`#circle${circleIndex}`).css("display", "unset");
    }, 50);
});