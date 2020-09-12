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



console.log(perimetro());
variable();

console.log(numero);

console.log(pi);