let vidamaxima=100
let vida=vidamaxima
let danoporespada=30
let danocritico=10
let recuperavida=20

let lobo=1
let danodolobo=30
let vidadolobo=80

let leao=2
let danodoleoa=25
let vidadoleoa=120

let passaro=3 
let danodopassaro=35
let vidadopassaro=60

let numero=Number(prompt("na sua frente 3 caminhos\n -o primeiro caminho tem um lobo \n- o segundo caminho tem um leao \n- terceiro tem um passaro \n- qual voce escolher:"))

if(numero===1){
  
  let numero1=Number(prompt('escolha o seu movimento: \n -1 atacar \n -2 recupera vida \n-3 sair'))
  if(numero1===1){
      if(Math.random()<0.2){
        vidadolobo-=danocritico+danoporespada
        console.log("voce deu dano critico")
  }   else{console.log("voce nao deu dano critico",vidadolobo-=danoporespada)}
  }

  else if(numero1===2){
    vida+=recuperavida
    if(vida > vidamaxima)
      vida=vidamaxima
}
  else if(numero1===3){
    console.log('voce tentou fugir')
    
    if(Math.random()<0.5){
      vida-=danodolobo
      console.log("Você foi atingido ao fugir",numero)
      console.log("voce recebeu",danodolobo,"de dano")
  } else{
      console.log("Você fugiu com sucesso",numero)
  }
} else{
    console.log("escolha uma dos movimento",numero1)
}}else if(numero===2){



    let numero2=Number(prompt('escolha o seu movimento: \n -1 atacar \n -2 recupera vida \n-3 sair'))
  if(numero2===1){
      
      if(Math.random()<0.2){
        vidadoleoa-=danocritico+danoporespada
        console.log("voce deu dano critico")
  }   else{console.log("voce nao deu dano critico",vidadoleoa-=danoporespada)}
  }

  else if(numero2===2){
    vida+=recuperavida
    if(vida > vidamaxima)
      vida=vidamaxima
}
  else if(numero2===3){
    console.log('voce tentou fugir')
    if(Math.random()<0.5){
      vida-=danodoleoa
      console.log("Você foi atingido ao fugir",numero)
      console.log("voce recebeu",danodoleoa,"de dano")
  } else{
      console.log("Você fugiu com sucesso",numero)
  }
} else{
    console.log("escolha uma dos movimento",numero2)
}
}else if(numero===3){



    let numero3=Number(prompt('escolha o seu movimento: \n -1 atacar \n -2 recupera vida \n-3 sair'))
  if(numero3===1){
      
      if(Math.random()<0.2){
        vidadopassaro-=danocritico+danoporespada
        console.log("voce deu dano critico")
  }   else{console.log("voce nao deu dano critico",vidadopassaro-=danoporespada)}
  }

  else if(numero3===2){
    vida+=recuperavida
    if(vida > vidamaxima)
      vida=vidamaxima
}
  else if(numero3===3){
    console.log('voce tentou fugir')
    if(Math.random()<0.5){
      vida-=danodopassaro
      console.log("Você foi atingido ao fugir",numero)
      console.log("voce recebeu",danodopassaro,"de dano")
  } else{
      console.log("Você fugiu com sucesso",numero)
  }
} else{
    console.log("escolha uma dos movimento",numero3)
}
}else{
  console.log("esta opcao nao esta diponivel")
}
