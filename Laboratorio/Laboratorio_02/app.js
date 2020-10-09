// I. ¿Es una cadena vacía?
var bandera = false;

function isEmpty(text){
    if (text === ""){
        bandera = false;
    }else{
        bandera = true;
    }
}

isEmpty("hola mundo")
console.log(bandera);
isEmpty("    ")
console.log(bandera);
isEmpty("")
console.log(bandera);

// II. El n-ésimo número estrella

function starNumber(level){

}
starNumber(1);
starNumber(2);
starNumber(3);

// III. Mínimo y máximo de un arreglo

function minMax(array){

}

minMax([1,2,3]);
minMax([5]);
minMax([]);


// IV. Combinación más grande v2

function largestSwap(number){

}
largestSwap(10);
largestSwap(34);
largestSwap(43);
largestSwap(27);
largestSwap(11);

// V. ¿Cuáles vocales tiene el texto?

function getVolwels(text){

}

getVolwels("Hola mundo");
getVolwels("");
getVolwels("aaaaaaah!!!");
getVolwels("Murcielago");

// VI. ¿Es un subconjunto?

/*
  Conjunto:

  Es un grupo de elementos que no se repiten y que no tienen
  un orden en específico.

  Subconjunto

  Es un conjunto con los elementos de un conjunto más grande.
  Todos los elementos del subconjunto DEBEN pertenecer
  al conjunto más grande. El conjunto vacío es
  subconjunto de todos los conjuntos.


  A = {1,2,3,4,5}
  B = {3,5}
  C = {1}
  D = {1,2,3,4,5}
  F = {}

  E = {1,6} <-- NO es un subconjunto de A, por que el 6 no esta en A
*/

export function isSubset(set, subset) {
    if (subset.length === 0) {
      return true;
    }
  
    for (let i = 0; i < subset.length; i++) {
      if (set.indexOf(subset[i]) === -1) {
        return false;
      }
    }
  
    return true;
  }
  
  /*
    TDD (Test Driven Development)
  
    Es una metodología de desarrollo que consiste
    en 4 pasos:
  
    1. Crear una prueba (unitaria) que falle
    2. Agregar el código MÍNIMO para que la prueba pase
    3. Refactorizar el código si es necesario
    4. Repetir
  */
  

isSubset([1,2,3,4,5],[3,4]);
isSubset([5,4,3,2,1],[]);
isSubset([8,4,3,7,10],[10]);
isSubset([1,2,3,4,5],[1,6]);
isSubset([6,4,7,3],[8,9]);