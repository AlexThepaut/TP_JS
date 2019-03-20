var formationJS = {
    nom: 'Module JavaScript',
    langage: 'JavaScript',
    dateDebut: '01/09/2017',
    dateFin: '05/09/2017',
    stagiaires: [{
        nom: 'Nom Exemple',
        prenom: 'Prenom Exemple'
    }],
    description: function() {
        return `${this.nom} du ${this.dateDebut} au ${this.dateFin}`
    }
}

formationJS.formateur = {
    nom: "Hodicq",
    prenom: "Nicolas"
};

console.log(formationJS.description());
console.log(`Langage : ${formationJS.langage}, formateur : ${formationJS.formateur.prenom} ${formationJS.formateur.nom}`);

delete formationJS.stagiaires;

function Formation (nom, langage, dateDebut, dateFin){
    this.nom = nom;
    this.langage = langage;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
}

var formation = new Formation('Module JavaScript', 'JavaScript', '01/09/2017', '05/09/2017');
console.log(`${formation.nom} du ${formation.dateDebut} au ${formation.dateFin}`);

function Personne(nom, prenom, age){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
}

function Stagiaire(nom, prenom, age, connaissance){
    Personne.call(this, nom, prenom, age);
    this.connaissance = connaissance;
}

Stagiaire.prototype = new Personne();
Stagiaire.prototype.constructor = Stagiaire;

var stagiaire1 = new Stagiaire("Alex", 'Thepaut', 21, 'WEB');
console.log(stagiaire1 instanceof Stagiaire)
console.log(stagiaire1 instanceof Personne)