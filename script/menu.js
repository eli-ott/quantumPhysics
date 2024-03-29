//we define the position of the top and bottom line of the burger icon
let topY = 6;
let bottomY = 18;
let x2 = 23;

let canAnimateAtom = false;

$("#burger").on("click", () => {
    if ($("#burger").attr("class") != "display") {
        //make the possibility to animate the atom when hovered
        canAnimateAtom = true;

        //we change the background color of the themeIcon and the menuIcon
        $("#burger").css("background-color", "#59acff");
        $(".themeIcon").css("background-color", "#59acff");

        $("nav").css({ opacity: '1', zIndex: '9000' });
        $("#burger").attr("class", "display");
        $("div#linksParent a").css("display", "unset");

        //we decrease the y2 position of the top line
        let topYInterval = setInterval(() => {
            topY == 18 ? clearInterval(topYInterval) : topY++;
            $("#topLine").attr("y2", topY);
        }, 25);

        //we decrease the y2 position of the bottom line
        let bottomYInterval = setInterval(() => {
            bottomY == 6 ? clearInterval(bottomYInterval) : bottomY--;
            $("#bottomLine").attr("y2", bottomY);
        }, 25);

        //we slowly decrease the x position of the top and bottom line
        let x2Interval = setInterval(() => {
            //we change the x2 position of the bottom and top line
            x2 == 16 ? clearInterval(x2Interval) : x2--;
            $("#bottomLine").attr("x2", x2);
            $("#topLine").attr("x2", x2);
        }, 35);

        //we remove the middle line
        $("#middleLine").fadeOut(200);

        //we change the size of the background menu and it's border radius
        $("#menuBg").css({ width: "100%", height: "100%", borderRadius: 0 });
        $("nav").css({ width: "100%", width: '100%' });

        //we make the button appear
        setTimeout(() => {
            $("div#linksParent a").css("opacity", "1");
            $("#linksParent").css("border-left", "solid #242424 2px");
        }, 500);
        setTimeout(() => {
            $("#menuAtom").fadeIn(500)
        }, 750)
    } else {
        canAnimateAtom = false;

        //we change the background color of the themeIcon and the menuIcon
        $("#burger").css("background-color", "var(--backgroundColor)");
        $(".themeIcon").css("background-color", "var(--backgroundColor)");
        
        $("#burger").attr("class", "retract");

        //we slowly increase the y2 position of the top line
        let topYInterval = setInterval(() => {
            topY == 6 ? clearInterval(topYInterval) : topY--;
            $("#topLine").attr("y2", topY);
        }, 25);

        //we slowly increase the y2 position of the bottom line
        let bottomYInterval = setInterval(() => {
            bottomY == 18 ? clearInterval(bottomYInterval) : bottomY++;
            $("#bottomLine").attr("y2", bottomY);
        }, 25);

        //we change the x2 position of the bottom and top line
        let x2Interval = setInterval(() => {
            x2 == 23 ? clearInterval(x2Interval) : x2++;
            $("#bottomLine").attr("x2", x2);
            $("#topLine").attr("x2", x2);
        }, 35);

        //we put back the middle line
        $("#middleLine").fadeIn(200)

        //we change the size of the background menu and it's border radius
        $("#menuBg").css({ width: 0, height: 0, borderRadius: "10vh 0 10vh 50vh" });

        //we remove the buttons
        $("div#linksParent a").css({ opacity: "0", display: "none" });
        $("#linksParent").css("border-left", "none");
        $("#menuAtom").fadeOut(150);
        setTimeout(() => {
            $("nav").css({ opacity: '0', zIndex: '-1' });
        }, 750);
    }
});

$("div#linksParent a").css({ opacity: "0", display: "none" });

//making the menu atom animation when hovered
const menuAtomAnimation = () => {
    if(canAnimateAtom) {
        $("#menuAtom").off("mouseover");
        $("#menuAtom path").attr('class', 'animateAtom');
        console.log("animating");
    } 
    setTimeout(() => { 
        $("#menuAtom path").removeAttr("class");
        $("#menuAtom").on("mouseover", menuAtomAnimation);
    }, 8500);
}

//activating the hovering animation
$("#menuAtom").on("mouseover", menuAtomAnimation);