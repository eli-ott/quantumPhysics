const allText = {
    homePage: {
        french: `La physique quantique est l'appellation générale d'un ensemble de théories physiques nées au XXe 
        siècle qui décrivent le comportement des atomes et des particules et permettent d'élucider 
        certaines propriétés du rayonnement électromagnétique. 
        <br><br> 
        La physique quantique recouvre l'ensemble 
        des domaines de la physique où l'utilisation des lois de la mécanique quantique est une nécessité 
        pour comprendre les phénomènes en jeux. 
        <br><br>
        La mécanique quantique est la théorie fondamentale des 
        particules de matière constituant les objets de l'univers et des champs de force animant ces objets.
        <br><br>
        Grâce à la physique quantique nous avons pu expliquer de nombreuses choses qui autrefois étaient 
        totalement inconnu. Par exemple l'énergie nucléaire ou même une toute nouvelle technologie, les
        ordinateurs quantique. Ces deux exemples n'aurais jamais exister sans des connaissances précises 
        sur les atomes et leur fonctionnemment.`,
        english: `Quantum physics is the general name of a set of physical theories born in the twentieth
        century that describe the behavior of atoms and particles and elucidate
        some properties of electromagnetic radiation.
        <br> <br>
        Quantum physics covers the whole
        areas of physics where the use of the laws of quantum mechanics is a necessity
        to understand the phenomena involved.
        <br> <br>
        Quantum mechanics is the fundamental theory of
        particles of matter constituting the objects of the universe and the force fields animating these objects.
        <br> <br>
        Thanks to quantum physics we have been able to explain many things that once were
        totally unknown. For example nuclear power or even a whole new technology,
        quantum computers. These two examples would never have existed without precise knowledge
        on atoms and their functioning.`
    }
}

//we change the prefered language of the user
$("#frenchFlag").on("click", () => {
    localStorage.setItem("language", "french");

    $("#topLeftHeader").html("Physique");
    $("#bottomRightHeader").html("Quantique");

    changeLanguage();
});
$("#englishFlag").on("click", () => {
    localStorage.setItem("language", "english");

    $("#topLeftHeader").html("Quantum");
    $("#bottomRightHeader").html("Physics")

    changeLanguage();
});

//we check which language is choose by the user
const changeLanguage = () => {
    switch(window.location.pathname){
        case "/index.html":
            localStorage.getItem("language") === "french" ? $("#mainContent").html(allText.homePage.french): $("#mainContent").html(allText.homePage.english);
        break;
    }
}
changeLanguage();