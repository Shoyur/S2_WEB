// --------------------------------------------------------------------------------------------
// JSON (Javascript Object Notation) :
// 
// [] tableau indicé
// ex: 
// let tab = [2, 4, 6, 8];
// 
// {} objet
// ex: 
// let obj {"titre":"Le soleil couchant", "pages":350, "categorie":"jeunesse"};
// 
// Javascript ne fait pas de différence entre "" et ''.
// 
// let tabObj = [{"a":1, "b":2}, {"a":3, "b":4}, {"a":5, "b":6}];
// est l'exemple d'une micro base de données :
//      tabObj
//      a    b
//      1    2
//      3    4
//      5    6
// 
// ------------------------------------
// 
// Si il se met à y avoir beaucoup d'imbrication, ça devient plus facile
// de s'y retrouver dans le XML ->
// 
// En technologie XML :
//      <listeObjs>
//          <obj>
//              <a>1</a>
//              <b>2</b>
//          </obj>
//          <obj>
//              <a>3</a>
//              <b>4</b>
//          </obj>
//          <obj>
//              <a>5</a>
//              <b>6</b>
//          </obj>
//      </listeObjs>
// 
// --------------------------------------------------------------------------------------------
let membres = [
    {"id":1, "prenom":"Marie", "nom":"Curie", "sexe":"F", "daten":"1867-10-10"},
    {"id":2, "prenom":"Jam", "nom":"Bon", "sexe":"F", "daten":"1967-12-25"}
];

// Fonction fléchée (arrow function, lambda)

let enregistrerMembre = () => {
    
}
function clignoter() {
    let header = document.getElementById('modal-header');
    let body = document.getElementById('modal-body');
    if (test1 == true) {
        document.getElementById('formEnregErreur').innerHTML = msgErreur;
        header.style.backgroundColor = "#FF0000";
        body.style.backgroundColor = "#FF0000";
        test1 = false;
    }
    else {
        document.getElementById('formEnregErreur').innerHTML = "<br>"
        header.style.backgroundColor = "#FFFFFF";
        body.style.backgroundColor = "#FFFFFF";
        test1 = true;
    }
}

var test1 = true;
let msgErreur = "";

let validerFormEnreg = () => {
    let valide = true;
    msgErreur = "";
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    if (pass !== cpass) {
        msgErreur += "Les mots de passe sont différents! <br>";
        valide = false;
    }
    if (valide) { enregistrerMembre(); }
    else {

        flashExclam = setInterval(() => {
            clignoter();
        }, 250);

        setTimeout(() => {
            clearInterval(flashExclam);
            document.getElementById('formEnregErreur').innerHTML="";
        }, 1250);

        setTimeout(() => {
            clearInterval(flashExclam);
            document.getElementById('formEnregErreur').innerHTML=msgErreur;
        }, 1251);

        
        setTimeout(() => {
            document.getElementById('formEnregErreur').innerHTML="";
        }, 3000);


    }
    
}