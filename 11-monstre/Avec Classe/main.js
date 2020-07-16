/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercices                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------- Afficher les monstres ------------------------- */
/* ----------------------------- Avec une classe ---------------------------- */

/* -------------------------------------------------------------------------- */

class Monstres {
    constructor() {

    }

    init() {

        document.getElementById('monstre').addEventListener("click", () => this.agrandir());

        this.monstre = [ // Ma base de donnée
            {
                src: "img/monstre1.jpg",
                alt: "Boule verte"
            },
            {
                src: "img/monstre2.jpg",
                alt: "Tentaculus"
            },
            {
                src: "img/monstre3.jpg",
                alt: "Monste à sucette"
            },
            {
                src: "img/monstre4.jpg",
                alt: "Triglobuleux"
            },
            {
                src: "img/monstre5.jpg",
                alt: "Diablotin"
            },
            {
                src: "img/monstre6.jpg",
                alt: "Chewbacca Rose"
            },


        ]


        this.title = document.createElement("h1"); // je crée le h1 pour le titre de mon monstres
        document.getElementById("grand").appendChild(this.title)
        this.title.classList.add("titre")
        this.image = document.createElement("img"); // je crée mon image 
        document.getElementById("grand").appendChild(this.image)

        this.afficherMonstre();
    }
    afficherMonstre() {
        for (var i = 0; i < this.monstre.length; i++) {
            // je boucle dans la liste monstre pour afficher les différentes images
            var mini = document.createElement('img'); // je crée la balise image
            mini.setAttribute('src', this.monstre[i].src)
            mini.setAttribute('alt', this.monstre[i].alt)
            mini.addEventListener("click", (e) => this.agrandir(e.target))
            // le e permet de cibler l'élement sur lequel on est pour ensuite le récupérr dans la fct agrandir()
            document.getElementById('monstre').appendChild(mini);
            // je lui donne du style et les ajoute à la div monstre
        }
    }
    agrandir(item) {
        this.title.innerHTML = item.alt
        this.image.src = item.src;
        this.image.alt = item.alt;
    }
}

const monstres = new Monstres()

monstres.init()


/* ----------------------------- Sans une Classe ---------------------------- */

//document.getElementById('monstre1').addEventListener("click", agrandir)

// var monstre = [ // Ma base de donnée
//     {
//         src: "img/monstre1.jpg",
//         alt: "Boule verte"
//     },
//     {
//         src: "img/monstre2.jpg",
//         alt: "Tentaculus"
//     },
//     {
//         src: "img/monstre3.jpg",
//         alt: "Monste à sucette"
//     },
//     {
//         src: "img/monstre4.jpg",
//         alt: "Triglobuleux"
//     },
//     {
//         src: "img/monstre5.jpg",
//         alt: "Diablotin"
//     },
//     {
//         src: "img/monstre6.jpg",
//         alt: "Chewbacca Rose"
//     },


// ]


// function afficheMonstre() { // fct pour afficher les monstre
//     for (var i = 0; i < monstre.length; i++) {
//         // je boucle dans la liste monstre pour afficher les différentes images
//         var mini = document.createElement('img'); // je crée la balise image
//         mini.setAttribute('src', monstre[i].src)
//         mini.setAttribute('alt', monstre[i].alt)
//         mini.addEventListener("click", agrandir)
//         document.getElementById('monstre').appendChild(mini);
//         // je lui donne du style et les ajoute à la div monstre
//     }

// }

// afficheMonstre() // je lance la fct afficheMonstre

// var title = document.createElement("h1"); // je crée le h1 pour le titre de mon monstres
// document.getElementById("grand").appendChild(title)
// title.classList.add("titre")
// var image = document.createElement("img"); // je crée mon image 
// document.getElementById("grand").appendChild(image)

// function agrandir() {
//     title.innerHTML = this.alt
//     image.src = this.src;
//     image.alt = this.alt;

// }

