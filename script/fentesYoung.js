let isButtonsActive = true;
let animationIsActive = false;

let circleIndex = 0;

$("#restartAnimation").css({color: '#D3D3D3', border: 'solid #D3D3D3 2px', cursor: 'default'});

$("#startAnimation").on("click", () => {
    if(isButtonsActive){
        //we display all the electrons one by one
        let electronsDisplay = setInterval(() => {
            circleIndex == $(".electrons").length ? clearInterval(electronsDisplay): circleIndex++;; 
            $(`#circle${circleIndex}`).css("display", "unset");
        }, 50);
        animationIsActive = true;

        //we desactive the start animation button when the animation is running
        isButtonsActive = false;
        $(".animButtons").css({color: '#D3D3D3', border: 'solid #D3D3D3 2px', cursor: 'default'});

        //we re activate the buttons when the animation ends
        setTimeout(() => {
            $("#restartAnimation").css({color: 'var(--color)', borderColor: 'var(--color)', cursor: 'pointer'});
            isButtonsActive = true;
        }, 4650);
        }
});

$("#restartAnimation").on("click", () => {
    if(isButtonsActive){
        //we remove the electrons from the screen
        $(".electrons").css("display", "none");
        circleIndex = 0;
        animationIsActive = false;

        //we active the 'lancer l'animation' button
        $("#startAnimation").css({color: 'var(--color)', borderColor: 'var(--color)', cursor: 'pointer'});

        //we descative the 'effacer l'animtion' button
        $("#restartAnimation").css({color: '#D3D3D3', border: 'solid #D3D3D3 2px', cursor: 'default'});
    }
});

//we create the hover changes
$("#startAnimation").hover(() => {
    console.log("hovering");
    if(isButtonsActive && !animationIsActive){
        $("#startAnimation").css({color: "var(--orange)", borderColor: "var(--orange)", cursor: "pointer"});
    }
}, () => {
    if(isButtonsActive && !animationIsActive){
        $("#startAnimation").css({color: 'var(--color)', borderColor: 'var(--color)', cursor: 'pointer'});
    }
});
$("#restartAnimation").hover(() => {
    console.log("hovering");
    if(isButtonsActive && animationIsActive){
        $("#restartAnimation").css({color: "var(--orange)", borderColor: "var(--orange)", cursor: "pointer"});
    }
}, () => {
    if(isButtonsActive && animationIsActive){
        $("#restartAnimation").css({color: 'var(--color)', borderColor: 'var(--color)', cursor: 'pointer'});
    }
});

//we change the color of the young's slit
$(".themeIcon").on("click", () => {
    if(localStorage.getItem("theme") == 'dark'){
        $("line").attr('style', 'stroke: #fcffeb; stroke-width: 2;');
        $("circle").attr('style', 'fill: #fcffeb;');
    } else if(localStorage.getItem("theme") == 'light'){
        $("line").attr('style', 'stroke: #242424; stroke-width: 2;');
        $("circle").attr('style', 'fill: #242424;');
    }
});
if(localStorage.getItem("theme") == 'dark'){
        $("line").attr('style', 'stroke: #fcffeb; stroke-width: 2;');
        $("circle").attr('style', 'fill: #fcffeb;');
    } else if(localStorage.getItem("theme") == 'light'){
        $("line").attr('style', 'stroke: #242424; stroke-width: 2;');
        $("circle").attr('style', 'fill: #242424;');
    }