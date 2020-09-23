/*
  Programación Orientada a Objetos es una
  forma de estructura o resolver un problema
  a través de objetos.

  Objeto: Una entidad o cosa del mundo real
  que podemos describir, es decir,  sus propiedades
  (atributos) y sus acciones (métodos).

  Objeto: Usuario

    Propiedades:
      * Nombre
      * Identificador
      * Correo electrónico
      * Edad
    
    Acciones:
      * Log In
      * Escribir
      * Enviar datos
      * Dar click
  
  Objeto: Carro

    Propiedades:
      * # de llantas
      * modelo
      * motor
      * marca
      * # de asientos
      * color
    
    Acciones:
      * Tocar bocina
      * Arrancar
      * Reversa
      * Neutral
      * Frenar
      * Detenerse
  
  En JavaScript hay dos formas de crear objetos, 
  la primera es usando las literales {}, y la segunda
  es utilizando clases.
*/

/*
  var: 
    * Permite crear una variable más de una vez.
    * Asignar un nuevo a valor al amisma variable
    * El alcance (hasta dónde pueden utilizar la variable)
    es la función más cercana.

  let:
    * No permite crear una variable más de una vez.
    * Asignar un nuevo valor a la misma variable.
    * El alcance son las llaves más cercanas.
  
  const:
    * El alcance es el mismo que let.
    * No se puede asignar un nuevo valor a la misma constante.
*/

// #1 Utilizando literales ({})
const carro = {
  // ------------------------- ATRIBUTOS DEL OBJETO
  num_llantas: 4,
  modelo: "X3",
  marca: "BMW",
  motor: "HSK0911J",
  num_asientos: 5,
  color: "Blanco",
  disponibilidad: ["MX", "USA", "UK", "ESP", "JP"],
  // --------------------------

  // --------------------------- MÉTODOS / FUNCIONES DEL OBJETO
  tocarBocina: function () {
    console.log("BIP BIIIIIPPPPPP!!!!");
  },

  frenar: function () {
    // ...
  },

  arrancar() {
    // ...
  },

  detenerse() {
    // ...
  },

  reversa() {
    // ...
  }
  // ---------------------------
};

// Notación punto:  variable.propiedad, variable.metodo()
console.log(carro.marca, carro.modelo);
carro.tocarBocina();

carro.color = "Azul";

console.log(carro.color);

// -------------------------------------------------

const humano = {
  nombre: "Carmen",
  edad: 33,
  nacionalidad: "Mexicana",
  //     v acento
  profesión: "Ing. geóloga",
  fechaDeNacimiento: "24/06/1987",
  mascota: "gato",
  direccion: {
    calle: "",
    num_exterior: "",
    colonia: ""
  },
  dormir() {
    console.log("ZZzzzzzzzzzzzz....");
  }
};

const sebastian = {
  nombre: "Sebastian",
  apellido: "Gonzalez",
  nacionalidad: "mexicana",
  fecha_de_nacimiento: "28/01/1996",

  comer() {
    console.log("come");
  },

  dormir() {
    console.log("duerme");
  }
};

const angelRojas = {
  nombre: "Angel",
  apellido: "Rojas",
  nacionalidad: "mexicana",
  edad: 19,
  estadoCivil: "Soltero",
  estudiar() {
    console.log("Lee pdf´s");
  },
  jugar() {
    console.log("Abre Minecraft");
  },
  comer() {
    console.log("prepara comida");
  }
};

const giovani = {
  nombre: "giovani",
  apellido: "jimenez",
  edad: "25",
  nacionalidad: "Mexicana",

  soy: function () {
    console.log("giovani");
  }
};

const enrique = {
  nombre: "Enrique",
  apellido: "Mendez",
  nacionalidad: "mexicana",
  FechaDeNacimiento: "24/09/2004",
  ocupacion: "estudiante",
  despertar() {
    console.log("levantarse");
  },
  desayunar() {
    console.log("comer cereal");
  },
  estudiar() {
    console.log("abir zoom");
  }
};

const yteelmontoya = {
  nombre: "Yteel",
  apellido: "Montoya",
  nacionalidad: "Mexicana",
  edad: 40,
  profesion: "Matematico",
  hobbie: "ciclismo",

  descripcion() {
    console.log(nombre + apellido);
  }
};

const Carlos = {
  nombre: "Carlos",
  apellido: "Estrada",
  edad: 25,
  altura: 183,
  paisDeOrigen: "México",
  profesión: "Ing. en Comunicaciones y Electrónica",
  universidadEstudios: "UdeG",

  frases: function () {
    console.log("Nunca te pido nada");
  }
};

console.log("El nombre es:", Carlos.nombre);
Carlos.frases();

const Oscoy = {
  primer_nombre: "Alberto",
  primer_apellido: "Gonzalez",
  colores: {
    color_1: "azul",
    color_2: "verde"
  }
};

const JCarlos = {
  nombre: "Juan Carlos",
  apellido: "Cedano",

  saludo() {
    console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
  }
};

// -----------------------------------------------------

const bmw = {
  // ------------------------- ATRIBUTOS DEL OBJETO
  modelo: "X3",
  marca: "BMW",
  velocidad: 0, // <-----------------------
  // --------------------------

  // --------------------------- MÉTODOS / FUNCIONES DEL OBJETO
  tocarBocina: function () {
    console.log("BIP BIIIIIPPPPPP!!!!");
  },

  arrancar() {
    // bwm.velocidad = 10;
    this.velocidad = 10;
  },

  acelerar() {
    // this.velocidad = this.velocidad + 30;
    this.velocidad += 30;
  },

  detenerse() {
    this.velocidad = 0;
  }
  // ---------------------------
};
console.log("Velocidad del BMW", bmw.velocidad); // velocidad = 0

bmw.arrancar(); // velocidad = 10
console.log("Velocidad del BMW", bmw.velocidad);

bmw.acelerar(); // velocidad = 40
bmw.acelerar(); // velocidad = 70
bmw.acelerar(); // velocidad = 100

console.log("Velocidad del BMW", bmw.velocidad);

bmw.detenerse(); // velocidad = 0
console.log("Velocidad del BMW", bmw.velocidad);

/*
  this es la referencia del objeto mismo
  dentro de un método.

  Con this tengo acceso a todas las propiedades
  y métodos de un objeto.
*/

const calculadora = {
  encedido: false,

  suma(a, b) {
    if (!this.encedido) {
      console.log("La calculadora no esta encendida");
      return NaN;
    } else {
      return a + b;
    }
  },

  resta(a, b) {
    if (!this.encedido) {
      console.log("La calculadora no esta encendida");
      return NaN;
    } else {
      return a - b;
    }
  },

  multiplicacion(a, b) {
    if (!this.encedido) {
      console.log("La calculadora no esta encendida");
      return NaN;
    } else {
      return a * b;
    }
  },

  encender() {
    this.encedido = true;
  },

  apagar() {
    this.encedido = false;
  }
};

calculadora.encender();
console.log("1 + 2 = ", calculadora.suma(1, 2));
calculadora.apagar();


/*
  Clase

  Es una plantilla que define a un objeto.

  Se recomienda que el nombre de la clase
  sea con "PascalCase"

  Utilizar clases en JS en realidad es un "azucar
  síntactico" (es algo que endulza el lenguaje / una
  manera más fácil de hacer algo que ya existia).
*/
class Carro {
  /*
    El constructor es un método/función especial
    que es ejecutado una única vez
    al utilizar el operador "new".

    Por lo general en JS, se utiliza
    para definir los atributos de la clase.
  */
  constructor(marca, modelo) {
    console.log("Ejecutando constructor...");
    this.velocidad = 0;
    this.marca = marca;
    this.modelo = modelo;
  }

  arrancar() {
    this.velocidad = 10;
  }

  acelerar() {
    this.velocidad += 30;
  }

  detenerse() {
    this.velocidad = 0;
  }

  /* 
    Métodos estáticos

    Son métodos que se pueden acceder SIN LA NECESIDAD
    de crear una instancia.
  */
  static obtenerNumeroLlantas() {
    return 4;
  }
}

/*
  Para crear un objeto a partir de una clase
  se utiliza el operador "new".

  A los objetos creados con el operador new se les llama
  "instancias" de la clase.
*/
const bmw = new Carro("BMW", "X3");
const volkswagen = new Carro("Volkswagen", "New Beetle");

bmw.arrancar();
bmw.acelerar();

volkswagen.arrancar();
volkswagen.acelerar();

console.log("bmw", bmw);
console.log("volkswagen", volkswagen);

console.log("Numero de llantas", Carro.obtenerNumeroLlantas());

/*
  Math

  La clase Math contiene herramientas
  matemáticas más comunes.
*/

console.log(Math.floor(3.1416));
console.log(Math.ceil(3.1416));
console.log(Math.random());

// Función que genera un número aleatorio entre 1 y 5
function generar_aleatorio() {
  return Math.ceil(Math.random() * 5);
}

console.log(generar_aleatorio());

console.log(Date.now());


/*
  Ejemplo:

  Diseñar con POO una máquina expendedora.

  Si la máquina esta apagada, no puede despachar. [OK]

  La máquina contiene productos que tienen
  una descripcion y un precio. [OK]

  La máquina recibe dinero para poder entrar
  el producto. [OK]

  La máquina entrega un producto de forma
  aleatoria. [OK]

  La máquina debe llevar la cuenta
  de cuánto dinero lleva juntado. [OK]

  La máquina debe tener algún mecanismo
  para llenarlo nuevamente con productos. [OK]

 La máquina regresa cambio. [OK]
*/
class Producto {
  constructor(descripcion, precio) {
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

class MaquinaExpendedora {
  constructor() {
    this.encendido = false;
    this.productos = [];
    this.ventaTotal = 0;
    this.dineroDepositado = 0;
  }

  encenderMaquina() {
    this.encendido = true;
  }

  apagarMaquina() {
    this.encendido = false;
  }

  depositarDinero(cantidad) {
    if (!this.encendido) {
      console.log("Para depositar dinero debes encender la máquina");
    } else {
      this.dineroDepositado += cantidad;
    }
  }

  despechar() {
    if (!this.encendido) {
      console.log("Para despachar un producto debes encender la máquina");
    } else {
      const dineroDepositado = this.dineroDepositado;

      for (let i = 0; i < this.productos.length; i++) {
        const producto = this.productos[i];
        if (producto.precio <= dineroDepositado) {
          this.ventaTotal += producto.precio;

          const cambio = dineroDepositado - producto.precio;
          this.dineroDepositado = 0;

          return {
            productoSeleccionado: producto,
            cambio: cambio
          };
        }
      }

      console.log("No te alcanza para ningún producto");
      return null;
    }
  }

  rellenar(producto) {
    if (this.encendido) {
      console.log("Para llenar la máquina debes apagarla");
    } else {
      this.productos.push(producto);
    }
  }

  regresarDinero() {
    this.dineroDepositado = 0;
  }

  obtenerVentas() {
    console.log("En total he vendido $" + this.ventaTotal + " MXN");
  }
}

// PROBANDO EL CÓDIGO -------------------------------------------------------
const maquina = new MaquinaExpendedora();

maquina.rellenar(new Producto("Coca Cola 600 ml", 20));
maquina.rellenar(new Producto("Fuze Tea 600 ml", 13));
maquina.rellenar(new Producto("Mazapan La Rosa", 8));

maquina.encenderMaquina();

maquina.depositarDinero(5);
maquina.depositarDinero(10);
maquina.depositarDinero(1);
maquina.depositarDinero(1);
maquina.depositarDinero(1);
maquina.depositarDinero(1);

console.log(maquina.despechar());

maquina.depositarDinero(10);

console.log(maquina.despechar());

maquina.obtenerVentas();

maquina.apagarMaquina();
