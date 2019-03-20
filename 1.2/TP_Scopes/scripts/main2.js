console.log('Nom fichier js 2', nom);

function sayHello() {
    var nom = 'Alex 2';
    console.log('sayHello fichier js 2', nom);
}

nom = 'Nom global à changer';

sayHello();
console.log('Nom :', nom);



window.recupContacts(contacts);