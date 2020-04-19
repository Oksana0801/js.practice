//================== SELECT
function foo1(){
    let sel = document.getElementById('mySelect').selectedIndex;
    let options = document.getElementById('mySelect').options;
    alert(`Выбрана функция ${options[sel].text}`);
}


// ================== RANGE
    function foo2() {
        let ran = document.getElementById('r1').value;
        let p = document.getElementById('one');
        let i1 = document.getElementById('i1');
        p.innerHTML = ran; // альтернатива <input type = 'text'>
        i1.value = ran;
        let div = document.getElementById('test');
        div.style.width = ran + 'px';
}

