//we define the position of the top and bottom line of the burger icon
let topY = 6;
let bottomY = 18;

$("#burger").on("click", () => {
    if($("#burger").attr("class") != "display"){
        $("#burger").attr("class", "display");

        //we slowly change the position of the top and bottom line
        let topYInterval = setInterval(() => {
            topY == 18 ? clearInterval(topYInterval): topY++;
            $("#topLine").attr("x2", "17");
            $("#topLine").attr("y2", topY);
        }, 15);
        let bottomYInterval = setInterval(() => {
            bottomY == 6 ? clearInterval(bottomYInterval): bottomY--;
            $("#bottomLine").attr("x2", "17");
            $("#bottomLine").attr("y2", bottomY);
        }, 15);
    }
});