function verificarQuadradoPerfeito() {
    var numero = parseInt(document.getElementById('numberInput').value);
  
    // Verificar se o número é um quadrado perfeito
    var raiz = Math.sqrt(numero);
  
    if (numero >= 0 && raiz === Math.floor(raiz)) {
      document.getElementById('resultado').textContent = numero + ' é um quadrado perfeito.';
    } else {
      document.getElementById('resultado').textContent = numero + ' não é um quadrado perfeito.';
    }
  }