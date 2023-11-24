///
/// Fonctions
///


// déclarer

function mazu() {
    console.log("Je fais 100 pompes en 30 secondes (genre)");
}


mazu();


function squareNumber(myNumberToSquare) { // via un argument
    console.log(myNumberToSquare * myNumberToSquare);
}


squareNumber(4); // 4 est un paramétre
squareNumber(91);
squareNumber(122);

function multiplication(nbr1, nbr2) {
    
console.log(nbr1 * nbr2);

}

multiplication(4, 10);



function htToTTC(ht, tva){

    return ht * tva;

}

let ttc = htToTTC(100, 1.2);




///
/// LES OBJETS
///


let muazu = {
    firstName : "Muazu",
    lastNamee : "Suzuki",
    hobbies : ["Musculation", "Nigeria", "Sport", "Cinema"],
    parler : function() {
        console.log("Ouais, je fais 100 pompes, 30 tractions");
    },

    sport : function(sport) {
    console.log("Je pratique le" + sport);       
    },

presente : function() {
    console.log("Bonjour je m'appelle" + this.firstName + " " + this.lastName);
},
    languages : {
        african : ["Nigerian"],
        asiatic : ["japonais"],
        arabe : ["Arabe"],
        anglais : ["Americain", "Texan"]
    }
};






console.log(muazu.firstName);
document.write("<h1>" + muazu.firstName + "</h1>")
muazu.parler();
muazu.parler("acqua gym pour les hommes sensibles");
console.log(muazu.hobbies[3]); // Cinema
console.log(muazu.languages.anglais[1]); // texan





