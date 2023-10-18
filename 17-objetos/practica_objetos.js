// - Creamos el objeto **`Curso`** usando una función constructora.
// - Agregamos el método **`agregarCritica`** para permitir a los usuarios agregar críticas al curso.
// - Creamos el método **`calcularRatingPromedio`** para calcular el promedio de las críticas del curso.
// - Implementamos el método **`mostrarInformacion`** para mostrar toda la información del curso, incluyendo el rating promedio.

function evento(button, ul, criticas){

}

class Curso {
  constructor(id, nombre, descripcion, precio){
    this.id = id,
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.precio = precio,
    this.criticas = []
  }

  agregarCritica(critica){
    // let button = document.getElementById(`agregar-critica-${this.id}`)
    // button.addEventListener('click', () => {
      document.getElementById(`criticas-${this.id}`).innerHTML = ''
      this.criticas.push(critica)
      this.criticas.forEach(critica => {
        document.getElementById(`criticas-${this.id}`).innerHTML += `<li>${critica}</li>`
      })
    // })

    // evento(button, document.getElementById(`criticas-${this.id}`), this.criticas)

    // aca va el codigo
  }

  mostrarInformacion(){
    // aca va el codigo
    let html = `
              <div id=${this.id}>
                  <h2>${this.nombre}</h2>
                  <p>${this.descripcion}</p>
                  <p>$${this.precio}</p>
                  <ul id='criticas-${this.id}'> 
                  
                  </ul>
                  <button class='btn-critica'> Agregar Critica </button>
              </div>
    `
    return html
  }

}

const container_cursos = document.querySelector('#cursos')

const html = new Curso(1,'Introduccion a HTML', 'En este curso aprenderas los conceptos basicos para maquetar una web', 100)

// html.agregarCritica('Lo super recomiendo')
container_cursos.innerHTML += html.mostrarInformacion()
// html.agregarCritica()

const css = new Curso(2,'Introduccion a CSS', 'En este curso aprenderas los conceptos basicos para darle estilos a tu web', 150)
container_cursos.innerHTML += css.mostrarInformacion()
// css.agregarCritica()

const primeraWeb = new Curso(3, 'Primera web', 'En este curso aprenderas las tecnologias para desarrollar tu primer web', 170)
container_cursos.innerHTML += primeraWeb.mostrarInformacion()
// primeraWeb.agregarCritica()

// TODO agregar evento critica

const cursos = [html, css, primeraWeb]

// nos llega la info de afuera y lo que hacemos es por cada objeto generar la instancia y asignarle los metodos

// const cursos = [
//   {
//     id: 1
//     nombrem,
//     descr, 
//     price,
//     crticas
//   }
// ]

document.querySelectorAll('.btn-critica').forEach(button => {
  button.addEventListener('click', (event) => {
    let critica = prompt('Escribe tu critica')
    let resultadoCurso = cursos.find( curso => curso.id == event.target.parentNode.id)
    resultadoCurso.agregarCritica(critica)
    console.log('hola')
  })
})