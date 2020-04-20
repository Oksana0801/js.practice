// Коллекция ссылок
let links = new Object();
//      text               value
links['yandex'] = 'http://www.yandex.ru';
links['rambler'] = 'http://www.rambler.ru';
links['google'] = 'http://www.google.ru';

//Добавляем option in select

let s = document.myForm.selURL;
for(let linkName in links){
    let o = new Option();
    o.value = links[linkName];
    o.text = linkName;
    try{
        s.add(o, null);
    }catch (e) {
        s.add(o);
    }
}
// сделать все элементы формы доступными

let f = document.myForm;
for(let i = 0; i < f.elements.length; i++){
    f.elements[i].disabled = false;
}
let l = document.links[0].style.visibility = 'visible';

function goToURL() {
    let s = document.myForm.selURL;
    let url = s.options[s.selectedIndex].value;
    location.assign(url);
}