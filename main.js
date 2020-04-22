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

function oddNumbers(a, b) {
    for (let i = a; i <=b; i++){
        if (i%2 !== 0){
            console.log(i);
        }
    }
}
//oddNumbers(2,6);

function dividedBy3(a, b) {
    for (let i = a; i <=b; i++){
        if (i%3 == 0){
            console.log(i);
        }
    }
}
//dividedBy3(2,6);

function fbn(a, b){
    let f = 0,
        f1 = 1,
        f2 = 2;
   for(let i = 0; i <= b; i++){
       f = f1 + f2;
       f1 = f2;
       f2 = f;
       if( f >= a && f <= b){
           console.log(f)
       }
   }
}
//fbn(5,39);

// function simple(a, b){
//     for(let i = a; i <= b; i++){
//         if( i > 2 && i % 2 == 0 ) continue;
//
//     }
// }
//
// simple(2,10);

function foo() {
    console.log("вызвана функция foo");
    foo2();
}

function foo2() {
    console.log('вызвана функция foo2');
}

//foo();