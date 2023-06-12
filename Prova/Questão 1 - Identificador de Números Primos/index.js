
function Primo(numero) {
    if (numero <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return true;
  }

  function checarprimo() {
    const numeroInput = document.getElementById("numero");
    const numero = parseInt(numeroInput.value);

    const resultadoElement = document.getElementById("resultado");
    if (Primo(numero)) {
      resultadoElement.textContent = `${numero} é um número primo.`;
    } else {
      resultadoElement.textContent = `${numero} não é um número primo.`;
    }
  }
  
  function listaPrimos() {
    const numerosprimos = [];

    for (let i = 1; i <= 1000; i++) {
      if (Primo(i)) {
        numerosprimos.push(i);
      }
    }
    const numerosprimosElement = document.getElementById("listadeprimos");
    numerosprimosElement.textContent = "Números primos: " + numerosprimos.join(", ");
  }