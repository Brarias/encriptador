/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

function encriptar() {
  let mensaje = document.querySelector(".text-area").value;
  let resultado = document.querySelector(".mensaje");
  let textOne = document.querySelector(".text-one");
  let textTwo = document.querySelector(".text-two");

  let cifrado = mensaje
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  resultado.style.backgroundImage = "none";
  textOne.textContent = "";
  textTwo.textContent = "";
  resultado.textContent = cifrado;
}

function descifrar() {
  let mensaje = document.querySelector(".text-area").value;
  let resultado = document.querySelector(".mensaje");

  let decifrado = mensaje
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  resultado.style.backgroundImage = "none";
  resultado.textContent = decifrado;
}

function aviso() {
  let aviso = document.querySelector(".aviso-copiado");
  setTimeout(() => {
    aviso.style.display = "flex";
  }, 0);

  aviso.textContent = "Copiado";
  aviso.style = `border: 1px solid #0A3871;
  text-align: center;
  width: 90px;
  height: 30px;
  padding: 10px 0;
  border-radius: 10px;
  font-size: 25px;
  background: #D8DFE8;
  color: #0A3871; 
  `;

  setTimeout(() => {
    aviso.style.display = "none";
  }, 1000);
}

function copiar() {
  let resultado = document.querySelector(".mensaje");
  //resultado.select();
  document.execCommand("copy");

  aviso();
}


