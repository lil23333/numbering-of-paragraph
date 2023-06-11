let p = document.querySelectorAll('p');
let btn = document.querySelector('#btn');

function func () {
    for (let i = 0; i < p.length; i++) {
        let n = i + 1;
        p[i].textContent = n + '' + p[i].textContent
    }
}
btn.addEventListener('click', func);
