const darkMode = () => {
    //we change the variable of the background color and the main color
    document.documentElement.style.setProperty('--backgroundColor', '#242424');
    document.documentElement.style.setProperty("--color", "#fcffeb");

    //we change the color of the menu icon
    $("#topLine").css("stroke", "#fcffeb");
    $("#bottomLine").css("stroke", "#fcffeb");

    //we change the color of the atom and the arrow
    $("circle").attr("stroke", "#fcffeb");
    $(".largeOrbitAtom").attr("fill", "#fcffeb");
    $(".mediumOrbitAtom").attr("fill", "#fcffeb");
    $("#core").attr("fill", "#fcffeb");
    $("#arrowInstruction").css("filter", "invert(100%)");
    $(".equations").css("filter", "invert(100%)");

    //we change the moon icon for the sun
    $("#moon").fadeOut(250);
    setTimeout(() => { $("#moon").attr("src", "pics/sun.svg"); }, 250);
    $("#moon").fadeIn(250);
    setTimeout(() => { $("#moon").attr("onclick", "lightMode()"); $("#moon").attr("id", "sun"); }, 770);

    //we set a localStorage to remember the prefered theme by the user
    localStorage.setItem("theme", "dark");
}

const lightMode = () => {
    //we change the css variable that refer to the background color and the color
    document.documentElement.style.setProperty('--backgroundColor', '#fcffeb');
    document.documentElement.style.setProperty('--color', '#242424');

    //we change the color of the menu icon
    $("#topLine").css("stroke", "#242424");
    $("#bottomLine").css("stroke", "#242424");

    //we change the color of the atom and the arrow from the landing page
    $("circle").attr("stroke", "#242424");
    $(".largeOrbitAtom").attr("fill", "#242424");
    $(".mediumOrbitAtom").attr("fill", "#242424");
    $("#core").attr("fill", "#242424");
    $("#arrowInstruction").css("filter", "invert(0%)");
    $(".equations").css("filter", "invert(0%)");

    //we change the sun icon for a moon icon 
    $("#sun").fadeOut(250);
    setTimeout(() => { $("#sun").attr("src", "pics/moon.svg"); }, 250);
    $("#sun").fadeIn(250);
    setTimeout(() => { $("#sun").attr("onclick", "darkMode()"); $("#sun").attr("id", "moon"); }, 770);

    //we set a localStorage to remember the prefered theme by the user
    localStorage.setItem("theme", "light");
}

//we check if the user has already choose between the dark and light mode to swith
localStorage.getItem("theme") == "dark" ? darkMode() : lightMode();