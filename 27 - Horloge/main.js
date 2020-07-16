// class declaration
// class Dog {

// }


// class expression  // /!!!!!!!!!!!\ question d'entretien /!!!!!!!!!!!\
// const Dog = class {

// }

/* ------------------------------------ - ----------------------------------- */

// methodes. une seule méthode est obligatoire, c'est le constructeur

// class Dog {
//     constructor(nom, _race) { // elle définit ce qu'il faut faire à la création d'une instance/nouvelle version 
//         this.nom = nom;
//         this._race = _race;
//     }
//     aboyer() {
//         console.log(`WoufWouf je m'appelle ${this.nom} et je suis un ${this._race}`);
//     }
//     caliner() {
//         console.log('Slurp');
//     }

//     static info() {
//         console.log("Un chien c'est 100% mieux qu'un chat !");
//     };

//     set nickname(nick) { // ajouter ou modifier 
//         this.nick = nick;
//     }

//     get nickname() { // rechercher l'information 
//         return this.nick;
//     }

//     set race(_race) {
//         this._race = _race
//     }
// }

// const rex = new Dog('Rex', 'Berger Allemand')
// rex.aboyer();
// rex.caliner();
// //rex.info(); 
// Dog.info()
// rex.nickname = "Trololo"

// document.getElementById('demo').innerHTML = rex.nickname

// rex.race = "Caniche"
// rex.aboyer()

/* -------------------------------------------------------------------------- */
/*                             Etendre des classes                            */
/* -------------------------------------------------------------------------- */

// class Animal {
//     constructor(nom) {
//         this.nom = nom;
//         this.soif = 100;
//         this.bide = [];
//     }
//     boire() {
//         this.soif -= 10;
//         return this.soif
//     }
//     manger(...bouffe) {
//         this.bide.push(...bouffe);
//         return this.bide
//     }
// }


// class Dog extends Animal {
//     constructor(nom, race) {
//         super(nom); // poure récuper le nom dans Animal on crée une instance // si j'oublie cette ligen j'aurai un not defined
//         this.race = race;
//     }
//     aboyer() {
//         return 'wouaf je suis un chien'
//     };
// }

// const dumbo = new Animal("Dumbo")
// dumbo.manger("légumes", "petit-pois")
// console.log(dumbo);

// //dumbo.aboyer()

// const ulrok = new Dog('Ulrok', 'Leonberg');
// ulrok.boire();
// ulrok.boire();
// ulrok.boire();
// ulrok.boire();
// ulrok.boire();
// ulrok.boire();
// ulrok.boire();
// ulrok.manger("croquettes");

// console.log(ulrok);

// document.getElementById('demo').innerText = ulrok.aboyer()

/* -------------------------------------------------------------------------- */
/*                        étendre des classes par défaut                      */
/* -------------------------------------------------------------------------- */

// class CollectionDeFilms extends Array {
//     constructor(nom, ...items) {
//         super(...items);
//         this.nom = nom;
//     }
//     add(movie) {
//         this.push(movie)
//     }

//     topRated(limit = 3) {
//         return this.sort((a, b) => a.stars > b.stars ? -1 : 1).slice(0, limit)
//     }
// }

// const films = new CollectionDeFilms("Mes films préférés",
//     { name: "White House Down", stars: 5 },
//     { name: "Taken", stars: 9 },
//     { name: "Gladiator", stars: 10 },
//     { name: "Le Hobbit", stars: 8 },
//     { name: "Orgeuil et Préjugés et Zombies", stars: 7 },
//     { name: "Star Wars", stars: 5 },
// )

// console.log(films);

// films.add({ name: "Le seigneur des anneaux", stars: 10 });
// films.add({ name: "Dragons", stars: 7 });
// films.add({ name: "Constantine", stars: 10 });

// console.log(films);

// console.log(films.topRated(4));

// for (const film in films) { // il boucle dans L'ARRAY et l'OBJET
//     console.log(films[film]);
// }

// films.forEach(el => console.log(el)) // il boucle que dans l'ARRAY

/* -------------------------------------------------------------------------- */
/*                                  EXERCICE                                  */
/* -------------------------------------------------------------------------- */

class Clock {
    constructor() {
    }
    init() {
        this.dateTitre = new Date()

        var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        const jour = (this.dateTitre.getDate() < 10) ? `0${this.dateTitre.getDate()}` : this.dateTitre.getDate();

        const titreDate = `${jour} ${mois[this.dateTitre.getMonth()]} ${this.dateTitre.getFullYear()}`;
        //console.log(titreDate);
        document.getElementById('date').innerHTML = titreDate;

        /* -------------------------------------------------------------------------- */

        const columns = document.querySelectorAll('.col') // je crée un tableau avec toutes mes div class ".col"
        this.arrayColumns = Array.from(columns) // je convertis la Nodelist en tableau
        console.log(this.arrayColumns);

        /* -------------------------------------------------------------------------- */

        this.arrayColumns.map(item => {
            for (let i = 0; i < 10; i++) {

                item.innerHTML += `<span> ${i} </span>`
            }

            if (item.id == 1) {
                item.innerHTML = `
                <span> 0 </span>
                <span> 1 </span>
                <span> 2 </span>
                `
            }

            if (item.id == 3 || item.id == 5) {
                item.innerHTML = `
                <span> 0 </span>
                <span> 1 </span>
                <span> 2 </span>
                <span> 3 </span>
                <span> 4 </span>
                <span> 5 </span>
                `
            }

        })

    }

    render() {

        const heure = new Date()

        const h = (heure.getHours() < 10) ? `0${heure.getHours()}` : heure.getHours();
        const m = (heure.getMinutes() < 10) ? `0${heure.getMinutes()}` : heure.getMinutes();
        const s = (heure.getSeconds() < 10) ? `0${heure.getSeconds()}` : heure.getSeconds();

        this.arrayTime = Array.from(`${h}${m}${s}`) //103815
        this.animate()

        //console.log(arrayTime);

    }

    animate() {
        console.log(this.arrayColumns);
        const moveColumns = this.arrayColumns.map((item, index) => {
            item.style.marginTop = `-${(this.arrayTime[index]) * 49}px`;
        });
    }

    start() {

        this.init();
        this.render();
        this.animate();

        setInterval(() => {
            this.render();
            this.animate();
        }, 1000);
    }
}


const clock = new Clock()

clock.start();

