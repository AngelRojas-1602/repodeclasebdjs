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

function isSubset(set, subset){

}

isSubset([1,2,3,4,5],[3,4]);
isSubset([5,4,3,2,1],[]);
isSubset([8,4,3,7,10],[10]);
isSubset([1,2,3,4,5],[1,6]);
isSubset([6,4,7,3],[8,9]);