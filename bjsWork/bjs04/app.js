// Function pregunta_grados(a){
//     a = Number(prompt("Que grados vas a calcular Celsius(1) o Farenheite(2)? "));
//     if ( a == 1){
//       console.log(gRados_c);
//     } else {
//       console.log(gRados_f);
//     }
//   }
  
  
//   function gRados_f (f, a){
//     f = Number(prompt("Dame los grados Celsius a calcular: "));
//     a = (f * 9/5) +32;
//     retunr a;
//   }
//   function gRados_c (c, a){
//     c = Number(prompt("Dame los grados Farenheite"));
//     a = (c - 32) * 9/5;
//     retunr a;
//   }
  
//   console.log(a);

console.log("Hola Mundo");

// Comentarios de una sola línea
/*
  Un comentario
  de varias
  líneas
*/

/* 
  Variables

  Sintaxis:

  var nombre_de_variable = valor; (Variable inicializada)

  var otro_nombre_de_variable; (Variable sin valor / sin inicializar)
*/

var numero = 10;
var texto = "Hola Mundo!";

/*
  Nombrado

  * Camel Case: La primer letra minúscula, y la primer
  letra de cada palabra con mayúscula:

  "mi variable"

  miVariable

  "este es un nombre de variable"

  esteEsUnNombreDeVariable

  * Snake Case: Todo en minúsculas y cada espacio
  se reemplaza por un guión bajo.

  mi_variable
  este_es_un_nombre_de_variable

  * PascalCase: Lo mismo que CamelCase pero
  la primer letra es mayúscula

  MiVariable

  EsteEsUnNombreDeVariable
  
*/

var angel_nestor_rojas_perez;
var juanCarlosCedanoVelazquez;
var rafaTrejo;
var giovani_jimenez;
var carlosAlbEstradaMarmolejo;
var sebastianGonzalezJimenez;
var sebastian_gonzalez_jimenez;
var SebastianGonzalezJimenez;
var yteel_montoya;
var enrique_mendez;
var diego_armando_miranda;
var gildardo_arreola_cardenas;

/*
  Tipos de datos PRIMITIVOS

  Números (Number)
  Cadenas de Texto (String)
  Valores booleanos (boolean)
  Null (null)
  Undefined (undefined)

  ----------------------------------

  Otros tipos de datos
  
  Arreglos (Array)
  Objectos (Objects / JSON)
*/

var cadena_texto = "Esto es un texto cualquiera";
var verdadero = true;
var falso = false;
var variable_null = null; // Hay algo, que es nada
var variable_undefined = undefined; // No hay nada

/*
  Operadores

  Matemáticos
    + (suma), - (resta), * (multiplicación), / (división), % (módulo / residuo)

  Lógicos
    && (and), || (or)

    && es verdadero cuando todos los operandos son verdaderos.

    || es verdadero cuando al menos un operando es verdadero.


    Concatenación: Pegar cadenas de texto
      +
*/
var nombre = "Jorge";
var apellido = "Ramón";
var nombre_completo = nombre + " " + apellido; // <-- Concatenación

/*
  var celsius = 30;
  var farenheit = 80;

  var resultado_celsius; // resultado de °C a °F
  var resultado_farenheit; // resultado de °F a °C

  ... (código mágico)

  console.log(result_farenheit);
  console.log(result_celsius);
*/

let celsius = 40;
let farenheit = 90;

let resultado_celsius = celsius * (9 / 5) + 32;
let resultado_farenheit = (farenheit - 32) * (5 / 9);

console.log(resultado_farenheit);
console.log(resultado_celsius);

/*
  Estructuras de Control: If, Switch

  Sintaxis if:
  if (condicion booleana) {
    este bloque de codigo
  } else if (otra condicion booleana) {
    bloque de codigo
  } ... {
  } else {
    se ejecuta unicamente cuando los anteriores dieron falso
  }


  Sintaxis switch:

  switch (valor) {

    case valor1:
      ...
      break;

    case valor2:
      ...
      break;


    default:
      ...
  }
*/

/*
  Estructuras de Repetición: for y while

  Sintaxis for:

  for (inicial; condicion; incremento) {
    ...
  }

  while (condicion boolean) {
    ...
  }
*/

/*
  FizzBuzz

  Desde el 1 al 100, se analiza cada número y hay 3 posibles casos:

    * Si el numero es múltiplo de 3 entonces en pantalla 
    se debe de mostrar "Fizz"
    * Si el número es múltiplo de 5 entonces en pantalla 
    se debe de mostrar "Buzz"
    * Si el número es múltiplo de 3 y 5 entonces en pantalla 
    se debe de mostrar "FizzBuzz"
    * Para cualquier otro caso, se deja el número como tal.
    
    1
    2
    Fizz (3)
    4
    Buzz (5)
    Fizz (6)
    7
    8
    Fizz (9)
    Buzz (10)
    11
    Fizz (12)
    13
    14
    FizzBuzz (15)
*/

/*

Respuesta: 
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

/*
  Duck Typing / Tipado dinámico

  Type Coercion

  Dadas dos variables A y B, se trata de transformar
  A en el tipo de dato de B
*/

var cadena_cualquiera = "Esto es una cadena cualquiera";

console.log(!cadena_cualquiera);

console.log("10" + 20);

console.log(1 + "2");

// == / != : Compara variables por SU VALOR
// === / !== : Compara variables por SU VALOR y SU TIPO

console.log(0 == "0");
console.log(0 === "0");

/*
  ¿Cuándo un valor es falso?

  0
  ""
  null
  undefined
  false
*/

/*
  Funciones:

  Es un bloque de código que realiza una tarea en particular.

  Esta función puede recibir valores (parámetros) y puede
  regresar valores (tipo de retorno).

  Las funciones en JS, pueden recibir funciones como parámetros
  y regresar funciones (Funciones de Orden Superior / High Order Functions)

  Sintaxis:

  function nombre_funcion (parametros1, parametros2, ...) {
    // bloque de código
  }
*/

function saluda() {
  console.log("Hola");
}

saluda();

function suma(a, b) {
  return a + b;
}

console.log(suma(1, 2));

/*
  Calcula el BURP

  Crear una función llamada calcula_burp que recibe como 
  parámetro un número entero positivo y debe regresar
  una cadena de texto que sea BURP con tantas R como 
  el parámetro.

  calcula_burp(5); // "BURRRRRP"
  calcula_burp(10); // "BURRRRRRRRRRP";
*/

function calcula_burp(n) {
  var secuencia = "";
  for (var i = 1; i <= n; i++) {
    secuencia += "r"; // secuencia = secuencia + "r";
  }
  /*
    n = 3

    Antes del for
      secuencia = ""

    En la primer iteracion
      i = 1, i <= 3
      secuencia = "" + "r" = "r"

    En la segunda iteración
      i = 2, i <= 3
      secuencia = "r" + "r" = "rr"

    En la tercera iteración
      i = 3, i <= 3
      secuencia = "rr" + "r" =  "rrr"

    En la cuarta iteración
      i = 4, ya no se cumple que i <= 3

    secuencia = "rrr";

  */
  return "bu" + secuencia + "p";
}

console.log(calcula_burp(10));


/*
  Un arreglo es una estructura de datos (una forma
    de almacenar información) donde se pueden
    almacenar N cantidad de valores (diferentes tipos).


  [ elemento1, elemento2, elemento3, ..., elementoN ]
       0          1          2               N - 1

  Para acceder a la posición de un arreglo se usa

    nombre_arreglo[ posicion ]
*/
var arreglo = [100, 200, 300, 400, 500];

// Acceder a una posición en particular
console.log("posicion 1", arreglo[1]);
console.log("posición 4", arreglo[4]);
console.log("posición 40", arreglo[40]);

// Actualizar valores en cierta posición

arreglo[2] = 8000; // Insertando / actualizando la posición 2
arreglo[5] = "Hola"; // Insertando / actualizando la posición 5
// arreglo[20] = true; // Cuidado!!! Esto hace que se desperdicie memoria

// Nota: Los arreglos son un bloque SECUENCIAL de memoria

// Los arreglos tienen funciones
// Para poder acceder a ellos se utiliza "notación punto"
// Para agregar nuevos elementos a un arreglo se utiliza
// la función "push" <--- es una función

arreglo.push(0);
arreglo.push(700);
arreglo.push(1000000);

console.log(arreglo);

arreglo.push(5); // <--- N - 2 (penúltimo)
arreglo.push(9); // <--- N - 1 (último)

// Existe una forma de saber la longitud actual de un arreglo
// .length <--- una propiedad / valor
const ultimo = arreglo[arreglo.length - 1];
arreglo[arreglo.length - 1] = -1;
arreglo.push(ultimo);

/*
    Ejercicio:

    Dado un arreglo de números enteros, crear una función
    que regrese la suma de todos sus elementos.
*/
function suma_arreglo(calabaza) {
    let suma = 0;
    for (var i = 0; i < calabaza.length; i++) {
      suma += calabaza[i];
    }
  
    /*
      arreglo = [1,  2, 3]
                0   1   2
      arreglo.length = 3
  
      Antes del for
        suma = 0
  
      Primer iteración:
        i = 0, 0 < 3 es verdadero entonces...
  
          suma = 0 + arreglo[0] = 0 + 1 = 1
  
      Segunda iteración:
        i = 1, 1 < 3 es verdadero entonces...
  
          suma = 1 + arreglo[1] = 1 + 2 = 3
  
      Tercera iteración:
        i = 2, 2 < 3 es verdadero entonces...
  
          suma = 3 + arreglo[2] = 3 + 3 = 6
  
      Cuarta iteración:
        i = 3, 3 < 3 es falso
  
      Por lo tanto, suma = 6
    */
  
    return suma;
  }
  
  // resultado : arreglo[1] + arreglo[2] + arreglo[3]
  console.log("La suma de [1,2,3] es ", suma_arreglo([1, 2, 3]));
  console.log(
    "La suma de [1,2,3,4,5,6,7,8,9,10] es ",
    suma_arreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  );
  
  /*
    Reto:
  
    Dado un arreglo de elementos cualesquiera, crear una función
    que indique si un elemento pertenece al arreglo.
  
    busca([1,2,3], 3); // true
    busca([1,2,3], 4); // false
  */
  function incluye(arr, n) {
    for (let i = 0; i < arr.lenght; i++) {
      if (n === arr[i]) {
        console.log("true");
      } else {
        console.log("false");
      }
    }
  }
  
  incluye([1, 2, 3, 4, 5, 6, 7], 11);
  
  // Respuesta:
  function busca(arreglo, elemento) {
    for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === elemento) {
        return true;
      }
    }
  
    return false;
  }
  
  console.log(busca([1, 2, 3], 4));

function busca(arreglo, valorBuscar) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === valorBuscar) {
        return true;
      }
    }
    return false;
  }
  
  console.log(busca([1, 2, "hola", 4, 5], "hola"));