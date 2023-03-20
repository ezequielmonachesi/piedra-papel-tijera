let valorIngresado;

do {
  valorIngresado = parseInt(
    prompt("Elija con número su opción: 1-Piedra, 2-Papel, 3-Tijera")
  );
  if (valorIngresado == 1) {
    piedra(valorIngresado);
  } else if (valorIngresado == 2) {
    papel(valorIngresado);
  } else if (valorIngresado == 3){
    tijera(valorIngresado);
  }else{
    alert('Ingresa un numero valido')
  }
  function piedra(valor) {
    let tijera = 2;
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === valor) {
      alert(`Tu elegiste Piedra y yo elegí Piedra ||| Empatamos! :/`);
    } else if (random === tijera) {
      alert(`Tu elegiste Piedra y yo elegí Tijera ||| Me Ganaste! )=`);
    } else {
      alert(`Tu elegiste Piedra y yo elegí Papel ||| Te Gané! =D`);
    }
  }
  function tijera(valor) {
    let papel = 2;
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === valor) {
      alert(`Tu elegiste Tijera y yo elegí Tijera ||| Empatamos! :/`);
    } else if (random === papel) {
      alert(`Tu elegiste Tijera y yo elegí Papel ||| Me Ganaste! )=`);
    } else {
      alert(`Tu elegiste Tijera y yo elegí Piedra ||| Te Gané! =D`);
    }
  }
  function papel(valor) {
    let tijera = 1;
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === valor) {
      alert(`Tu elegiste Papel y yo elegí Papel ||| Empatamos! :/`);
    } else if (random === tijera) {
      alert(`Tu elegiste Papel y yo elegí Tijera ||| Me Ganaste! )=`);
    } else {
      alert(`Tu elegiste Tijera y yo elegí Piedra ||| Te Gané! =D`);
    }
  }
} while (confirm("Quieres jugar de nuevo?"));
