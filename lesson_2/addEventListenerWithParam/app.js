window.addEventListener('DOMContentLoaded', init);

function buttonClick(name) {
    console.log(name)
}

function init() {
    let button = document.getElementById('abc-button');
    button.addEventListener('click', function () {
        buttonClick('Oksana');
    })
}