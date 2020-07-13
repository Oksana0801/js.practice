window.addEventListener('DOMContentLoaded', init);

let blackpanel,
    images;

function closeLightBox() {
    console.log(1);
    blackpanel.innerHTML = "";
    blackpanel.style.display = 'none';
    blackpanel.removeEventListener('click', closeLightBox);
}

function init() {
    blackpanel = document.getElementById('blackpanel');
    images = document.getElementsByClassName('myImage');
    console.log(images);
    for(let i = 0; i < images.length; i++){
         images[i].addEventListener('click', function () {
            blackpanel.style.display = 'flex';
            console.log(this.src);

            let bigImg = document.createElement('img');
            bigImg.src = this.src;
            bigImg.style.width = '70vw';
            bigImg.style.borderRadius = '4px';
            bigImg.style.margin = 'auto';

            blackpanel.appendChild(bigImg);

            blackpanel.addEventListener('click', closeLightBox);
         });
    }

}