///
/// DEVINER UN CHIFFRE SECRET
///

// géner un chiffre secret de manière aléatoire entre 1 et 10 (Math)
// donner 3 chances à votre utilisateur de trouver ce chiffre (prompt)
// si il trouvre avant de griller ses 3 chances => la partie est gagnée (afficher une alerte)
// si il trouvre pas avant de griller ses 3 chances => la partie est perdue (afficher une alerte)
// si le chiffre donné est plus petit que le chiffre secret => fait lire chifre trop petit
// si le chiffre donné est plus grand que le chiffre secret => fait lire chiifre trop grand

function game() {

    let random = Math.floor(Math.random() * 10) + 1;
    let nbrChances = 3;
    let hasWon = false;
    
    while(nbrChances > 0) {
    
        let answer = prompt("Doonne moi un chiffre en 1 et 10");
    
        if(isNaN(answer)) {
            alert("My man, j'ai besoin d'un chiffre !");
            continue;
        }
    
        if(answer < 1 || answer > 10) {
            alert("Mec, chiffre erroné !");
            continue;
        }
    
        nbrChances--;
    
        if(answer == random) {
            alert("Bien joué t'as gagné !");
            hasWon = true;
            break;
        } else if(answer < random){
            alert("ton chiffre est trop petit! il vous reste " + nbrChances + " chances !");
        } else {
            alert("ton chiffre est trop grand! il vous reste " + nbrChances + " chances !");
        }
        
    }
    
    // if(hasWon == false) {
    if(!hasWon) {
        alert("HAHAHA! looser");
    }

    let replay = confirm("Do you wanna play again?");
    // if(confirm("Do you wanna play again?") == true) {
    // if(replay) {
    if(replay) {
        game(); // fonction récursive
    }


}

game();