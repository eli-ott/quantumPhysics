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

    //we slide the atom to the left or to the right
    if(previousYOffset < yOffset && slideAtom){
        $("#atom").css("left", 389.2 - yOffset);
        console.log("sliding");
    } else if(yOffset < 389.2 && slideAtom){
        $("#atom").css("left", 389.2 + -yOffset);
        console.log("sliding minus");
    }

    //we create the rotation of the atom when the user scroll
    if(previousYOffset < yOffset){
        $(".largeOrbitAtom").attr("transform", `rotate(${yOffset / 4.5}, 250, 250)`);
        $(".mediumOrbitAtom").attr("transform", `rotate(${yOffset / 2}, 250, 250)`);
    } else{
        $(".largeOrbitAtom").attr("transform", `rotate(${-yOffset / -4.5}, 250, 250)`);
        $(".mediumOrbitAtom").attr("transform", `rotate(${-yOffset / -2}, 250, 250)`);
    }

    //we check if the user scroll  to the top enough to slide the atom again
    yOffset < 300 ? slideAtom = true: slideAtom = false;

    //we check if the user is on the top of the page to animate the atom
    if(window.pageYOffset == 0){
        noScroll = true;
    } else{
        noScroll = false;
    }
    electronsRotation();
}); 

let largeRotation = 0;
let mediumRotation = 0;

const electronsRotation = () => {
    //we rotate the electrons if the user sis on the top of the page
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