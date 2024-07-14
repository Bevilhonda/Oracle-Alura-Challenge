
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


function mensagemDeErro(message) {
  let caixaDeMensagem = document.createElement('div');
  caixaDeMensagem.className = 'message-box';
  caixaDeMensagem.textContent = message;
  document.body.appendChild(caixaDeMensagem);

  // essa função remove a mensagem após alguns segundos. 
  setTimeout(function () {
    document.body.removeChild(caixaDeMensagem);
  }, 5000);
  // esse numero de 5000 equivale á 5 segundos , é o tempo que a mensagem fica na tela
}

function adjustStyle() {
  let afterResult = document.querySelector(".campo_resultado_visual");
  let buttonCopy = document.querySelector(".botao_copiar");
  let boxResult = document.querySelector(".campo_resultado");
  let outputText = document.getElementById("outputText");

  afterResult.style.display = "none";
  buttonCopy.style.display = "block";
  boxResult.style.justifyContent = "space-between";
  outputText.style.display = "block";
  outputText.style.height = "80%";
}

function criptografar() {
  let campoTexto = document.getElementById("inputText");
  let textoDigitado = campoTexto.value;

  if (/[A-ZÀ-Úà-ú]/.test(textoDigitado)) {
    mensagemDeErro("Apenas letras minúsculas e sem acentos são permitidas.");
    campoTexto.value = '';
    return;
  }
  /* se o usuário digitar uma palavra ou texto que contenha letra maiúscula ou 
    com acentos, vai gerar o alert e resetar o campo onde digita o texto.
    */
  else {
    let textoCriptografado = textoDigitado
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    let outputText = document.getElementById("outputText");
    outputText.innerText = textoCriptografado;

    adjustStyle();
  }
}

function descriptografar() {
  let text = document.getElementById("inputText").value;
  let textoDescriptografado = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  let outputText = document.getElementById("outputText");
  outputText.innerText = textoDescriptografado;

  adjustStyle();
}

function copiarParaAreaInput() {
  let text = document.getElementById("outputText");
  text.select();
  text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(text.value);
}

document.querySelector('.button-discr').addEventListener('click', descriptografar);
