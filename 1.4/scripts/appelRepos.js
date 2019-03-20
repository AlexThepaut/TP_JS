function affProfile(repos) {
    var places = document.getElementById('container');
    for (let i = 0; i < repos.length; i++) {
        let para = document.createElement('p');
        para.innerHTML = `<b>Repos ${i+1} :</b>  ${repos[i].name}`;
        places.appendChild(para);
    }
}