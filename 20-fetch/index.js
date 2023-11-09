// Realizar una request y traernos las provincias
// fetch(url, options[opcional]) sintaxis basica

const mainProvincias = document.getElementById('provincias')
function crearTarjetas (array){
  array.forEach(provincia => {
    mainProvincias.innerHTML += `
      <div class='tarjeta'> 
        <h3> ${provincia.nombre} </h3>
        <p> ${provincia.id} </p>
        <p> Lat: ${provincia.centroide.lat} Long: ${provincia.centroide.lon} </p>
      </div>
    `
  });
}

function eventoTarjeta(){
  const tarjetas = document.querySelectorAll('.tarjeta')
  console.log(tarjetas);
  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', (event) => {
      let nombreProvincia = event.target.children[0].textContent
      console.log(nombreProvincia);
      window.location.href = `./localidades.html?provincia=${nombreProvincia}`
    })
  })
}

const URL_base = 'https://apis.datos.gob.ar/georef/api'
// https://apis.datos.gob.ar/georef/api/localidades?provincia=buenos%20aires&campos=nombre&max=50
// asincrono y lo que nos va a devolver es una Promesa
fetch(
  `${URL_base}/provincias`,
  {method: 'GET'}
)
  .then(response => {
    // Sale todo bien lo trabajamos en el then  
    console.log(response)
    if (response.status === 200 && response.ok === true) {
      return response.json()
    }
  })
  .then(data => {
    crearTarjetas(data.provincias)
    eventoTarjeta()
  })
  // .then(() =>  eventoTarjeta() )
  .catch(err => console.log(err))

/// Lo que sigue -😀
// eventoTarjeta()