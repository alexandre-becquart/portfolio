/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Spread                                   */
/* -------------------------------------------------------------------------- */

const featured = ["Barbecue", "Margarita", "Hawaian"];
const speciality = ["Tartiflette", "5 saisons", "Merguez couscous"];

/* ------------------------ Réunir les deux tableaux ------------------------ */

//let pizzas = [];
//const pizzas = featured + speciality

//const pizzas = Array.from(featured + speciality)
// // fait un array avec chaques lettres

/* -------------------------------- .concat() ------------------------------- */
/* --------------------- est utilisée afin de fusionner --------------------- */
/* --------------- un ou plusieurs tableaux en les concaténant -------------- */

const pizzas = featured.concat(speciality)
console.log(pizzas);

// const pizzas = pizzas.concat(featured);
// console.log(pizzas);
// ce ci ne fonctionne pas : Uncaught ReferenceError: Cannot access 'pizzas' before initialization

/* -------------------------------------------------------------------------- */



// pizzas.push('Vegetarian');
// console.log(pizzas);

// pizzas = pizzas.concat(speciality)

/* -------------------------------- avec flat ------------------------------- */
/* -------- permet de créer un nouveau tableau contenant les éléments ------- */
/* --- des sous-tableaux du tableau passé en argument, qui sont concaténés -- */
/* ----------- récursivement pour atteindre une profondeur donnée. ---------- */

// pizzas = [featured + "Vegetarian" + speciality].flat() //soluce Elian

/* -------------------------------------------------------------------------- */


/* ----------------------------- Avec ...Element ---------------------------- */

// pizzas = [...featured, "Vegetarian", ...speciality];

/* -------------------------------------------------------------------------- */



// let pizzasDuVendredi = pizzas;

// pizzasDuVendredi[0] = "Calzone";

let pizzasDuVendredi = [...pizzas]
console.log(pizzasDuVendredi);
pizzasDuVendredi[0] = "Calzone";
console.log(pizzasDuVendredi);

const mot = "spread";
let string = [...mot];
console.log(string);
// crée un tableau avec chaques lettre

console.log(pizzas);
console.log(pizzasDuVendredi);

//

const pizzaMerguez = {
    pizzaName: "Merguez Couscous",
    size: "Medium",
    ingredients: ["saucisse", "semoule", "harissa", "farine",]
}

const listeCourses = ["Pq", "liquide vaiselle", ...pizzaMerguez.ingredients];

console.log(listeCourses);

/* --------------------- Supprimer un élement d'un array -------------------- */

const comments = [
    { id: 123456, text: "Super, ton blog est génial !" },
    { id: 123789, text: "C'est vraaaiment intéressant ce que tu racontes" },
    { id: 789456, text: "J'aime des pizzas Merguez Couscous" },
    { id: 456789, text: "Tu racontes vraiment de la merde" },
    { id: 987654, text: "Poseeeeeeeeeeey" }
]

const num = 456789;

/* ------------------------------- findIndex() ------------------------------ */
/* ------------- renvoie l'indice du premier élément du tableau ------------- */
/* ---------- qui satisfait une condition donnée par une fonction. ---------- */

const commentIndex = comments.findIndex(comment => comment.id == num)
console.log(commentIndex);

const newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)]
console.log(newComments);

comments.splice(commentIndex, 1)
console.log(comments); // cette methode supprime totalement l'élement


/* ------------------------ Spread dans une fonction ------------------------ */

const inventeurs = ["Einstein", "Newton", "Galillée"]
const newInventeurs = ["Musk", "Jobs"]

inventeurs.push(...newInventeurs)
console.log(inventeurs);

function sayHi(prenom, nom, age = 20) {
    alert(`Hi à toi ${prenom} ${nom} de ${age} ans !`)
}

const personne = ["Anissa", "Belkheir"]

sayHi(...personne)
//sayHi("Anissa", "Belkheir")