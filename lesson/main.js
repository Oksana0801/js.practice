// // cozdaem strochnyj element
// let element = document.createElement('span');
//
// // create textovyj uzel;
// let text = document.createTextNode('My text');
//
// //app text in str element
// element.appendChild(text);
//
// //app element in <body>
// //document.body.appendChild(element);
// function fib(n){
//     if ( n == 0 ) return 0;
//     if (n == 1) return 1;
//     return fib(n-2) + fib(n-1);
// }
//
//
// function getTable (size) {
//     // let arrFib = [];
//     // for(let i = 0; i <= size; i++){
//     //     if(fib(i) > size) break;
//     //     arrFib.push(fib(i));
//     // }
//
//     let table = document.createElement('table');
//     for (let i = 1; i <= size; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 1; j <= size; j++) {
//             let td = document.createElement('td');
//                 td.appendChild(document.createTextNode(j * i));
//                 //td.appendChild(document.createTextNode(`${j} x ${i} = ${j * i}`));
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     return document.body.appendChild(table);
// }
//
// //getTable(5);
// document.write('<br>');
// //getTable(10);
// document.write('<br>');
// //getTable(50);
//
// function GetTabMult() {
//     let show = getTable;
// }
//
// function Circle( id, r, color = 'red') {
//     this.color = color;
//     this.element = document.getElementById(`${id}`);
//     this.createCir__ = function(){
//         this.circleEl = document.createElement('div');
//         this.circleEl.style.width = `${r * 2}px`;
//         this.circleEl.style.height = `${r * 2}px`;
//         this.circleEl.style.borderRadius = '50%';
//         this.circleEl.style.margin = 'auto';
//         this.circleEl.style.backgroundColor = this.color;
//     }
//     this.show = function(){
//         this.element.appendChild(this.circleEl);
//     }
//     this.createCir__();
//
// }
// let pCir = new Circle('one',50, 'pink');
// let bCir = new Circle('one',40, 'blue');
// pCir.show();
// bCir.show();
//
// function Triangle(w, h, color) {
//     this.w = w;
//     this.h = h;
//     this.color = color;
//     this.init__ = function(){
//         this.triangleEl = document.createElement('div');
//         this.triangleEl.style.width = '0';
//         this.triangleEl.style.height = '0';
//         this.triangleEl.style.border = `${this.w / 2}px solid transparent`;
//         this.triangleEl.style.borderBottom = `${this.h}px dotted ${this.color}`;
//     }
//     this.show = function(){
//         document.body.appendChild(this.triangleEl);
//     }
//     this.setDirection = function (direction){
//         switch (direction) {
//             case 'up' : this.triangleEl.style.transform = 'rotate(0deg)';
//             break;
//             case 'right' : this.triangleEl.style.transform = 'rotate(90deg)';
//             break;
//             case 'down' : this.triangleEl.style.transform = 'rotate(180deg)';
//             break;
//             case 'left' : this.triangleEl.style.transform = 'rotate(270deg)';
//         }
//     }
//     this.init__();
// }
//
// let t = new Triangle(150, 150, 'orange');
// t.show();

// obrabotka sobytij
// on Click
function generateColor() {
    return "#" + Math.floor(Math.random() * 16222715).toString(16);
}
let flag = 0;

function boxClick(){
    switch(flag){
        case 0: this.style.backgroundColor = generateColor();
            break;
        case 1: this.style.borderRadius = "10px";
            break;
        case 2: this.style.background = `linear-gradient( 45deg, ${generateColor()} 30%, ${generateColor()} 60%, ${generateColor()} 100% )`;
            break;
        case 3: this.style.boxShadow = `0 0 20px rgba(0, 0, 0, 0.5)`;
            break;
        case 4: this.style.borderRadius = `50%`;
            break;
    }
    flag++;
}

let box = document.getElementById('box');

// подписываем box на событие click

box.addEventListener('click', boxClick);