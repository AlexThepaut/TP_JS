var nom = 'Global';
function sayHello() {
    var nom = 'Alex';
    console.log('Nom : ', nom);
}
sayHello();
console.log('Nom : ', nom);

var contacts = [
    { nom: "Alex", prenom: "Thepaut" },
    { nom: "Laurent", prenom: "Martins" }
];

(function (window) {
    function recupContacts(c){
        for (let i = 0; i < contacts.length; i++) {
            console.log(c[i]);
        }
    }
    window.recupContacts = recupContacts;
})(window);