/// CRÉER UNE STATION SERVICE AVEC UNE CAPACITÉ MAX

// VOUS ALLER CRÉÉ UN VÉHICULE
// AVEC UNE QUANTITÉ D'ESSENCE DANS LE RESERVOIR
// ET UNE CAPACITÉ MAX

// VOUS DEVREZ FAIRE LE PLEIN DANS LA STATION SERVICE DE VOTRE VÉHICULE
// ET PART CONSÉQUENT FAIRE DIMINUER LA CAPCITÉ RESTANTE DE LA STATION SERVICE

// EX : 

// STATION SERVICE : 800L
// VEHICULE 1 : CAPACITÉ MAX DE 70L ET QUI ACTUELLEMENT A 35L
// APRÈS AVOIR FAIT LE PLEIN, VOTRE STATION SERVICE IL LUI RESTERA 800 - 35L = 765L;

// APRÈS ON AURA DES VÉHICULES EN FIL INDIENNE (DANS UN ARRAY)
// [ { name : "vehicule1", max : 80, actualGaz : 35 } ]
// ET FAUDRA TOUS LEUR FAIRE LE PLEIN ET FAIRE EVOLUER LA CAPACITÉ MAX DE LA STATION SERVICE
// ET POURQUOI AFFICHER UN MSG SI PLUS D'ESSENCE DANS LA STATION
/*

let StationService = {
    capacityMax : 800,
    reste : 800
};


let vehicule = 
[
{ name : "vehicule1", max : 80, actualGaz : 35 } ,
{ name : "vehicule2", max : 80, actualGaz : 35 }, 
{ name : "vehicule3", max : 80, actualGaz : 35 } ,
{ name : "vehicule avec roux de secours", max : 80, actualGaz : 35 },
];

function faireLePlein(station, vehicule) {
let essenceNecessaire =  vehicule.max - vehicule.actualGaz;
station.reste = station.reste - essenceNecessaire;

if(station.reste >= 0){
    vehicule.actualGaz = vehicule.max;
    console.log("Le plein à été effectué pour" + vehicule.name +"La station a maintenant" + station.reste + "litres restants");
}else{
    console.log("Plus d'essence dans la station");
}
}
for (let i = 0; i < vehicule.length; i++) {
    faireLePlein(StationService, vehicule[i]);
    
}*/
    




/// CRÉER UNE STATION SERVICE AVEC UNE CAPACITÉ MAX

// VOUS ALLER CRÉÉ UN VÉHICULE
// AVEC UNE QUANTITÉ D'ESSENCE DANS LE RESERVOIR
// ET UNE CAPACITÉ MAX

// VOUS DEVREZ FAIRE LE PLEIN DANS LA STATION SERVICE DE VOTRE VÉHICULE
// ET PART CONSÉQUENT FAIRE DIMINUER LA CAPCITÉ RESTANTE DE LA STATION SERVICE

// EX : 

// STATION SERVICE : 800L
// VEHICULE 1 : CAPACITÉ MAX DE 70L ET QUI ACTUELLEMENT A 35L
// APRÈS AVOIR FAIT LE PLEIN, VOTRE STATION SERVICE IL LUI RESTERA 800 - 35L = 865L;

// APRÈS ON AURA DES VÉHICULES EN FIL INDIENNE (DANS UN ARRAY)
// [ { name : "vehicule1", max : 80, actualGaz : 35 } ]
// ET FAUDRA TOUS LEUR FAIRE LE PLEIN ET FAIRE EVOLUER LA CAPACITÉ MAX DE LA STATION SERVICE
// ET POURQUOI AFFICHER UN MSG SI PLUS D'ESSENCE DANS LA STATION

let gazStation = {
    max : 800,
    fillUpTheTank : function(car) {
        console.log("Je fais le plein au véhicule :" + car.name);
        console.log("Il reste maintenant " + this.max + "L dans ma station service !");

 // décrémenter le nombre de litre de la station
 this.max -= car.max - car.litter; //this.max = this.max - (car.max - car.litter);

        // faire le plein du véhicule
    car.litter = car.max;
       
    }
    
};

let vehicule1 = {
    name : "Ferrari",
    max : 70,
    litter : 35
};


let vehicule2 = {
    name : "Twingo 2",
    max : 80,
    litter : 25
};

let vehicule3 = {
    name : "Audi A6 reak",
    max : 90,
    litter : 55
};

let vehicule4 = {
    name : "Lamborghini",
    max : 200,
    litter : 25
};

let listVehicules = [vehicule1, vehicule2];

// foreach
listVehicules.forEach((vehicule) => {
    gazStation.fillUpTheTank(vehicule);
});

// while
let i = 0;
while(i < listVehicules.length) {
    gazStation.fillUpTheTank(listVehicules[i]);
    i++;
}

//for
for(let i = 0; i < listVehicules.length; i++) {
    gazStation.fillUpTheTank(listVehicules[i]);
}