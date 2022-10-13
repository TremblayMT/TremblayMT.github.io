//LocaltStorage https://melvingeorge.me/blog/save-arrays-objects-to-localstorage-javascript user: Melvin George
var carte = []
var image = 0
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
    let img = document.createElement("img");
    let resultat = document.getElementById('resultat')
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
        carte.push(parsedArr[(25+i)]);
        
    }console.log(parsedArr.lenght)
    console.log(carte)
    remove()
    for (let i = 0; i < carte.length; i++){
        repeter_brassage()
        image = image + 1
        if (i == carte.length - 1){
            image = 0
        }
    }
}

function repeter(){
    let img = document.createElement("img");
    let resultat = document.getElementById('resultat')
    img.src = carte[image]
    resultat.append(img)


}
function repeter_brassage(){
    let img = document.createElement("img");
    let intercoupe = document.getElementById('intercoupe')
    img.src = carte[image]
    intercoupe.append(img)
}


/*}

def brassage(cartes):

    moitie_deck = len(cartes) // 2

    
    nouveau_paquet = []
    
    paquet_tmp_1 = cartes[:moitie_deck]
    paquet_tmp_2 = cartes[moitie_deck:]

    for i in range(moitie_deck):
        nouveau_paquet.append(paquet_tmp_1[i])
        nouveau_paquet.append(paquet_tmp_2[i])

function affichage(){

    row_size = len(cartes) // 4
    for i, carte in enumerate(cartes):
        
        print(f"{carte:<4}", end="")
        if(i%row_size == row_size-1):
            print()

    for i in range(4):
        for j in range(row_size):
            print(cartes[i*row_size+j], end="\t")
        print()
}
 '*/