// let chemin4Autres = "../../";
let changerInteret = () => {
    let selAutres = document.getElementById('selAutres');
    let choix = selAutres.options[selAutres.selectedIndex].value;
    switch (choix) {
        case "1" : {
            document.getElementById('iframe_autres').src = "a1.html";
            break;
        }
        case "2" : {
            document.getElementById('iframe_autres').src = "a2.html";
            break;
        }
        case "3" : {
            document.getElementById('iframe_autres').src = "a3.html";
            break;
        }
        case "4" : {
            document.getElementById('iframe_autres').src = "a4.html";
            break;
        }
        default: {
            break;
        }
    }
    // alert("Votre choix est : " + choix);
}

let a2_rand_col = () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    document.getElementById('a2').style.backgroundColor = rgb;
    document.body.style.backgroundColor = rgb;
    const r2 = randomBetween(0, 255);
    const g2 = randomBetween(0, 255);
    const b2 = randomBetween(0, 255);
    const rgb2 = `rgb(${r2},${g2},${b2})`;
    document.getElementById('a2').style.color = rgb2;
}