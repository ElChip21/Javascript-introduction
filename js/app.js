///
/// ITÉRATIONS/BOUCLE/LOOP
///

//
// FOR
//

// départ let i = 1;
// condition i <= 10;
// incrémentation i++ (+1)

// utilisée quand on connait le nombre d'itération
for(let i = 1; i <= 10; i += 2) {
    // le code qui va être répété
    console.log("boucle n° " + i);
}

// camelCase
// un array (un tableau)
let monTableau = ["text", 27, true, ["France", "Pays-Bas", "Belgique"]];
let myArray = ["sam@mail.com", "boris@mail.com", "fab@mail.com", "mazu@mail.com"]; // 4 éléments

console.log(myArray[0]); // sam@mail.com
console.log(myArray[1]); // boris@mail.com
console.log(myArray[3]); // mazu@mail.com

myArray.push("meriem@mail.com"); // ajouter un élement
myArray.push("morgan@live.fr");

for(let i = 0; i < myArray.length; i++) {
    console.log("Email envoyé à " + myArray[i]);
}

//
//WHILE
//

// départ let i = 1;
// condition i <= 10;
// incrémentation i++ (+1)

// => on l'utilise quand on sait pas combien de fois l'itération va durer

let i = 1;
while(i <= 10) {
    console.log("Boucle n°" + i);
    i++;
}

i = 0;
while(i < myArray.length) {
    console.log("Email envoyé à" + myArray[i]);
    i++;
}
let answer; // définis sans valeur

while(true) {

   let answer = promp("your command > ");

   if(answer == "q") {
        console.log("Exit");
        // faudrait que j'arrête la boucle (le programme)
    } else if( answer == "s") {
        console.log("Save");
        // faudrait que j'arrête la boucle (le programme)
    } else {
        console.log("Commande inconnue");
    }

}
