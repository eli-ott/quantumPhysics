const darkMode = () => {
    //we change the variable of the background color and the main color
    document.documentElement.style.setProperty("--backgroundColor", "");
    document.documentElement.style.setProperty("--color", "");

    //we change the moon icon for the sun
    $("#moon").fadeOut(250);
    setTimeout(() => { $("#moon").attr("src", "../pics/sun.svg"); }, 250);
    $("#moon").fadeIn(250);
    setTimeout(() => { $("#moon").attr("onclick", "lightMode()"); $("#moon").attr("id", "sun");}, 770);

    //we set a localStorage to remember the prefered theme by the user
    localStorage.setItem("theme", "dark");
}
const lightMode = () => {
    //we change the css variable that refer to the background color and the color
    document.documentElement.style.setProperty('--backgroundColor', '#F1F1F1');
    document.documentElement.style.setProperty('--color', '#181818');

    //we chhange the sun icon for a moon icon 
    $("#sun").fadeOut(250);
    setTimeout(() => { $("#sun").attr("src", "../pics/moon.svg"); }, 250);
    $("#sun").fadeIn(250);
    setTimeout(() => { $("#sun").attr("onclick", "darkMode()"); $("#sun").attr("id", "moon"); }, 770);

    //we set a localStorage to remember the prefered theme by the user
    localStorage.setItem("theme", "light");
}