// function nacimiento(){
//     nombre = prompt("Como te llamas?");
//     edad = Number(prompt("Cuál es tu edad?"));
//     anio = 2020 - edad;
//     return  `Tu nombre es: ${nombre} y naciste en el año: ${anio}`;
// }


// console.log(nacimiento());

// function calcular(a, b){
//     a = Number(prompt("Dame el primer número: "))
//     b = Number(prompt("Dame el segundo número: "))
//     if (a == b) {
//         resultado = console.log ("Los numeros son los mismos")
//     } else {
//         if (a>b){
//             resultado = console.log ("El primer numero es mayor que el segundo")
//         } else {
//             resultado = console.log ("El segundo numero es mayor que el primero")
//         }
//     }
//     return resultado
// }

// calcular()

// var queHaces = function(trabajo, nombre){
//     switch(trabajo){
//         case 0:
//             return nombre + " Para ser programador, debes tener mucha paciencia."

//         case 1:
//             return nombre + " Para ser diseñador, debes tener mucha creatividad."

//         default:
//             return nombre + " No se que es eso, pero cuentame más."
//     }
// }

// console.log(queHaces(0, 'Nestor'))
// console.log(queHaces(1, 'Nestor'))
// console.log(queHaces(2,'Nestor'))

// (function calculaEdad(nacimiento, nombre){
//     let edad = 2020 - nacimiento;
//     let infoUsuario = edad + nombre;
//     console.log(infoUsuario);
//     return infoUsuario;
// }(2001, "Nestor"));


 //Ejercicio de la Potencia
function power(a, b){
        a = Number(prompt("Dame el número base: "))
        b = Number(prompt("Dame la potencia: "))
        resultado = a**b
        return resultado
}

console.log(power())


//Ejercicio por parte de  BEDU
// function power(base, exponent) {
//     var result = 1;

//     for(var i = 0; i < exponent; i++) {
//       result *= base; // Same as: result = result * base;
//     }

//     return result;
// }

//Ejercicio de la serie de Fibonacci
// function FiboNacci(a){
//     a = Number(prompt("Dime que número de la serie quieres conocer?"))
//     if ( a <= 2){
//         return 1
//     } else{
//         resultado = ((a[a-1]) + (a[a-2]))
//         return resultado
//     }
// }
// FiboNacci()