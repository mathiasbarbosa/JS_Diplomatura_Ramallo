
const id = (id) => document.getElementById(id)
const tagName = (cls) => document.querySelectorAll(cls)
const usuarios = []

const formulario = id('form')
const inputs = tagName('input')
const selects = tagName('select')


const validateInputs = (inputs) => {
  return [...inputs].every((input) => input.value !== '')
}

const validateInputsHTML = (input) => {
  if (input.value === '') {
    input.style.border = '1px solid red'
  } else {
    input.style.border = ''
  }
}

const validateTerminos = () => {
  let terminos = document.querySelector("[name='terminos_condiciones']").checked

  if (!terminos) {
    return document.querySelector("[for='terminos_condiciones']").innerHTML += '<p id="p_terminos_condiciones">Debes aceptar los terminos y condiciones</p>'
  }

  return document.querySelector("[for='terminos_condiciones']").removeChild(document.querySelector("#p_terminos_condiciones"))
}

const forEachInput = (inputs, fn) => {
  inputs.forEach((input) => {
    fn(input)
  })
}

forEachInput(inputs,(input) => {
  input.addEventListener('blur', () => {
    validateInputsHTML(input)
  })
})

selects.forEach((select) => {
  select.addEventListener('change', () => {
    validateInputsHTML(select)
  })
})


formulario.addEventListener('submit',(e) => {
  e.preventDefault()
  
  let validateInputsText = validateInputs(inputs)
  let validateInputsSelect = validateInputs(selects)
  let terminos_condiciones = document.querySelector("[name='terminos_condiciones']").checked

  if (validateInputsText && validateInputsSelect && terminos_condiciones) {
    if (id('password').value === id('password_r').value) {
      const usuario = {
        firstName: id('firstName').value,
        lastName: id('lastName').value,
        email: id('email').value,
        password: id('password').value,
        pais: id('pais').value,
        medio_pago: id('medio_pago').value
      }
      usuarios.push(usuario)
      formulario.reset()
    }else{
      id('password').style.border = '1px solid red'
      id('password_r').style.border = '1px solid red'
    }
  }else{
    forEachInput(inputs, validateInputsHTML)
    forEachInput(selects, validateInputsHTML)
    validateTerminos()
  }
})