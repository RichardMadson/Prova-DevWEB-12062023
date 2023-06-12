function calcularFatorial() {
    var numero = parseInt(document.getElementById('numberInput').value);
  
    // Verificar se o número é válido
    if (isNaN(numero) || numero < 0) {
      document.getElementById('resultado').textContent = 'Digite um número válido.';
      return;
    }
  
    // Calcular o fatorial
    var fatorial = 1;
    for (var i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    // Exibir o resultado
    document.getElementById('resultado').textContent = 'O fatorial de ' + numero + ' é ' + fatorial + '.';
  }