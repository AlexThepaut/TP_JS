function affProfile(profile) {
    var places = document.getElementById('container');
    var para = document.createElement('p');
    para.innerHTML = `<b>Login :</b>  ${profile['login']}`
        + `</br><b> Name : </b> ${profile['name']}`
        +`</br><b>Image : </b> <a href="repos.html"><img src="${profile['avatar_url']}"></a>`;
    places.appendChild(para);
}