document.getElementById('inputText').addEventListener('input', function (event) {
  let input = event.target;
  let value = input.value;

  // Remove letras maiúsculas e caracteres acentuados
  value = value.replace(/[^a-z\s]/g, '');

  // Atualiza o valor do campo de texto
  input.value = value;
});

let outputText = document.getElementById("outputText");
let afterResult = document.querySelector(".box-result-preview");
let buttonCopy = document.querySelector(".box-result-preview-button-copy");
let boxResult = document.querySelector(".box-result");

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
