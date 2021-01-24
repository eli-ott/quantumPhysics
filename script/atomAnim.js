let noScroll = true;
let previousYOffset = 0;

let scrollTimeout;
let slideAtom = true;

$(window).on("scroll", () => {
    let yOffset = window.pageYOffset;

    //we slide the atom to the left or to the right
    if(previousYOffset < yOffset && slideAtom){
        $("#atom").css("left", 389.2 - yOffset);
    } else if(yOffset < 389.2){
        $("#atom").css("left", 389.2 + -yOffset);
    }

    //we create the rotation of the atom when the user scroll
    if(previousYOffset < yOffset){
        $(".largeOrbitAtom").attr("transform", `rotate(${yOffset / 4.5}, 250, 250)`);
        $(".mediumOrbitAtom").attr("transform", `rotate(${yOffset / 2}, 250, 250)`);
    } else{
        $(".largeOrbitAtom").attr("transform", `rotate(${-yOffset / -4.5}, 250, 250)`);
        $(".mediumOrbitAtom").attr("transform", `rotate(${-yOffset / -2}, 250, 250)`);
    }

    //we check if the atom is at 0px from the left to stop it
    $("#atom").css("left") <= "0px" ? slideAtom = false: slideAtom = true;

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
