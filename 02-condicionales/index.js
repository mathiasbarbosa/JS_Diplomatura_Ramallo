// operadores condicionales 

let num1 = 5 
let num2 = 5

// console.log(num1 == num2);
// console.log(num1 != num2);
// console.log(num1 === num2);
// console.log(num1 !== '5');
// console.log(num1 === '5');

// console.log(num1 > num2);
// console.log(num1 >= num2);
// console.log(num1 < num2);
// console.log(num1 <= num2);

// estructura de control 

// Comparación de Edades:
//Escribe un programa que compare la edad de dos personas e imprima si la primera persona es mayor, menor o tiene la misma edad que la segunda persona.


// let persona_uno = prompt('Cuantos años tenes')
// let persona_dos = prompt('Cuantos años tenes persona 2')

// console.log(typeof persona_uno);
// persona_uno = parseInt(persona_uno)
// console.log(typeof persona_uno);

// if (persona_uno > persona_dos){
//     // el bloque de codigo que tengamos aca
//     alert('la persona 1 es mayor')
// }

// console.log(`Persona uno tiene: ${persona_uno}`);
// console.log(`Persona dos tiene: ${persona_dos}`);

// if (persona_uno > persona_dos){
//     // el bloque de codigo que tengamos aca
//     alert('la persona 1 es mayor')
// }else{
//     alert('la persona 2 es mayor')
// }


// if (parseInt( persona_uno) > parseInt(persona_dos)){
//     // el bloque de codigo que tengamos aca
//     alert('la persona 1 es mayor')
// }else if(parseInt( persona_uno) < parseInt( persona_dos)){
//     alert('la persona 2 es mayor')
// }else if( parseInt( persona_uno) ==  parseInt( persona_dos)){
//     alert('Las personas tienen la misma edad')
// }



// console.log('sigo la ejecucion del programa');



// Verificar Contraseña:
// Crea un programa que solicite al usuario ingresar una contraseña. Luego, compara esa contraseña con una contraseña predefinida y muestra un mensaje si la contraseña es correcta o incorrecta.

// Comparación de Números Pares:
// Escribe un programa que determine si un número ingresado por el usuario es par o impar. Imprime un mensaje apropiado para cada caso.

// Operadores logicos

// let edad = prompt('cuantos años tenes')
// let tiene_licencia;

// if(edad > 17 && tiene_licencia){
//     alert('es mayor de edad y tiene licencia, puede manejar')
// }

// if (edad > 17) {
//     tiene_licencia = confirm('Tenes licencia?')
//     if (tiene_licencia) {
//         alert(`Tenes ${edad} y podes manejar porque tenes licencia`)
//     } else {
//         alert('No tenes licencia para manejar')
//     }

// } else {
//     alert('No tenes edad suficiente para manejar')
// }

// Ingreso a una Fiesta:
// Pregunta al usuario su edad y si tiene invitación. Solo permite el ingreso si el usuario tiene al menos 18 años o si tiene invitación. Muestra un mensaje aprobando o rechazando el ingreso.

// OR 

// edad = parseInt(prompt('Cuantos años tenes?'))
// let invitacion = confirm('Tenes invitacion?')
// const edad_requerida = 18

// if(edad >= edad_requerida || invitacion === true ){
//     alert('Podes ingresar a la fiesta, divertite y no tomes si manejas')
// }else{
//     alert('Alpiste, a tu casa pa')
// }



// switch 

// Calificación Escolar:
// Escribe un programa que solicite al usuario ingresar una calificación numérica (por ejemplo, del 0 al 100). Luego, muestra un mensaje que indique si el estudiante aprobó, reprobó o necesita mejorar.

let calificación = Number(prompt('Que calificacion obtuviste?'))



switch (calificación) {
    case 100:
        // instrucciones que queremos ejecutar
        alert('Aprobaste con la nota mas alta')
        break;

    case 90:
    case 80:
    case 70:
        // instrucciones que queremos ejecutar
        alert('Aprobaste con una buena nota')
        break;

    case 60:
        alert('Aprobaste con lo justo')
        break;
    case 80:
    case 40:
    case 30:
    case 20:
    case 10:
    case 0:
        alert('Lamentablemente desaprobaste')
        break;

    default:
        alert('calificacion no valida')
        break;
}

// ### Ejercicio Final:

// **Enunciado: Calculadora de Aprobación Escolar**

// Escribe un programa en JavaScript que ayude a determinar si un estudiante ha aprobado o reprobado una asignatura. El programa debe realizar lo siguiente:

// 1. Solicitar al usuario que ingrese su nota en la asignatura (un número entre 0 y 100).
// 2. Utilizar la estructura **`if`** para evaluar la nota ingresada. Si la nota es mayor o igual a 60, mostrar un mensaje que diga "Aprobado". Si la nota es menor a 60, mostrar un mensaje que diga "Reprobado".
// 3. Si la nota es menor a 0 o mayor a 100, mostrar un mensaje que indique que la nota es inválida.
// 4. Además de la nota, preguntar al usuario si entregó todos los trabajos y asistió a todas las clases (sí o no). Si el usuario responde "no" a cualquiera de estas preguntas, mostrar un mensaje adicional que indique "Debe mejorar la asistencia y la entrega de trabajos para la próxima evaluación".
// 5. Utilizar un operador lógico (por ejemplo, **`&&`** o **`||`**) para combinar las respuestas sobre la asistencia y la entrega de trabajos. Si el estudiante tiene baja asistencia o no entregó todos los trabajos, mostrar el mensaje adicional mencionado en el punto anterior.
// 6. Utilizar la estructura **`switch`** para mostrar un mensaje personalizado dependiendo de la nota obtenida. Por ejemplo, si la nota es entre 90 y 100, mostrar "¡Excelente trabajo!". Si la nota está entre 80 y 89, mostrar "Buen trabajo". Y así sucesivamente.