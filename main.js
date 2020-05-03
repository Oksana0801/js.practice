// // Коллекция ссылок
// let links = new Object();
// //      text               value
// links['yandex'] = 'http://www.yandex.ru';
// links['rambler'] = 'http://www.rambler.ru';
// links['google'] = 'http://www.google.ru';
//
// //Добавляем option in select
//
// let s = document.myForm.selURL;
// for(let linkName in links){
//     let o = new Option();
//     o.value = links[linkName];
//     o.text = linkName;
//     try{
//         s.add(o, null);
//     }catch (e) {
//         s.add(o);
//     }
// }
// // сделать все элементы формы доступными
//
// let f = document.myForm;
// for(let i = 0; i < f.elements.length; i++){
//     f.elements[i].disabled = false;
// }
// let l = document.links[0].style.visibility = 'visible';
//
// function goToURL() {
//     let s = document.myForm.selURL;
//     let url = s.options[s.selectedIndex].value;
//     location.assign(url);
// }
// let sum = 0;
// for(let i = 1; i <= 10; i++ ){
//     sum +=i;
// }
// console.log(sum);
//
// function foo(a, b) {
//     a = Math.floor(a);
//     b = Math.floor(b);
//     if(typeof(a) == 'number' && typeof(b) == 'number'){
//         if(a>b){
//             for (let i = a; i >= b; i--) {
//                 console.log(i);
//             }
//         } else {
//             for (let i = a; i <= b; i++) {
//                 console.log(i);
//             }
//         }
//     } else {
//         console.log('Введите числа');
//     }
// }
//
// foo(2.3, 5);
//
// function oddNumbers(a, b) {
//     for (let i = a; i <=b; i++){
//         if (i%2 !== 0){
//             console.log(i);
//         }
//     }
// }
// //oddNumbers(2,6);
//
// function dividedBy3(a, b) {
//     for (let i = a; i <=b; i++){
//         if (i%3 == 0){
//             console.log(i);
//         }
//     }
// }
// //dividedBy3(2,6);
//
// function fbn(a, b){
//     let f = 0,
//         f1 = 1,
//         f2 = 2;
//    for(let i = 0; i <= b; i++){
//        f = f1 + f2;
//        f1 = f2;
//        f2 = f;
//        if( f >= a && f <= b){
//            console.log(f)
//        }
//    }
// }
// //fbn(5,39);
//
// // function simple(a, b){
// //     for(let i = a; i <= b; i++){
// //         if( i > 2 && i % 2 == 0 ) continue;
// //
// //     }
// // }
// //
// // simple(2,10);
//
// function foo() {
//     console.log("вызвана функция foo");
//     foo2();
// }
//
// function foo2() {
//     console.log('вызвана функция foo2');
// }
//
// //foo();
//
// function showRect() {
//     document.write(`<div id="rect"> </div>`);
// }

//showRect();
// function createRGB(){
//     return `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
// }
// function showCircles(r){
//         let str = `<div style="width: ${r*2}px; height: ${r*2}px; border-radius: 100%; background: ${createRGB()}"> </div>`;
//         document.write(str);
// }
//
// for(let i = 50; i < 150; i++){
//     showCircles(i);
// }
//
// function rects(w, h, c){
//     let rect = `<div style="width:${w}px; height:${h}px; background: ${c}"></div>`;
//     document.write(rect);
// }
// ====================    OBJECT
// const kesha = {
//      name : 'Кеша',
//     voice : function () {
//         console.log(`My name is ${this.name}`);
//     },
//     setAge : function (age) {
//          this.myAge = age;
//     },
//
//     howOldAreYou : function () {
//     console.log(`I'm ${this.myAge} years old`);
//     }
// };
// kesha.voice();
// kesha.setAge(6);
// kesha.howOldAreYou();

// let arrNum = [];
// for(let i = 50; i <= 150; i++){
//     if(i % 2 !== 0){
//         arrNum.push(i);
//     }
// }
// //console.log(arrNum);
// function isPolindrom(num){
//     if(num === Number(num.toString().split("").reverse().join(""))){
//         return true;
//     }
//     return false;
// }
//
// let arrPLD = [];
// for(let i = 1; i <= 1001; i++){
//    if(isPolindrom(i)){
//        arrPLD.push(i);
//    }
// }
// console.log(arrPLD);

// function Bird (n){
//     this.name = n;
// }
//
// let kesha = new Bird('Кеша');
//
// console.log(kesha);
//
// function Rectagle(w, h) {
//     this.width = w;
//     this.height = h;
//     this.color = createRGB();
//     this.show = function() {
//         document.write(`<div style = 'width : ${this.width}px; \
//                                       height : ${this.height}px; \
//                                       background : ${this.color}'></div> \
//                                       <br/>`)
//     }
// }
//
// let blueRec = new Rectagle(150, 100, 'blue');
// let redRec = new Rectagle(100, 50, 'red')
//
// blueRec.show();
// redRec.show();
//
// function range(n){
//     let array = [];
//     for(let i = 0; i < n; i++){
//         array.push(i);
//     }
//     return array;
// }
//
// range(20).map(function () {
//     let box = new Rectagle(100, 50);
//     box.show();
// })

// =================================================== LESSON 3 =====================================================
// наследование и проттотипы
// function Bird (){
//     this.whatIsYourName = function (){
//         console.log(`My name is ${this.name}`);
//     }
// }
// Bird.prototype.setName = function (n) {
//     this.name = n;
// }
//
// function Parrot (){
//     this.canSpeak = true;
// }
// Parrot.prototype = new Bird();
//
// let kesha = new Parrot();
// kesha.setName('Кеша');
// kesha.whatIsYourName();
// console.log(kesha);
//
// class Bird {
//     constructor(n) {
//         this.voice = n;
//     }
//     howYouSpeak(){
//         console.log(`I speak ${this.voice}`);
//     }
// }
//
// let kesha = new Bird('Chik-chirik');
// kesha.howYouSpeak();
// console.log(kesha);
