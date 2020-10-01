import "./styles.css";

function celsius_to_farenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

function farenheit_to_celsius(farenheit) {
  return (farenheit - 32) * (5 / 9);
}

const input = document.getElementById("grados");

document.getElementById("to_f").addEventListener("click", function () {
  const value = Number(input.value); // Convertir el texto a un número
  if (isNaN(value)) {
    document.getElementById("result-text").innerText =
      "Introduce un valor numérico";
  } else {
    const result = celsius_to_farenheit(value);
    document.getElementById("result-text").innerText = result + "°F";
  }
});

document.getElementById("to_c").addEventListener("click", function () {
  const value = Number(input.value);
  if (isNaN(value)) {
    document.getElementById("result-text").innerText =
      "Introduce un valor numérico";
  } else {
    const result = farenheit_to_celsius(value);
    document.getElementById("result-text").innerText = result + "°C";
  }
});

/* Versión refactorizada (mejor++)

function calculate(symbol, f) {
  const value = Number(input.value);

  if (isNaN(value)) {
    document.getElementById("result-text").innerText =
      "Introduce un valor numérico";
  } else {
    const result = f(value);
    document.getElementById("result-text").innerText = result + symbol;
  }
}

document.getElementById("to_f").addEventListener("click", function () {
  calculate("°F", celsius_to_farenheit);
});

document.getElementById("to_c").addEventListener("click", function () {
  calculate("°C", farenheit_to_celsius);
});
*/
