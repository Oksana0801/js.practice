let start = document.getElementById('start');
let p = document.createElement('p');
let text = document.createTextNode('jQuery НАЧАЛО');
p.style.color = 'red';
p.style.fontSize = '36px';
p.appendChild(text);
start.appendChild(p);

$(function () {
    console.log($('li'));
});

