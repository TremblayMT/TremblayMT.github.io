//LocaltStorage https://melvingeorge.me/blog/save-arrays-objects-to-localstorage-javascript user: Melvin George
var carte = []
var image = 0
var compteur = '1'
function generation_cartes(){

    const COULEUR = ["d", "c", "h", "s"]
    const FIGURES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    for (let i = 0; i < COULEUR.length; i++){
        for (let j = 0; j < FIGURES.length; j++){
            carte.push(FIGURES[j]+COULEUR[i]+".gif");
        }
    }
    const jsonArr = JSON.stringify(carte)
    localStorage.setItem("array", jsonArr);
    
    for (let i = 0; i < carte.length; i++){
        repeter()
        image = image + 1
        if (i == carte.length - 1){
            image = 0
        }
   
    } 
}


function remove(){
    console.log(compteur)
    let img = document.createElement("img");
    let resultat = document.getElementById(compteur)
    img.src = carte[image]
    resultat.remove(img)


}


function brassage(){
    
    const str = localStorage.getItem("array");
    const parsedArr = JSON.parse(str);

    console.log(parsedArr)
    carte = []
    for (let i = 0; i < 26; i++){
        carte.push(parsedArr[i]);
        carte.push(parsedArr[(i+26)]);
        
    }
    console.log(carte)
    remove()
    compteur++

    for (let i = 0; i < carte.length; i++){
        repeter()
        image = image + 1
        if (i == carte.length - 1){
            image = 0
        }
    }
}   
    const jsonArr = JSON.stringify(carte)
    localStorage.setItem("array", jsonArr);
    
function repeter(){
    let img = document.createElement("img");
    let resultat = document.getElementById(compteur)
    img.src = carte[image]
    resultat.append(img)
    console.log(compteur)
    


}


