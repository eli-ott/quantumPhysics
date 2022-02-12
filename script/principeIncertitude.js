//changing the range inputs when the value changes
$("#position").on("change", () => {
    $("#speed").val(100 - $("#position").val());
});
$("#speed").on('change', () => {
    $("#position").val(100 - $("#speed").val());
});

//changing the range inputs when the mouse is moving
$("#position").on("mousemove", () => {
    $("#speed").val(100 - $("#position").val());
});
$("#speed").on('mousemove', () => {
    $("#position").val(100 - $("#speed").val());
});