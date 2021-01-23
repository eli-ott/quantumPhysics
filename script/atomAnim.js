let largeRotation = 0;
setInterval(() => {
    largeRotation == 360 ? largeRotation = 0: largeRotation += 0.1; 
    $(".largeOrbitAtom").attr("transform", `rotate(${largeRotation}, 250, 250)`);
}, 10);
let mediumRotation = 0;
setInterval(() => {
    mediumRotation == 360 ? mediumRotation = 0: mediumRotation += 0.5; 
    $(".mediumOrbitAtom").attr("transform", `rotate(${mediumRotation}, 250, 250)`);
}, 10);
let smallOrbitRotation = 0;
setInterval(() => {
    smallOrbitRotation == 360 ? smallOrbitRotation = 0: smallOrbitRotation += 1.5; 
    $(".smallOrbitAtom").attr("transform", `rotate(${smallOrbitRotation}, 250, 250)`);
}, 10);