/*
  DOM (Document Object Model)

  La estructura del HTML disponible en JavaScript.
  Permite tener páginas web "dinámicas".

  innerHTML modifica e interpreta código HTML
  innerText sólo añade texto
*/

// Es el acceso a la etiqueta <body></body>
//document.body.innerHTML =
//  "<h1>Hola Mundo desde JS</h1><button>Hazme Click</button>";

// Buscar elementos/etiquetas/nodos utilizando las funciones de document

// 1. Búsqueda por nombre de etiqueta
const resultado_tag = document.getElementsByTagName("div");
//console.log(resultado_tag); // HTMLCollection ~ Array

resultado_tag[1].innerHTML = "<h1>Editado desde JavaScript";

const html_anterior = resultado_tag[0].innerHTML;
resultado_tag[0].innerHTML = "<p>Este es un HTML nuevo</p>";
resultado_tag[0].innerHTML = html_anterior;

// 2. Búsqueda por un nombre de clase (CSS)
const resultado_clase = document.getElementsByClassName("este");
//console.log(resultado_clase);

// Ejemplo cambiar el <li> de Mantequilla por Cerveza
const resultado_li = document.getElementsByTagName("li");
resultado_li[2].innerText = "Cerveza";

// 3. Búsqueda por un identificador (id)
const resultado_id = document.getElementById("lista_carne");
resultado_id.innerText = resultado_id.innerText.toUpperCase();

// 4. Búsqueda por selector (CSS Selector)
// querySelector regresa únicamente el primer resultado que coincida
// querySelectorAll regresa todos los resultados que coincidan
const li = document.querySelector("ul li:nth-child(2)");
li.innerText = li.innerText.toUpperCase();