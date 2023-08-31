const artistas = [
    {
        nombre: 'Soda Stereo',
        banda: 'Soda Stereo',
        genero: 'Rock',
        ultimoLanzamiento: '2007-11-27',
        album: 'Me Verás Volver',
        imagen: 'https://example.com/imagenes/soda_stereo.jpg'
    },
    {
        nombre: 'Los Auténticos Decadentes',
        banda: 'Los Auténticos Decadentes',
        genero: 'Rock/Ska',
        ultimoLanzamiento: '2019-04-26',
        album: 'MTV Unplugged',
        imagen: 'https://example.com/imagenes/autenticos_decadentes.jpg'
    },

    {
        nombre: 'Charly García',
        banda: 'Solista',
        genero: 'Rock',
        ultimoLanzamiento: '2017-10-27',
        album: 'Random',
        imagen: 'https://example.com/imagenes/charly_garcia.jpg'
    },
    {
        nombre: 'Luis Alberto Spinetta',
        banda: 'Almendra',
        genero: 'Rock',
        ultimoLanzamiento: '1970-12-01',
        album: 'Almendra',
        imagen: 'https://example.com/imagenes/luis_alberto_spinetta.jpg'
    },
    {
        nombre: 'Gustavo Cerati',
        banda: 'Soda Stereo',
        genero: 'Rock',
        ultimoLanzamiento: '1995-11-07',
        album: 'Sueño Stereo',
        imagen: 'https://example.com/imagenes/gustavo_cerati.jpg'
    },
    {
        nombre: 'Fito Páez',
        banda: 'Solista',
        genero: 'Rock',
        ultimoLanzamiento: '2021-11-12',
        album: 'La conquista del espacio',
        imagen: 'https://example.com/imagenes/fito_paez.jpg'
    },
    {
        nombre: 'Andrés Calamaro',
        banda: 'Los Rodríguez',
        genero: 'Rock',
        ultimoLanzamiento: '2021-11-19',
        album: 'Dios los cría (Edición Especial)',
        imagen: 'https://example.com/imagenes/andres_calamaro.jpg'
    },
    {
        nombre: 'Shakira',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2021-04-02',
        album: 'El Dorado',
        imagen: 'https://example.com/imagenes/shakira.jpg'
    },
    {
        nombre: 'Ariana Grande',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-10-30',
        album: 'Positions',
        imagen: 'https://example.com/imagenes/ariana_grande.jpg'
    },
    {
        nombre: 'Dua Lipa',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-03-27',
        album: 'Future Nostalgia',
        imagen: 'https://example.com/imagenes/dua_lipa.jpg'
    },
    {
        nombre: 'Taylor Swift',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-07-24',
        album: 'Folklore',
        imagen: 'https://example.com/imagenes/taylor_swift.jpg'
    },
    {
        nombre: 'Eminem',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2020-12-18',
        album: 'Music To Be Murdered By - Side B',
        imagen: 'https://example.com/imagenes/eminem.jpg'
    },
    {
        nombre: 'Kendrick Lamar',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2017-04-14',
        album: 'DAMN.',
        imagen: 'https://example.com/imagenes/kendrick_lamar.jpg'
    },
    {
        nombre: 'Drake',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2021-09-03',
        album: 'Certified Lover Boy',
        imagen: 'https://example.com/imagenes/drake.jpg'
    },
    {
        nombre: 'Virus',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2021-09-03',
        album: 'Certified Lover Boy',
        imagen: 'https://example.com/imagenes/drake.jpg'
    },
];

const generosMusicales = [
    { id: 1, nombre: "Rock" },
    { id: 2, nombre: "Pop" },
    { id: 3, nombre: "Electrónica" },
    { id: 4, nombre: "Hip Hop" },
    { id: 5, nombre: "Reggaetón" },
    // Agrega más categorías según sea necesario
    ];


const $ = document;
const containerArtistas = document.getElementById('artistas')
const containerGenero = document.getElementById('generoMusical')


// * 1- VISTA GENERAL

// // estructura card HTML
// let div = $.createElement('div')
// let h2 = $.createElement('h2')
// let h3 = $.createElement('h3')
// let small = $.createElement('small')
// let p = $.createElement('p')
// let p_ultimoLanzamiento = $.createElement('p')
// let img = $.createElement('img')

// // contenido card
// let nombre = $.createTextNode(artistas[1].nombre)
// let banda = $.createTextNode(artistas[1].banda)
// let genero = $.createTextNode(artistas[1].genero)
// let album = $.createTextNode(artistas[1].album)
// let ultimoLanzamiento = $.createTextNode(artistas[1].ultimoLanzamiento)

// // referenciar (atar) el contenido con su correcpondiente etiqueta html
// h2.appendChild(nombre)
// h3.appendChild(banda)
// small.appendChild(genero)
// p.appendChild(album)
// p_ultimoLanzamiento.appendChild(ultimoLanzamiento)

// img.setAttribute('src', artistas[1].img)

// div.append(h2, h3, small, p, p_ultimoLanzamiento, img)
// document.body.appendChild(div)


function createCard(artista){
    // estructura card HTML
    let div = $.createElement('div')
    let h2 = $.createElement('h2')
    let h3 = $.createElement('h3')
    let small = $.createElement('small')
    let p = $.createElement('p')
    let p_ultimoLanzamiento = $.createElement('p')
    let img = $.createElement('img')

    // agreagar estilos
    div.classList.add('card')

    // contenido card
    let nombre = $.createTextNode(artista.nombre)
    let banda = $.createTextNode(artista.banda)
    let genero = $.createTextNode(artista.genero)
    let album = $.createTextNode(artista.album)
    let ultimoLanzamiento = $.createTextNode(artista.ultimoLanzamiento)

    // referenciar (atar) el contenido con su correcpondiente etiqueta html
    h2.appendChild(nombre)
    h3.appendChild(banda)
    small.appendChild(genero)
    p.appendChild(album)
    p_ultimoLanzamiento.appendChild(ultimoLanzamiento)

    img.setAttribute('src', artista.img)

    div.append(h2, h3, small, p, p_ultimoLanzamiento, img)
    containerArtistas.appendChild(div)
}

artistas.forEach(function(artista){
    createCard(artista)
})

for (const genero of generosMusicales ) {
    console.log(genero);
    containerGenero.innerHTML += `<a class='item_genero' id="genero-${genero.id}">${genero.nombre}</a>`
}

