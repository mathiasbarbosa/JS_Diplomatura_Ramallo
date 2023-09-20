
const id = (id) => document.getElementById(id)
const className = (cls) => document.querySelectorAll(cls)
const usuarios = []

const formulario = id('form')
const inputs = className('input')


// TODO  validar campos
const validate = (input) => {
  if (input.value === '')  {
    input.style.border = '1px solid red'
    return false
  }
  input.style.border = ''
  return true
}

// const recorrerInputs = () => {
//   let usuario = {}
//   for(let i = 0; i < inputs.length; i++  ){
//     if (validate(inputs[i])) {
//       return  usuario = {...usuario, [inputs[i].name]: inputs[i].value}
//       }
//       return usuario = {messagge: 'campos incompletos'}
//   } 
//   return usuario
// }

const obtenerValuesInput = () => {
  let usuario = {
    firstName: id('firstName').value,
    lastName: id('lastName').value,
    email: id('email').value,
    password: id('password').value 
  }

  console.log(usuario);
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()
  let newUsuario = recorrerInputs()

  if (newUsuario.messagge) {
    alert(newUsuario.messagge)
  }else{
    // TODO enviar a la api, metodo post.
    usuarios.push(newUsuario)
    document.body.innerHTML += `<h2>Hola ${newUsuario.firstName}</h2>`
  }

})