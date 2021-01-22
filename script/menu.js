//we define the position of the top and bottom line of the burger icon
let topY = 6;
let bottomY = 18;
let x2 = 23;

$("#burger").on("click", () => {
    if($("#burger").attr("class") != "display"){
        $("#burger").attr("class", "display");

        //we decrease the y2 position of the top line
        let topYInterval = setInterval(() => {
            topY == 18 ? clearInterval(topYInterval): topY++;
            $("#topLine").attr("y2", topY);
        }, 25);

        //we decrease the y2 position of the bottom line
        let bottomYInterval = setInterval(() => {
            bottomY == 6 ? clearInterval(bottomYInterval): bottomY--;
            $("#bottomLine").attr("y2", bottomY);
        }, 25);

        //we slowly decrease the x position of the top and bottom line
        let x2Interval = setInterval(() => {
            //we change the x2 position of the bottom and top line
            x2 == 16 ? clearInterval(x2Interval): x2--;
            $("#bottomLine").attr("x2", x2);
            $("#topLine").attr("x2", x2);
        }, 35);

        //we remove the middle line
        $("#middleLine").fadeOut(200);

        //we change the size of the background menu and it's border radius
        $("#menuCircle").css({width: "100%", height: "100%", borderRadius: 0});

        //we make the button appear
        setTimeout(() => {
            $("div#linksParent a").css("opacity", "1");
        }, 500);
    } else{
        $("#burger").attr("class", "retract");

        //we slowly increase the y2 position of the top line
        let topYInterval = setInterval(() => {
            topY == 6 ? clearInterval(topYInterval): topY--;
            $("#topLine").attr("y2", topY);
        }, 25);

        //we slowly increase the y2 position of the bottom line
        let bottomYInterval = setInterval(() => {
            bottomY == 18 ? clearInterval(bottomYInterval): bottomY++;
            $("#bottomLine").attr("y2", bottomY);
        }, 25);

        //we change the x2 position of the bottom and top line
        let x2Interval = setInterval(() => {
            x2 == 23 ? clearInterval(x2Interval): x2++;
            $("#bottomLine").attr("x2", x2);
            $("#topLine").attr("x2", x2);
        }, 35);

        //we put back the middle line
        $("#middleLine").fadeIn(200)

        //we change the size of the background menu and it's border radius
        $("#menuCircle").css({width: 0, height: 0, borderRadius: "10vh 0 10vh 50vh"});

        //we make the button disapeaer
            $("div#linksParent a").css("opacity", "0");
    }
});