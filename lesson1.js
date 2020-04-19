//================== INPUT CHECKBOX
function foo1(){
    let chbox;
    chbox = document.getElementById('one');

    if(chbox.checked){
        alert('SELECTED');
    } else {
        alert('DON\'T SELECTED');
    }
}

// ================== RADIO
function foo2() {
    let radio = document.getElementsByName('r1');
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked) {
            alert(`Вы выбрали ${i + 1} элемент`);
        }
    }
}