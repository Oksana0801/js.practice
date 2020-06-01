window.addEventListener('DOMContentLoaded', init);

function SuperButton(name) {
    let that = this;
    this.name = name;
    this.show = function() {
         document.body.appendChild(this.buttonEl);
    }

    this.attachEvents_ = function() {
        this.buttonEl.addEventListener('click', this.buttonClick_);
    }

    this.buttonClick_ = function() {
        console.log(that.name);
        // console.log(this, that);
    }

    this.init_ = function() {
        this.buttonEl = document.createElement('div');
        this.buttonEl.className = 'abc-button';
        //this.buttonEl.style.display = 'block';

        let nameBut = document.createTextNode(this.name);
        this.buttonEl.appendChild(nameBut);

        this.attachEvents_();
    }
    this.init_();
}
 function range(n){
    let a = [];
    for(let i = 0; i <= n; i++){
        a.push(i);
    }
    return a
 }

function init() {
    // let button = new SuperButton('knopka');
    // button.show();
    range(1500).filter(x => x % 2 == 1)
                  .map(x => (new SuperButton(x)).show());
}
