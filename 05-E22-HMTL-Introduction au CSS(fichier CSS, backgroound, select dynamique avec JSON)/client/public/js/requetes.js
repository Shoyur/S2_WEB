let listePays=null;
//ES6
let chargerPays = () => {
    fetch('serveur/donnees/countries.json')
    .then(reponse => reponse.json())
    .then(listeJSON => {
        listePays=listeJSON;
        injecterPaysDansSelect();
    });
}

let injecterPaysDansSelect = () => {
  let selPays = document.getElementById('idpays');
  for(let unPays of listePays){
      selPays.options[selPays.options.length] = new Option(unPays.name, unPays.code);
  }
}