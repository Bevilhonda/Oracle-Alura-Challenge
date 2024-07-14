
/*document.getElementById('inputText').addEventListener('input', function (event) {
  let input = event.target;
  let value = input.value;

  value = value.replace(/[^a-z\s]/g, '');

  input.value = value;
});
*/

/* a função acima usa uma expressão regular value = value.replace(/[^a-z\s]/g, ''); para substituir todos os
 caracteres que não são letras minúsculas (a-z) ou espaços (\s) por uma string vazia ('').
  Em outras palavras, remove todos os caracteres que não são letras minúsculas ou espaços.*/

  document.getElementById('inputText').addEventListener('keydown',function(event){

    // o evento keydown serve para capturar quando o usuário pressiona uma tecla.

    if (event.key === 'Enter') { // e aqui verifica se a tecla pressionada foi "Enter".
    let campoTexto = event.target;
    let textoDigitado = campoTexto.value;

    if (/[A-ZÀ-Úà-ú]/.test(textoDigitado)) {
      mensagemDeErro("Apenas letras minúsculas e sem acentos são permitidas.");

      campoTexto.value = '';
    }
  }
    /* se o usuário digitar uma palavra ou texto que contenha letra maiúscula ou 
    com acentos, vai gerar o alert e resetar o campo onde digita o texto.
    */

  });

  function mensagemDeErro(message) {
    let caixaDeMensagem = document.createElement('div');
    caixaDeMensagem.className = 'message-box';
    caixaDeMensagem.textContent = message;
    document.body.appendChild(caixaDeMensagem);
  
    // Remover a mensagem após alguns segundos (opcional)
    setTimeout(function() {
      document.body.removeChild(caixaDeMensagem);
    }, 5000); 
    // esse numero de 5000 equivale á 5 segundos , é o tempo que a mensagem fica na tela
  }


let outputText = document.getElementById("outputText");
let afterResult = document.querySelector(".campo_resultado_visual");
let buttonCopy = document.querySelector(".botao_copiar");
let boxResult = document.querySelector(".campo_resultado");

function adjustStyle() {
  afterResult.style.display = "none";
  buttonCopy.style.display = "block";
  boxResult.style.justifyContent = "space-between";
  outputText.style.display = "block";
  outputText.style.height = "80%";
}

function criptografar() {
  let text = document.getElementById("inputText").value;
  let encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  outputText.innerText = encryptedText;
  adjustStyle();
}

function descriptografar() {
  let text = document.getElementById("inputText").value;
  let encryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  outputText.innerText = encryptedText;
  adjustStyle();
}

function copiarParaAreaInput() {
  let text = document.getElementById("outputText");
  text.select();
  text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(text.value);
}
