const req = new XMLHttpRequest();
req.onreadystatechange = function (event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            console.log("Réponse reçu: %s", this.responseText);
            var reponse = JSON.parse(this.responseText)
            console.log(reponse);
            affProfile(reponse)
        } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            return null;
        }
    }
};