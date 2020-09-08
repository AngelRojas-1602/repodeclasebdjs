var numero = 8;
const pi = 3.1416;

function variable(){
    let numero = 5;
    console.log(numero);
}

function perimetro(){
    const pi = 3.1416;
    let radio = prompt("ingresa el Radio");
    return (pi*(2*radio));
}

for(var i=0; i <= 100; i++){
    var residuo = 10 % 2;
    console.log( residuo, "Este es par")
    var residuo = 7 % 2;
    console.log( residuo, "Este es impar")
    if( i % 2 !== 0){
        console.log( i );
    }
}

console.log(perimetro());
variable();

console.log(numero);

console.log(pi);