let monstro = "Boss Garatz"

let HPHUMANO = 100 
let ATQHUMANO = 120
let DEFHUMANO = 200

let HPELFO = 200
let ATQELFO = 300
let DEFELFO = 250

let HPORC = 75
let ATQORC = 150
let DEFORC = 100


let raca = prompt`Escolha a sua Raça:

1 - Humano
2 - Elfo
3 - Orc
`

switch(raca){
case "1":
    historia("Humano")
    break
    case "2":
        historia("Elfo")
        break
        case "3":
            historia("Orc")
            break
            default:
                console.log("Escolha uma das 3 Opcoes!")
}


function historia(racaT){

   

    if(racaT == "Humano"){
        console.log(`Sua raça é de ${racaT}
        HP:${HPHUMANO}
        ATQ:${ATQHUMANO}
        DEF:${DEFHUMANO}
        `)
        setTimeout(()=>{
            jornada(racaT)
        },2000)
    }else if(racaT == "Elfo"){
        console.log(`Sua raça é de ${racaT}
        HP:${HPELFO}
        ATQ:${ATQELFO}
        DEF:${DEFELFO}
|       `)
        setTimeout(()=>{
            jornada(racaT)
        },2000)
    }else{
        console.log(`Sua raça é de ${racaT}
        HP:${HPORC}
        ATQ:${ATQORC}
        DEF:${DEFORC}
 |      `)
        setTimeout(()=>{
            jornada(racaT)
        },500)
    }

}

function jornada(racaAtq){
    
alert(`Apareceu um grande monstro, ele está fora de controle e está atacando um villarejo, ele está vindo na minha direção.....`
)

    alert(`Falando: ${monstro}, seeeeeeu ${racaAtq} inutil!, você nao será páreo para minha furia, irei destrui-lo!!
    aah, ele me atacou...`)

    let confirm = window.confirm("Deseja continuar?")

    console.log(confirm)

    switch(confirm){
        case true:
            forca(racaAtq)
            break;
            case false:
                console.log('Voce morreu!!')
                alert("Voce morreu!")
                break
    }
}

function forca(racaAtq){
    alert(`
    Sobre o Boss: ${monstro}

    HP: 300
    ATQ: 200
    DEF: 500`)
    
    if(racaAtq == "Humano"){
        alert(` Ele conseguiu me ferir.
        -20 Dano
        HP:${HPHUMANO -= 20}
        
        Graças a minha armadura divina, nao sofri danos graves.
        `)

        let lamina = "Ataque da lamina Divina 🪓"
        let raio = "Raios divino ⚡🗽"
        let fenda = "Fenda do fim do mundo 🌋🌀"
        let coseu = "Coseuus divino XStroFênix ✨🔥 ++bonus divino imortal"
       let especial = prompt(`Hora do ataque final:
        Escolha um especial: 
        1 - ${lamina}
        2 - ${raio}
        3 - ${fenda}
        4 - ${coseu}
        `)

        switch(especial){
            case "1":
                alert(`falando - ${racaAtq}, receba o meu poder divino e vá 
                para as profundezas do inferno. oooooh ${lamina} `)
                break; 
            case "2":
                alert(`falando - ${racaAtq}, receba o meu poder divino e vá 
                para as profundezas do inferno.
                 oooooh: ${raio} `)
                break; 
            case "3":
                alert(`falando - ${racaAtq}, receba o meu poder divino e vá 
                para as profundezas do inferno.
                 oooooh: ${fenda} `)
                break; 
            case "4":
                alert(`falando - ${racaAtq}, receba o meu poder divino e vá 
                para as profundezas do inferno.
                 oooooh: ${coseu} `)
                alert('A terra foi destruida com esse ataque!')
                break; 
        }
        
            
    }




    else if(racaAtq == "Elfo"){
    alert(` Ele conseguiu me ferir.
        -15 Dano
        HP:${HPELFO -= 15}
        
        voce é uma criatura inferior a mim.`)

        let lamina = "Ataque da lamina Florestal 🪓🐉"
        let raio = "Purificação Divina 🤺🍃"
        let fenda = "Ataque Mortal da besta infernal 🦑🐧"
        let coseu = "Deus divino do infinito ++Divindade"
       let especial = prompt(`Hora do ataque final:
        Escolha um especial: 
        1 - ${lamina}
        2 - ${raio}
        3 - ${fenda}
        4 - ${coseu}
        `)

        switch(especial){
            case "1":
                alert(`falando - ${racaAtq}, receba o meu poder divino e vá 
                para as profundezas do inferno. oooooh ${lamina} `)
                break; 
            case "2":
                alert(`falando - ${racaAtq}, receba o meu poder divino e vá 
                para as profundezas do inferno.
                 oooooh: ${raio} `)
                break; 
            case "3":
                alert(`falando - ${racaAtq}, receba o meu poder divino e vá 
                para as profundezas do inferno.
                 oooooh: ${fenda} `)
                break; 
            case "4":
                alert(`falando - ${racaAtq}, receba o meu poder divino e vá 
                para as profundezas do inferno.
                 oooooh: ${coseu} `)
                alert(`Voce abriu uma fenda no multverso a terra foi teletraportada para outro sistema solar, oque espera nos proximos capitulos....???`)
                break; 
        }
        
    }



    else if(racaAtq == "Orc"){
        alert(` Ele conseguiu me ferir.
        -75 Dano
        HP:${HPORC -= 75}
        
        voce morreu, o monstro é muito forte kkkk 

        `)
    }
}