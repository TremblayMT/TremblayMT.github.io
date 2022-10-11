var carte = []
function generation_cartes(){

    const COULEUR = [d, c, h, s]
    const FIGURES = [J, Q, K]

    
    for (let i = 0; i < len(COULEUR); i++){
        carte.push("A"+COULEUR[i]+".gif");
    }

    for (let i = 2; i < 10; i++){
        for (let j = 0; i < len(COULEUR); j++){
            carte.push(i+COULEUR[i]+".gif");
        }
    }

    for (let i = 0; i < len(FIGURES); i++){
        for (let j = 0; i < len(COULEUR); j++){
            carte.push(FIGURES[i]+COULEUR[i]+".gif");
        }
    }
    
}  


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