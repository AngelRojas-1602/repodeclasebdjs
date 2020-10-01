/*
  const obj = {};
  obj = lo que sea; NO ESTA PERMITIDO

  obj.propiedad = valor; SI ESTA PERMITIDO
*/
let value = 0;
const counter = document.getElementById("counter");
counter.innerText = value;

function add_value() {
  value += 1;
  counter.innerText = value;
}

const button = document.getElementById("click_me");

button.addEventListener("click", function () {
  add_value();
});

const counter_text = document.getElementById("counter_text");

counter_text.addEventListener("mouseover", function () {
  counter_text.className = "focus";
});

counter_text.addEventListener("mouseout", function () {
  counter_text.className = "";
});
