var app = {
    init: function () {
        console.log('Document title: ', document.title);
        document.title = 'Nouveau titre';
        console.log('Document title: ', document.title);
    }
};
app.init();

var title = document.getElementById('title');
title.addEventListener('click', function () {
    var zoneTexte = document.getElementById('textAjout');
    var newPara = document.createElement('p');
    newPara.innerText = "Coucou";
    zoneTexte.appendChild(newPara);
});

var title2 = document.getElementById('title-2');
title2.addEventListener('click', function () {
    var node = document.getElementById('textAjout');
    // while (node.hasChildNodes()) {
    //     node.removeChild(node.lastChild);
    // }
    var childNodes = node.childNodes.length;
    for (let ii = 0; ii < childNodes; ii++) {
        node.removeChild(node.lastChild)
    }
});

var paragraphe = document.getElementById('paragraphe');
paragraphe.addEventListener('mouseover', function (event){
    toggleColor.call(this, event);
});

var p = document.createElement("p");
document.body.appendChild(p);

function toggleColor(event){
    if(event.x < (window.innerWidth/2)){
        console.log("GAUCHE");
        this.classList.add("text-red");
    }else{
        console.log("DROITE");
        this.classList.remove("text-red");
    }
}