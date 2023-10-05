// * Estructura de un objeto
// let persona ={ // con las llaves definmos el objeto
//   // una lista de pares clave-valor
//   nombre: 'Juan',
//   edad: 30,
//   ocupacion: 'Programador',


// }

// * Leer propiedades del objeto
// console.log(`El nombre de la persona es: ${persona.nombre}, y la edad es: ${persona['edad']}`); 


// * Metodos
// let coche = {
//   // Propiedades
//   marca: 'Toyota',
//   modelo: 'Corolla',
//   // metodos
//   arrancar: function(){
//     console.log('Arrancando el coche');
//   }
// }


// coche.arrancar()

// * Funcion constructora
function Persona(nombre, edad){
  this.nombre = nombre,
  this.edad = edad,
  this.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre}`);
  } 
  // get
  
}

const persona1 = new Persona('Juan', 30)
const persona2 = new Persona('Maria', 25)
persona1.saludar()
persona2.saludar()


let persona ={ // con las llaves definmos el objeto
  // una lista de pares clave-valor
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 30,
  ocupacion: 'Programador',
  sueldo: 50,
  get nombreCompleto(){
    return this.nombre + ' ' + this.apellido
  },

  set nuevaOcupacion({ocupacion, sueldo}){
    this.ocupacion = ocupacion
    this.sueldo = sueldo
  }

}

console.log(persona.nombreCompleto);
persona.nuevaOcupacion = {ocupacion: 'Ingeniero de Sistemas', sueldo: 100}
console.log(persona.ocupacion);
console.log(persona.sueldo);

persona.sueldo = 159


// ! Propiedades privadas

// function Moto(marca, modelo) {}






//     this.marca = marca;
//     this.cilindrada = cilindrada;
//     this.modelo = modelo;
//     this.ficha = function(){}
//   };
//   let moto1 = new Moto("Honda", 110, 2020);
//   let moto2 = new Moto("Yamaha", 110, 2019);


// function Producto(nombre, precio, categoria) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.categoria = categoria;

//   // Método
//   this.mostrarInformacion = function () {
//     console.log(
//       `Nombre: ${this.nombre}, Precio: $${this.precio}, Categoría: ${this.categoria}`
//     );
//   };
// }


// Definir un objeto constructor 
// function Constructora(nombre, direccion) {
//   this.nombre = nombre;
//   this.direccion = direccion;
//   this.mostrarInformacion = function () {
//     console.log(`Nombre: ${this.nombre}, Dirección: ${this.direccion}`);
//   };
// }

// function Pelota(tamanio, deporte, color){
//   // propiedadades
//   this.tamanio = tamanio,
//   this.deporte = deporte,
//   this.color = color, 

//   // metodos
//   this.lanzar = function(){
//     console.log('Lanzando la pelota');
//   }
//   this.pegar = function(){
//     console.log('Pegando la pelota');
//   }
// }

// const pelota = new Pelota('nro 5', 'Futbol', 'blanca y roja');
// const ball1 = new Pelota('nro 11', 'Futbol', 'Blanca');

// console.log('marca' in pelota);
// console.log('tamanio' in pelota);

// for (const key in pelota ){
//   console.log(key);
//   console.log( pelota[key]);  
// }

// * Get


class Moto{
  // Propiedad privada
  #velocidad
  constructor(marca, modelo, color){
    this.marca = marca,
    this.modelo = modelo,
    this.color = color
    this.#velocidad = 0
  }

  enceder(){
    console.log('Encendiendo moto');
  }
  apagar(){
    console.log('Apagando moto');
  }

  acelerar(v){
    let velocidadActual = this.#velocidad + v 
    console.log(`Acelerando moto, velocidad ${velocidadActual}`);
  }
  frenar(){
    console.log('Frenando moto');
  }
}

const moto1 = new Moto('Honda', 'CBR', 'Negro');
const moto2 = new Moto('Yamaha', 'CBR', 'Negro');
moto1.enceder()
moto1.acelerar(40)

// moto1.#velocidad = 200
// console.log(moto1.#velocidad);