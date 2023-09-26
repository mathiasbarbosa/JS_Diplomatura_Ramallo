// traer los usuarios del local storage y parsearlos
const usuarios = JSON.parse( localStorage.getItem('usuarios')) || []

const form = document.getElementById('form')
const inputs = document.querySelectorAll('input')

const forEachInput = (inputs, fn) => {
  inputs.forEach( input => fn(input))
}

function validateInputHTML(input){
  input.value === '' ?  input.style.border = '1px solid red': input.style.border = ''
  
}


forEachInput(inputs, (input) => {
  input.addEventListener('blur', () => {
        validateInputHTML(input)
      })
})


const existe_usuario = (email, password) => {
  let find = usuarios.find(usuario => usuario.email === email && usuario.password === password )
  return find ? find : false

}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let user = existe_usuario(email, password)
  console.log(user);
  console.log(email);
  console.log(password);
  if(user){
    sessionStorage.setItem('usuario', JSON.stringify(user))
    window.location = '../app.html'
  }else{
    alert('credenciales incorrectas')
  }

})
