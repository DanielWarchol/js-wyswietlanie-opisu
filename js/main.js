let btn = document.querySelector('button');
let paragraf = document.getElementById('opis');

btn.onclick = function(){
    paragraf.textContent = 'Wyświetliłeś ten opis !';
}