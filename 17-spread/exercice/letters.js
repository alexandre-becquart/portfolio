/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Spread                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

/* ------------------------------- Ma méthode ------------------------------- */

// let titre = document.getElementsByClassName('jump')[0]

// let lettre = titre.innerHTML.split('').map(item => `<span>${item}</span>`).join('')

// titre.innerHTML = lettre

// console.log(lettre);

/* -------------------------------------------------------------------------- */


/* ------------------------------- Correction ------------------------------- */

//je vais récupérer le texte et je le découpe en lettre dans un array

/* -------------------------------- methode 1 ------------------------------- */

// //const lettres = document.querySelector('h2').innerHTML

/* -------------------------------- Methode 2 ------------------------------- */

// //const lettres = Array.from(document.querySelector('h2').innerHTML)

/* -------------------------------- Methode 3 ------------------------------- */

// const lettres = [...document.querySelector('h2').innerHTML]
/* -------------------------------------------------------------------------- */

// const nouvellePhrase = lettres.map(item => `<span>${item}</span>`).join('')
// document.querySelector('h2').innerHTML = nouvellePhrase

/* -------------------------------------------------------------------------- */
/*                                 AVEC SPREAD                                */
/* -------------------------------------------------------------------------- */

//console.log([...document.querySelector('h2').innerHTML]);

document.querySelector('h2').innerHTML = [...document.querySelector('h2').innerHTML].map(item => `<span>${item}</span>`).join('')