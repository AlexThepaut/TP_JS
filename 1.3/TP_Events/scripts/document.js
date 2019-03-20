var app = {
    init: function () {
        console.log('Document title: ', document.title);
        document.title = 'Nouveau titre';
        console.log('Document title: ', document.title);
    }
};
app.init();

var title1 = document.getElementById('title');
// Choix 1
title1.addEventListener('click', function () {
    alert('Hello title 1');
})
// Choix 2
title1.onclick = function () {
    alert('Hello title 1');
}

var paragraphe = document.getElementById('paragraphe');
paragraphe.addEventListener('mouseover', function (event){
    if(event.x < (window.innerWidth/2)){
        console.log("GAUCHE");
    }else{
        console.log("DROITE");
    }
});

var p = document.createElement("p");
document.body.appendChild(p);