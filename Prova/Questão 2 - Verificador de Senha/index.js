function validarSenha() {
    var senha = document.getElementById('passwordInput').value;
  
    // Verificar se a senha atende aos critérios
    var temLetraMinuscula = /[a-z]/.test(senha);
    var temLetraMaiuscula = /[A-Z]/.test(senha);
    var temNumero = /\d/.test(senha);
  
    // Exibir mensagem para o usuário
    var mensagemElement = document.getElementById('mensagem');
    mensagemElement.style.color = 'black';
    mensagemElement.innerHTML = '';
  
    if (senha.length < 8) {
      mensagemElement.style.color = 'red';
      mensagemElement.innerHTML += 'A senha deve ter pelo menos 8 caracteres.<br>';
    }
  
    if (!temLetraMinuscula) {
      mensagemElement.style.color = 'red';
      mensagemElement.innerHTML += 'A senha deve conter pelo menos uma letra minúscula.<br>';
    }
  
    if (!temLetraMaiuscula) {
      mensagemElement.style.color = 'red';
      mensagemElement.innerHTML += 'A senha deve conter pelo menos uma letra maiúscula.<br>';
    }
  
    if (!temNumero) {
      mensagemElement.style.color = 'red';
      mensagemElement.innerHTML += 'A senha deve conter pelo menos um número.<br>';
    }
  
    if (senha.length >= 8 && temLetraMinuscula && temLetraMaiuscula && temNumero) {
      mensagemElement.style.color = 'green';
      mensagemElement.textContent = 'Senha válida!';
    }
}