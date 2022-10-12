var carte = []
function generation_cartes(){
    var img = document.createElement("img");
    let resultat = document.getElementById('resultat')
    const COULEUR = ["d", "c", "h", "s"]
    const FIGURES = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    for (let i = 0; i < COULEUR.length; i++){
        for (let j = 0; j < FIGURES.length; j++){
            carte.push(FIGURES[j]+COULEUR[i]+".gif");
        }
    }
    for (let i = 0; i < carte.length; i++){
        img.src = carte[i]
        resultat.append(img);  
    }
   
}  
const myImage = new Image(100, 200);
myImage.src = 'picture.jpg';
document.body.appendChild(myImage);

var img = document.createElement("img");
img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
var src = document.getElementById("res");
src.appendChild(img);
/*}
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
def brassage(cartes):

    moitie_deck = len(cartes) // 2

    
    nouveau_paquet = []
    
    paquet_tmp_1 = cartes[:moitie_deck]
    paquet_tmp_2 = cartes[moitie_deck:]

    for i in range(moitie_deck):
        nouveau_paquet.append(paquet_tmp_1[i])
        nouveau_paquet.append(paquet_tmp_2[i]) '*/