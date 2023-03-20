/* 
piedra 1
papel 2
tijera 3 */
/* 

piedra1 G tijera2 P papel3

tijera G papel P piedra

papel G piedra P tijera

piedra = 1
tijera = 2
papel = 3*/

let valorIngresado = parseInt(prompt('Elija con número su opción: 1-Piedra, 2-Papel, 3-Tijera'))

function piedra(valor){
  let tijera = 2
  let random = Math.floor(Math.random() * 3) + 1
  if (random == valor) {
    document.write(`Tu elegiste Piedra y yo elegí Piedra ||| Empatamos :/`);
  } else if(random == tijera) {
    document.write(`Tu elegiste Piedra y yo elegí Tijera ||| Ganaste D=`);
  }else{
    document.write(`Tu elegiste Piedra y yo elegí Papel ||| Perdiste =D`);
  }
}


function tijera(valor){
  let random = Math.floor(Math.random() * 3) + 1
  if (random == valor) {
    document.write(`Empate`);
  } else if(random == 2) {
    document.write(`Ganaste`);
  }else{
    document.write(`Perdiste`);
  }
}

if (valorIngresado == 1){
  piedra(valorIngresado)
}else if (valorIngresado == 2){
  papel(valorIngresado)
}else{
  tijera(valorIngresado)
}


/* 

if (piedra == "piedra") {
  document.write(`Ganaste`);
} else {
  document.write(`Perdiste`);
}
if (tijera == "tijera") {
  document.write(`Ganaste`);
} else {
  document.write(`Perdiste`);
}
if (papel == "papel") {
  document.write(`Ganaste`);
} else {
  document.write(`Perdiste`);
} */

/* 
for (let i = 0; i < 5; i++) {
    random = Math.floor(Math.random() * 3) + 1
    document.write(`${random}`)
} */
