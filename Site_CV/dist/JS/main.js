const item = document.querySelectorAll('.box ')


item.forEach(e => {
    e.addEventListener('click', view)

})

/* -------------------- fonction pour le slide up & down -------------------- */

function view(e) {
    e.stopPropagation()
    /* -------------------------------- selection ------------------------------- */
    const el = this;
    const p = el.querySelector('.expContent')
    const slide = el.querySelector('.slide .fas')
    const ville = el.querySelector('h4')

    let fas = el.classList.contains('right') ? "fa-caret-left" : "fa-caret-right"
    /* -------------------------------------------------------------------------- */


    /* --------------------------------- remove --------------------------------- */


    document.querySelectorAll('.slide .fas').forEach(item => {

        item.classList.remove('fa-sort-down')
        item.classList.add('fa-caret-right')
    });

    document.querySelectorAll('.right .slide .fas').forEach(item => {
        item.classList.remove('fa-caret-right')

        item.classList.add('fa-caret-left')
    })

    document.querySelectorAll('.exp p').forEach(item => {
        item.classList.remove('view')
        item.classList.add('hidden')
    })



    slide.classList.remove(fas)
    slide.classList.add('fa-sort-down')



    /* -------------------------------------------------------------------------- */


    /* ----------------- stopper le click le temps du setTimeOut ---------------- */

    // el.removeEventListener('click', view)

    /* -------------------------------------------------------------------------- */



    /* -------------------------------- animation ------------------------------- */



    if (p.classList.contains('hidden')) {
        p.classList.remove('hidden');
        p.classList.add('view');

        slide.classList.remove(fas)
        slide.classList.add('fa-sort-down')


    } else {
        p.classList.remove('view');
        p.classList.add('hidden');

        slide.classList.remove('fa-sort-down')
        slide.classList.add(fas)

    }


    setTimeout(function () {
        el.addEventListener('click', view)

    }, 300)


}
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */

/* ---------------------------- evenement scroll ---------------------------- */

let lastPosition = 0;
let ticking = false;
const box = document.querySelectorAll('.box')
const exp = document.querySelector('#exp')


function scrollEvent(position_scroll) {

    /* ------------------------------- expérience ------------------------------- */

    box.forEach(item => {
        // console.log(item);
        if (position_scroll >= item.offsetTop) {

            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0px)";
                item.style.transition = "all 0.6s ease";

            }, 1000);

            // console.log(item);
            // //console.log(item.querySelector('.slide'));
            // console.log('coucou');
            // console.log(position_scroll);
            // console.log(item.offsetTop);
        }
    })

    /* -------------------------------- progress -------------------------------- */



}

window.addEventListener('scroll', function (e) {
    lastPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            scrollEvent(lastPosition);
            ticking = false;
        });
    }

    ticking = true;
});