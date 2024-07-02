const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
//slide menu button
if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}
//remove slide menu button
if (close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}
