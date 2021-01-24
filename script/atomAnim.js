let scrolled = true;
$(window).on("scroll", () => {
    let yOffset = window.pageYOffset;
    if(yOffset == 0){
        scrolled = true;
    } else{
        scrolled = false;
    }
    electronsRotation();
}); 

let largeRotation = 0;

const electronsRotation = () => {
    if(scrolled){
    window.largeInterval = setInterval(() => {
        largeRotation == 360 ? largeRotation = 0: largeRotation += 0.1; 
        $(".largeOrbitAtom").attr("transform", `rotate(${largeRotation}, 250, 250)`);
    }, 10);
    let mediumRotation = 0;
    window.mediumInterval = setInterval(() => {
        mediumRotation == 360 ? mediumRotation = 0: mediumRotation += 0.5; 
        $(".mediumOrbitAtom").attr("transform", `rotate(${mediumRotation}, 250, 250)`);
    }, 10);
    } else{
        clearInterval(mediumInterval);
        clearInterval(largeInterval);
    }
}

electronsRotation();