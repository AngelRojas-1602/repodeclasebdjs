const select = document.getElementById("razas");
const btn = document.getElementById("ver_imagen");
const imagen = document.getElementById("imagen_perro");

/*
  fetch realiza peticiones a una URL en especifico.
  Por lo general se usa para consultar información
  o modificar información en el Backend.

  fetch(url, opciones)
    .then(function (response) {
      // Hago lo que se me de la gana con los datos
    });
*/

function consultar_razas() {
  // Realiza una consulta a la URL especificada
  fetch("https://dog.ceo/api/breeds/list/all")
    // Transforma lo que regresa el servidor
    // a algo que entienda JavaScript
    .then(function (response) {
      return response.json();
    })
    // Hace lo que quiera con la información del servidor
    .then(function (data) {
      // Obtengo el arreglo de razas
      const razas = Object.keys(data.message);

      // Lleno el <select> con esa información
      llenar_lista(razas);
    });
}

function llenar_lista(razas) {
  // Por cada raza...
  for (let i = 0; i < razas.length; i++) {
    // Crear una etiqueta <option></option>
    const option = document.createElement("option");

    // <option>Raza</option>
    option.innerText = razas[i];

    // <option value="Raza">Raza</option>
    option.value = razas[i];

    // Agrego <option> al HTML (dentro del <select>)
    select.appendChild(option);
  }
}

btn.addEventListener("click", function () {
  // Obtiene lo seleccionado en el select por el usuario
  const raza = select.value;

  // Consulta la imagen de la raza seleccionada
  obtener_imagen_aleatoria(raza);
});

function obtener_imagen_aleatoria(raza) {
  fetch("https://dog.ceo/api/breed/" + raza + "/images/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Agregamos la URL de la imagen a la etiqueta <img />
      imagen.src = data.message;
    });
}

consultar_razas();
