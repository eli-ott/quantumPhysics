let noScroll = true;
let previousYOffset = 0;

let scrollTimeout;
let slideAtom = true;

$(window).on("scroll", () => {
    let yOffset = window.pageYOffset;

    //we remove the little arrow from the left of the page when the user scroll
    if(yOffset != 0){
        $("#arrowInstruction").css("opacity", "0");
    } else{
        $("#arrowInstruction").css("opacity", "1");
    }

    //we create the rotation of the atom when the user scroll only when the screen is larger than 850px
    if(window.innerWidth > 850) {
        if(previousYOffset < yOffset){
            $(".largeOrbitAtom").attr("transform", `rotate(${yOffset / 4.5}, 250, 250)`);
            $(".mediumOrbitAtom").attr("transform", `rotate(${yOffset / 2}, 250, 250)`);
        } else{
            $(".largeOrbitAtom").attr("transform", `rotate(${-yOffset / -4.5}, 250, 250)`);
            $(".mediumOrbitAtom").attr("transform", `rotate(${-yOffset / -2}, 250, 250)`);
        }
    }

    //we check if the user is on the top of the page to animate the atom if the screen is larger than 850px
    if(window.innerWidth > 850) {
        if(window.pageYOffset == 0){
            noScroll = true;

        //we check if the user completly scrolled down
        } else if($(document).height() - $(window).scrollTop() - $(window).height() == 0) {
            noScroll = true;
        } else {
            noScroll = false;
        }
    }
    
    //we call the function only when the screen is larger than 850px 
    if(window.innerWidth > 850) {
        electronsRotation();
    }
}); 

let largeRotation = 0;
let mediumRotation = 0;

const electronsRotation = () => {
    //we rotate the electrons if the user is on the top of the page =
    if(noScroll){
        window.largeInterval = setInterval(() => {
        largeRotation == 360 ? largeRotation = 0: largeRotation += 0.1; 
        $(".largeOrbitAtom").attr("transform", `rotate(${largeRotation}, 250, 250)`);
    }, 10);
        window.mediumInterval = setInterval(() => {
        mediumRotation == 360 ? mediumRotation = 0: mediumRotation += 0.5; 
        $(".mediumOrbitAtom").attr("transform", `rotate(${mediumRotation}, 250, 250)`);
    }, 10);
    } else{
        clearInterval(mediumInterval);
        clearInterval(largeInterval);
    }
}

//we call the function to create the atom animation
electronsRotation();
