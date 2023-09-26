const id = (id) => document.getElementById(id)
const tagName = (tag) => document.querySelectorAll(tag) 

const formulario = id('form')
const inputs = tagName('input')
const select = tagName('select')

const usuarios = []

function validateInputs (array){
  return [...array].every((input) => input.value !== '')
}

function validateInputHTML(input){
  if (input.value === '') {
    input.style.border = '1px solid red'
  }else{
    input.style.border = ''
  }
}

function forEachInput (inputs, fn){
  inputs.forEach((input) => {
    fn(input)
  })
}

function validateTerminos(){
  let terminos = document.querySelector('[name="terminos_condiciones"]').checked

  if(!terminos) {
    return document.querySelector('[for="terminos_condiciones"]').innerHTML += '<p id="p_terminos_condiciones"> Tenes que aceptar los terminos y condiciones</p>'
  }
  
  return  document.querySelector('[for="terminos_condiciones"]').removeChild(document.querySelector('#p_terminos_condiciones'))
}


forEachInput(inputs, (input) => {
  input.addEventListener('blur', () => {
        validateInputHTML(input)
      })
})

forEachInput(select, (select) => {
  select.addEventListener('blur', () => {
    validateInputHTML(select)
  })
})



formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  let validateInputsText = validateInputs(inputs)
  let validateInputsSelect = validateInputs(select)
  let inputterminos = document.querySelector('[name="terminos_condiciones"]').checked


  if (validateInputsText && validateInputsSelect && inputterminos) {
    if (id('password').value === id('password_r').value) {
      const usuario = {
        firstName: id('firstName').value,
        lastName: id('lastName').value,
        email: id('email').value,
        password: id('password').value,
        pais: id('pais').value,
        medio_pago: id('medio_pago').value
      }
      console.log(usuario);
      console.log(JSON.stringify(usuario));
      usuarios.push(usuario)
      localStorage.setItem('usuario',  JSON.stringify(usuarios))
      window.location = './login.html'
    }else{
      id('password').style.border = '1px solid red'
      id('password_r').style.border = '1px solid red'
    }
  }else{
    forEachInput(inputs, validateInputHTML)
    forEachInput(select, validateInputHTML)
    validateTerminos()
  }


})