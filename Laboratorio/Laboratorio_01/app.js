// Calcula el valor booleano de las siguientes expresiones lógicas y explica tu respuesta:
console.log (!!true || (!null != !1));

console.log (NaN && undefined == null);

console.log(10 === 010);

// A. Combinación más grande
var digito1 = 8;
var digito2 = 6;
var digito3 = 9;
var combinacion;

if ((digito1 > digito2) && (digito1 > digito3)) {
    if ((digito2 > digito3)){
        combinacion = digito1.toString() + digito2.toString() + digito3.toString()
    }
}
if ((digito1 > digito2) && (digito1 > digito3)) {
    if ((digito3 > digito2)){
        combinacion = digito1.toString() + digito3.toString() + digito2.toString()
    }
}
if ((digito2 > digito1) && (digito2 > digito3)) {
    if ((digito1 > digito3)){
        combinacion = digito2.toString() + digito1.toString() + digito3.toString()
    }
}
if ((digito2 > digito1) && (digito2 > digito3)) {
    if ((digito3 > digito1)){
        combinacion = digito2.toString() + digito3.toString() + digito1.toString()
    }
}
if ((digito3 > digito1) && (digito3 > digito2)) {
    if ((digito1 > digito2)){
        combinacion = digito3.toString() + digito1.toString() + digito2.toString()
    }
}
if ((digito3 > digito1) && (digito3 > digito2)) {
    if ((digito2 > digito1)){
        combinacion = digito3.toString() + digito2.toString() + digito1.toString()
    }
}

console.log('La combinacion más grande es', combinacion);

//B. ¿Es un número primo?
var posible_numero_primo = 37;
var es_primo = false;
var a = 0;

for(var i =1; i <= posible_numero_primo; i++){
    if(posible_numero_primo % i ==0){
        a = a + 1;
    }
}

if (a==2){
    es_primo = true;
}else{
    es_primo = false;
}


if(es_primo == true){
    console.log('El número', posible_numero_primo, 'SI es primo');
}else{
    console.log('El número', posible_numero_primo, 'NO es primo');
}

//C. FizzBuzz con ¿SWITCH CASE?

for (var i = 1; i <= 100; i++) {
    switch(i){
        case i:
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
}