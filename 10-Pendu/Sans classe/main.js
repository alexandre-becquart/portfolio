/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Faire un pendu ----------------------------- */
/* ----------------------------- Avec une classe ---------------------------- */


document.getElementById('generer').addEventListener("click", genererMot)
// au clic sur l'el. generer, je génére un mot avec la FCT genererMot()

document.getElementById('proLettre').addEventListener("click", proposerLettre)
// au clic sur l'el. proLettre, je lance la FCT proposerLettre()

document.getElementById('proMot').addEventListener("click", proposerMot)
// au clic sur l'el. proMot, je lance la FCT proposerMot()

//document.getElementById('recommence').addEventListener("click", reset)


words = [
    "canard",
    "orange",
    "ordinateur",
    "lapin",
    "tableau",
    "javascript",
    "coutume",
    "gobelet",
    "bouteille",
    "table",
    "lunette",
    "toilette",
    "ornithorynque",
    "climatisation",
    "cheval",
    "pomme",
    "carotte",
    "marais",
    "casque",
    "semaine",
    "feuille",
    "alimentation",
    "crotte",
    "rouge",
    "projecteur",
    "clavier",
    "billet",
    "banque",
    "clairon",
    "formation",
    "gourde",
    "bouton",
    "touche",
    "poisson",
    "brique",
    "chocolat",
    "vanille",
    "baguette",
    "nourriture",
    "comestible",
    "meuble",
    "armoire"]

var word;
var etape = 0;
var compMot = [];


function genererMot() {
    reset(); // la Fct est générer plus bas
    active(); // la Fct est générer plus bas

    var wordRandom = Math.floor(Math.random() * words.length)
    // je génère un nombre que j'arrondis compris entre 0 et la longeur du tableau word.
    word = words[wordRandom]; // wordRandon devient l'index, j'acciche donc un mot
    for (var i = 0; i < word.length; i++) {
        // je boucle pour créer autant de div qu'il y a de lettre dans le mot
        var div = document.createElement('div');
        div.classList.add('lettre') // j'ajoute la classe lettre
        document.getElementsByTagName('main')[0].appendChild(div)
        // je les ajoute à l'élément main
    }
    //console.log(word);


}

function proposerLettre() {
    var wordSplit = word.split('') // je décompose mon mot afin d'avoir un tableau avec toutes les lettres
    //console.log(wordSplit);
    var lettre = prompt("Proposez une lettre"); // je crée une prompt pour demander une lettre
    var bonneLettre = false;


    if (compMot.indexOf(lettre) != -1) { // si la lettre existe déjà 
        alert("Cette lettre est déjà utilitée") // lance une alerte avec le message
    } else {

        for (var j = 0; j < wordSplit.length; j++) { // je boucle dans mon tableau pour vérifier les lettres

            if (lettre == wordSplit[j]) { // si la lettre existe dans le tableau
                document.getElementsByClassName('lettre')[j].innerHTML = lettre;
                // j'ajoute la lettre la div ayant le même index
                bonneLettre = true; // il devient true pour eviter de passer dans le code erreur
                compMot[j] = lettre; // il remet les lettres dans l'ordre dans le tableau
                //console.log(compMot); // afficher le tableau 
                if (compMot.join("") == wordSplit.join("")) {
                    //On recompose le mot du tableau 'compMot', s'il est égale au mot générer
                    var gagne = document.getElementById('lettre');
                    gagne.classList.add('gagne');
                    gagne.innerHTML = "Bravo, vous avez gagné !!";
                    // tu m'ajoute une div pour annoncer que le joueur a gagné
                    desactive(); // il lance la fonction desactive
                }

            }


        }
        if (!bonneLettre) { // si lettre est égale false
            alert("La lettre n'est pas bonne") //  envoie le message que la lettre est mauvaise
            etape++// ajoute +1 à l'étape 
            var div = document.createElement('div') // je crée des div par étape pour afficher le pendu 
            div.classList.add("etape" + etape)
            document.getElementById('partie2').appendChild(div) // la div crée prend la classe ayant le numéro de l'étape
            if (etape == 11) { // si etape est égale à 11 => le joueur a perdu
                var perdu = document.getElementById('lettre');
                perdu.classList.add('perdu');
                perdu.innerHTML = 'Désolé vous avez perdu!!'; // on affiche une div pour annoncer la fin du jeu
                desactive();// je lance la fct desactive
                for (var m = 0; m < wordSplit.length; m++) {
                    document.getElementsByClassName('lettre')[m].innerHTML = wordSplit[m];
                    // on effecue une boucle pour afficher le mot complet en cas de perte

                }

            }
        }
        var div = document.createElement('div'); // on crée une div pour afficher les lettres utilisées
        div.innerHTML = " " + lettre + " -";
        document.getElementById('letUti').appendChild(div)
    }



}


function proposerMot() { // tenter de proposer un mot 
    var mot = prompt("Proposez un mot") // prompt pour recevoir la proposition
    if (mot == word) { // si le mot proposé est celui générer
        var motSplit = mot.split('') // je split le mot pour mettre les lettres dans chaque div
        //console.log(motSplit);
        for (var k = 0; k < motSplit.length; k++) { // je boucle dans les div pour mettre les lettres
            document.getElementsByClassName('lettre')[k].innerHTML = mot[k]; //il place les lettre en fonction de la boucle
        }

        var gagne = document.getElementById('lettre'); // message si le joueur gagne
        gagne.classList.add('gagne');
        gagne.innerHTML = "Bravo, vous avez gagné !!";
        desactive(); // je lance la fct desactive

    } else { //Si non, on reprend le même principe que lorsque une lettre n'est pas bonne 
        etape++
        var div = document.createElement('div')
        div.classList.add("etape" + etape)
        document.getElementById('partie2').appendChild(div)
        alert("Ce n'est pas le bon mot")
        if (etape == 11) {
            var perdu = document.getElementById('lettre');
            perdu.classList.add('perdu');
            perdu.innerHTML = "Désolé vous avez perdu!!";
            desactive();

        }
        var div = document.createElement('div');
        div.innerHTML = " " + mot + " -";
        document.getElementById('motUti').appendChild(div)
    }
}

function reset() { // Cette fct sert à tout remettre à zéro lorsque le joueur souhaite recommencer
    document.getElementsByTagName("main")[0].innerHTML = "";
    document.getElementById("letUti").innerHTML = "";
    document.getElementById("motUti").innerHTML = "";
    document.getElementById("lettre").innerHTML = "";
    document.getElementById("lettre").classList.remove("perdu", "gagne");
    document.getElementById("partie2").innerHTML = "";
    document.getElementById("proLettre").removeAttribute("disabled", "disabled")
    document.getElementById("proLettre").classList.remove("btnOut")
    document.getElementById("proMot").removeAttribute("disabled", "disabled")
    document.getElementById("proMot").classList.remove("btnOut")
    var lettre = document.getElementById('lettre');
    lettre.classList.remove('gagne');
    lettre.innerHTML = "";
    lettre.classList.remove('perdu');
    lettre.innerHTML = "";
    document.getElementById("letUti").innerHTML = "";
    document.getElementById("partie2").innerHTML = "";
    etape = 0;
    compMot = [];
}

function desactive() { // Cette fct sert à desactiver les boutons inutiles en fin de partie
    document.getElementById("proLettre").setAttribute("disabled", "disabled")
    document.getElementById("proLettre").classList.add("btnOut")
    document.getElementById("proMot").setAttribute("disabled", "disabled")
    document.getElementById("proMot").classList.add("btnOut")
}

function active() { // cette fct permet de réactiver les boutons en début de partie 
    document.getElementById("proLettre").removeAttribute("disabled", "disabled")
    document.getElementById("proLettre").classList.remove("btnOut")
    document.getElementById("proMot").removeAttribute("disabled", "disabled")
    document.getElementById("proMot").classList.remove("btnOut")
}






