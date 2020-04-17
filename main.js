// function fun1 (){
//     let chbox;
//     chbox = document.getElementById('one');
//
//     if(chbox.checked){
//         alert('SELECTED');
//     } else {
//         alert('DON\'T SELECTED');
//     }
// }

function fun2() {
    let radio = document.getElementsByName('r1');
    for (let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            alert(`Selected ${i+1} item`);
        }
    }
}