/**
 * Función que convierte de grados
 * celsius a farenheit.
 */
function celsius_to_farenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

/**
 * Función que convierte de grados
 * farenheit a celsius.
 */
function farenheit_to_celsius(farenheit) {
  return (farenheit - 32) * (5 / 9);
}

const counter = document.getElementById("result-text");
let resultado = 0;
const grados = document.getElementById("grados");
counter.innerText = resultado;
const buttonf = document.getElementById("to_f");
const buttonc = document.getElementById("to_c");
// const buttonc = document.getElementById("to_c");

let grados1 = grados.value;
counter.innerText = grados1;

function celsiusCompletos(){
  const grad = grados.value;
  counter.innerText = farenheit_to_celsius(grad);
}
function farenheitCompletos(){
  const grad = grados.value;
  counter.innerText = celsius_to_farenheit(grad);
}

buttonc.addEventListener("click", function(){
  return celsiusCompletos();
})

buttonf.addEventListener("click", function(){
  return farenheitCompletos();
})



