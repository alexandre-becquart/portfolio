document.getElementById('btn').addEventListener('mouseenter', hoverEnter);
document.getElementById('btn').addEventListener('mouseleave', hoverLeave);
document.querySelector('#prev').addEventListener('click', prev);
document.querySelector('#next').addEventListener('click', next);

let spanPrev = document.querySelector('#prev')
let spanNext = document.querySelector('#next')
let newNum = document.querySelector('.num')

let num = parseInt(document.querySelector('.num').innerText)

console.log(num);


function hoverEnter() {
    spanPrev.innerText = "<";
    spanNext.innerText = ">";
}

function hoverLeave() {
    spanPrev.innerText = "";
    spanNext.innerText = "";
}

function next() {
    if (num >= 0) {
        num++
        newNum.innerText = num

        //console.log(num);
    }
}

function prev() {
    if (num == 0) {
        newNum.innerText = 0;
    } else {
        num--;
        newNum.innerText = num

    }
}
