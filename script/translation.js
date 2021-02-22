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
        on atoms and their functioning.`,
        spanish: `La física cuántica es el nombre general de un conjunto de teorías físicas nacidas en el siglo XX.
        siglo que describen el comportamiento de átomos y partículas y aclaran
        algunas propiedades de la radiación electromagnética.
        <br> <br>
        La física cuántica cubre todo
        áreas de la física donde el uso de las leyes de la mecánica cuántica es una necesidad
        para comprender los fenómenos en juego.
        <br> <br>
        La mecánica cuántica es la teoría fundamental de
        partículas de materia que constituyen los objetos del universo y los campos de fuerza que animan estos objetos.
        <br> <br>
        Gracias a la física cuántica hemos podido explicar muchas cosas que alguna vez fueron
        totalmente desconocido. Por ejemplo, la energía nuclear o incluso una tecnología completamente nueva,
        computadoras cuánticas. Estos dos ejemplos nunca hubieran existido sin un conocimiento preciso
        sobre los átomos y su funcionamiento.`,
        german: `Quantenphysik ist der allgemeine Name einer Reihe physikalischer Theorien, die im 20. Jahrhundert geboren wurden
        Jahrhundert, die das Verhalten von Atomen und Teilchen beschreiben und aufklären
        Einige Eigenschaften elektromagnetischer Strahlung.
        <br> <br>
        Die Quantenphysik deckt das Ganze ab
        Bereiche der Physik, in denen die Anwendung der Gesetze der Quantenmechanik eine Notwendigkeit ist
        die Phänomene im Spiel zu verstehen.
        <br> <br>
        Die Quantenmechanik ist die Grundtheorie von
        Materieteilchen, die die Objekte des Universums bilden, und die Kraftfelder, die diese Objekte animieren.
        <br> <br>
        Dank der Quantenphysik konnten wir viele Dinge erklären, die es einmal gab
        völlig unbekannt. Zum Beispiel Atomkraft oder sogar eine ganz neue Technologie,
        Quantencomputer. Diese beiden Beispiele hätten ohne genaues Wissen niemals existiert
        auf Atome und ihre Funktionsweise.`
    }
}

//we change the prefered language of the user
$("#frenchFlag").on("click", () => {
    localStorage.setItem("language", "french");

    //we change the footer language
    $(".footerHeader")[0].innerHTML = "CREATEURS";
    $(".footerHeader")[1].innerHTML = "CONTACTEZ-NOUS";
    $(".footerHeader")[2].innerHTML = "LANGAGE";
    $("text")[1].innerHTML = "Ce site web a été créé par";
    $("text")[3].innerHTML = "et <a class='links' href='https://github.com/eli-ott'>@eli-ott</a>";
    $("text")[5].innerHTML = "Vous voulez partager votre opinion ";
    $("text")[6].innerHTML = "à propos de se site, contactez-nous : ";
    $("text")[9].innerHTML = "Choisissez un langage : ";

    changeLanguage();
});
$("#englishFlag").on("click", () => {
    localStorage.setItem("language", "english");

    //we change the footer language
    $(".footerHeader")[0].innerHTML = "CREATORS";
    $(".footerHeader")[1].innerHTML = "CONTACT-US";
    $(".footerHeader")[2].innerHTML = "LANGUAGE";
    $("text")[1].innerHTML = "This website was created by";
    $("text")[3].innerHTML = "and <a class='links' href='https://github.com/eli-ott'>@eli-ott</a>";
    $("text")[5].innerHTML = "You want to share your opinion ";
    $("text")[6].innerHTML = "about this website, contact-us : ";
    $("text")[9].innerHTML = "Choose a language : ";

    changeLanguage();
});
$("#spanishFlag").on("click", () => {
    localStorage.setItem("language", "spanish");

    //we change the footer language
    $(".footerHeader")[0].innerHTML = "CREADORES";
    $(".footerHeader")[1].innerHTML = "CONTÁCTENOS";
    $(".footerHeader")[2].innerHTML = "IDIOMA";
    $("text")[1].innerHTML = "Este sitio web fue creado por";
    $("text")[3].innerHTML = "y <a class='links' href='https://github.com/eli-ott'>@eli-ott</a>";
    $("text")[5].innerHTML = "quieres compartir tu opinion ";
    $("text")[6].innerHTML = "sobre este sitio web, contáctanos";
    $("text")[9].innerHTML = "Elige un iodioma : ";

    changeLanguage();
});
$("#germanFlag").on("click", () => {
    localStorage.setItem("language", "german");

    //we change the footer language
    $(".footerHeader")[0].innerHTML = "Shöpfer";
    $(".footerHeader")[1].innerHTML = "Kontaktiere uns";
    $(".footerHeader")[2].innerHTML = "Sprache";
    $("text")[1].innerHTML = "Diese Website wurde erstellt von";
    $("text")[3].innerHTML = "und <a class='links' href='https://github.com/eli-ott'>@eli-ott</a>";
    $("text")[5].innerHTML = "Sie möchten Ihre Meinungen teilen ";
    $("text")[6].innerHTML = "Über diese Website kontaktieren Sie uns";
    $("text")[9].innerHTML = "Wähle eine Sprache : ";

    changeLanguage();
});

//we check which language is choose by the user
const changeLanguage = () => {
    switch(window.location.pathname){
        case "/" || "/index.html":
            if(localStorage.getItem("language") === "french"){
                $("#mainContent").html(allText.homePage.french);

                //we change the header text
                $("#topLeftHeader").html("Physique");
                $("#bottomRightHeader").html("Quantique");

                //we change the menu language
                $("#linksParent a")[0].innerHTML = "Modèle de l'atome";
                $("#linksParent a")[1].innerHTML = "Les grandes figures";
                $("#linksParent a")[2].innerHTML = "Principe d'incertitude";
                $("#linksParent a")[3].innerHTML = "Fentes d'Young";
                $("#linksParent a")[4].innerHTML = "Dualité onde-corpuscule";
                $("#linksParent a")[5].innerHTML = "Formule célèbres";

                $("#frenchFlag").trigger("click");
            } else if(localStorage.getItem("language") === "english"){
                $("#mainContent").html(allText.homePage.english);

                //we change the header text
                $("#topLeftHeader").html("Quantum");
                $("#bottomRightHeader").html("Physics");

                //we change the menu language
                $("#linksParent a")[0].innerHTML = "Atom model";
                $("#linksParent a")[1].innerHTML = "The great figures";
                $("#linksParent a")[2].innerHTML = "Uncertainty principle";
                $("#linksParent a")[3].innerHTML = "Young's slits";
                $("#linksParent a")[4].innerHTML = "Wave-particle duality";
                $("#linksParent a")[5].innerHTML = "Famous formula";

                $("#englishFlag").trigger("click");
            } else if(localStorage.getItem("language") === "spanish"){
                $("#mainContent").html(allText.homePage.spanish);

                //we change the header text
                $("#topLeftHeader").html("Física");
                $("#bottomRightHeader").html("Cuántica");

                //we change the menu language
                $("#linksParent a")[0].innerHTML = "Modelo de átomo";
                $("#linksParent a")[1].innerHTML = "Las grandes figuras";
                $("#linksParent a")[2].innerHTML = "Principio de incertidumbre";
                $("#linksParent a")[3].innerHTML = "Hendiduras de Young";
                $("#linksParent a")[4].innerHTML = "Dualidad onda-partícula";
                $("#linksParent a")[5].innerHTML = "Fórmula famosa";

                $("#spanishFlag").trigger("click");
            } else if(localStorage.getItem("language") === "german"){
                $("#mainContent").html(allText.homePage.german);

                //we change the header text
                $("#topLeftHeader").html("");
                $("#bottomRightHeader").html("Quantenphysik");

                //we change the menu language
                $("#linksParent a")[0].innerHTML = "Atommodell";
                $("#linksParent a")[1].innerHTML = "die großen Figuren";
                $("#linksParent a")[2].innerHTML = "Unschärferelation";
                $("#linksParent a")[3].innerHTML = "Schlitze von Young";
                $("#linksParent a")[4].innerHTML = "Welle-Teilchen-Dualität";
                $("#linksParent a")[5].innerHTML = "Berühmte Formel";

                $("#germanFlag").trigger("click");
            }
        break;
    }
}
changeLanguage();