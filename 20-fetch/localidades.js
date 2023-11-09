let provincia = new URLSearchParams(window.location.search).get('provincia')
console.log(provincia);


const URL_base = 'https://apis.datos.gob.ar/georef/api'
// https://apis.datos.gob.ar/georef/api/localidades?provincia=buenos%20aires&campos=nombre&max=50
const title = document.querySelector('#title')
const mainLocalidades = document.getElementById('localidades')

function crearTarjetas (array){
  mainLocalidades.innerHTML = "";
  array.forEach(provincia => {
    mainLocalidades.innerHTML += `
      <div class='tarjeta'> 
        <h3> ${provincia.nombre} </h3>
        <p> ${provincia.id} </p>
        
      </div>
    `
  });
}

fetch(`${URL_base}/localidades?provincia=${provincia}&campos=nombre&max=50`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    crearTarjetas(data.localidades)
    title.innerHTML += ` ${provincia}`
    const inputSearch = document.getElementById('searchLocalidad')
    inputSearch.addEventListener('input', (event) => {
      console.log(event.target.value);
      let localidad = event.target.value
      let findLocalidades = data.localidades.filter(l => l.nombre.toLowerCase().includes(localidad.toLowerCase()));
      console.log(findLocalidades);
      crearTarjetas(findLocalidades)
    })

  })

