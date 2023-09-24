"use strict";

let prenom= "John";
let nbrfeuxrouges= 0;
let musiques= ["Anissa - Wejdene", "chiquitita - ABBA", "National Anthem - Lana del Rey", "Despacito - Luis Fonsi", "After hours - The Weeknd"];
let santementale= 10;
let nbTaxis = 0;
 
function choisirMusique(){
   let choixMusique = musiques[Math.floor(Math.random() * 5)];
if (choixMusique === "Anissa - Wejdene") {
    santementale -= 1;
    nbTaxis += 1;
}
nbrfeuxrouges +=1;
return choixMusique;
}

while (santementale > 0 && nbrfeuxrouges < 30) {
    let musique = choisirMusique();
    console.log(`John a choisi la musique ${musique}. Santé mentale actuelle : ${santementale}`);
  }
if (santementale <= 0) {
    console.log("John a explosé.");
  } else {
    console.log("John a terminé le trajet avec une santé mentale finale de : " + santementale);
  }

  console.log(`Nombre de taxis pris : ${nbTaxis}`);