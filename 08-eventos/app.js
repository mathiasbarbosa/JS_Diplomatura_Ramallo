const artistas = [
    {
        nombre: 'Soda Stereo',
        banda: 'Soda Stereo',
        genero: 'Rock',
        ultimoLanzamiento: '2007-11-27',
        album: 'Me Verás Volver',
        imagen: 'https://i.scdn.co/image/ab67616d0000b273e885d6895a32a612813bf6d3'
    },
    {
        nombre: 'Los Auténticos Decadentes',
        banda: 'Los Auténticos Decadentes',
        genero: 'Rock/Ska',
        ultimoLanzamiento: '2019-04-26',
        album: 'MTV Unplugged',
        imagen: 'https://www.zonadeobras.com/wp-content/uploads/2018/11/autenticos-disco.jpg'
    },

    {
        nombre: 'Charly García',
        banda: 'Solista',
        genero: 'Rock',
        ultimoLanzamiento: '2017-10-27',
        album: 'Random',
        imagen: 'https://fotos.perfil.com/2019/10/22/charly-garcia-795233.jpg'
    },
    {
        nombre: 'Luis Alberto Spinetta',
        banda: 'Almendra',
        genero: 'Rock',
        ultimoLanzamiento: '1970-12-01',
        album: 'Almendra',
        imagen: 'https://cdns-images.dzcdn.net/images/cover/bb4591a4c56f889dc093bba9512ed1eb/264x264.jpg'
    },
    {
        nombre: 'Gustavo Cerati',
        banda: 'Soda Stereo',
        genero: 'Rock',
        ultimoLanzamiento: '1995-11-07',
        album: 'Sueño Stereo',
        imagen: 'https://assets.megamediaradios.fm/sites/2/2021/08/siempre-es-hoy-2-1024x1024.jpg'
    },
    {
        nombre: 'Fito Páez',
        banda: 'Solista',
        genero: 'Rock',
        ultimoLanzamiento: '2021-11-12',
        album: 'La conquista del espacio',
        imagen: 'https://diariohoynet.nyc3.cdn.digitaloceanspaces.com/adjuntos/galerias/000/480/0000480752.jpg'
    },
    {
        nombre: 'Andrés Calamaro',
        banda: 'Los Rodríguez',
        genero: 'Rock',
        ultimoLanzamiento: '2021-11-19',
        album: 'Dios los cría (Edición Especial)',
        imagen: 'https://www.calamaro.com/wp-content/uploads/2013/10/altasuciedad1997.jpg'
    },
    {
        nombre: 'Shakira',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2021-04-02',
        album: 'El Dorado',
        imagen: 'https://akamai.sscdn.co/letras/360x360/albuns/3/9/5/6/1113691626708476.jpg'
    },
    {
        nombre: 'Ariana Grande',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-10-30',
        album: 'Positions',
        imagen: 'https://i.scdn.co/image/ab67616d0000b2735ef878a782c987d38d82b605'
    },
    {
        nombre: 'Dua Lipa',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-03-27',
        album: 'Future Nostalgia',
        imagen: 'https://upload.wikimedia.org/wikipedia/en/2/20/Dua_Lipa_%28album%29.png'
    },
    {
        nombre: 'Taylor Swift',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-07-24',
        album: 'Folklore',
        imagen: 'https://i.scdn.co/image/ab6761610000e5eb6a224073987b930f99adc706'
    },
    {
        nombre: 'Eminem',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2020-12-18',
        album: 'Music To Be Murdered By - Side B',
        imagen: 'https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/264x264.jpg'
    },
    {
        nombre: 'Kendrick Lamar',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2017-04-14',
        album: 'DAMN.',
        imagen: 'https://indiehoy.com/wp-content/uploads/2017/05/Kendrick-Lamar-DAMN.jpeg'
    },
    {
        nombre: 'Drake',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2021-09-03',
        album: 'Certified Lover Boy',
        imagen: 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'
    },
    {
        nombre: 'Virus',
        banda: 'Virus',
        genero: 'Rock',
        ultimoLanzamiento: '1998-09-03',
        album: '9',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Relax_1984_Virus.jpg'
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
    const nav_lower_player = document.querySelector('#nav_lower_player')
    const close_nav_player = document.querySelector('#close_nav_player')
    const container_data_artista = document.querySelector('#container_data_artista')
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

    img.setAttribute('src', artista.imagen)

    div.append(h2, h3, small, p, p_ultimoLanzamiento, img)
    containerArtistas.appendChild(div)
}

function renderedCards(array){
    containerArtistas.innerHTML = ''
    array.forEach(function(artista){
        createCard(artista)
    })
}

function renderedCategorys(){
    for (const genero of generosMusicales ) {
        console.log(genero);
        containerGenero.innerHTML += `<a class='item_genero' id="genero-${genero.id}">${genero.nombre}</a>`
    }
    
}

const findArtistabyNombre = (findArtista) => {
    return artistas.find( (artista) => artista.nombre === findArtista  )
}

const  filterCategory = (categoria) => {
    return artistas.filter((artista) => artista.genero === categoria )
}

const filterByCategory = () => {
    const items_genero = document.querySelectorAll('.item_genero')
    items_genero.forEach((item) => {
        item.addEventListener('click', (e) => {
            let categoria = e.target.textContent
            let result = filterCategory(categoria)
            renderedCards(result)
        })
    })
}

const showNav = () => {
    document.addEventListener('click', (evento) => {
        // console.log(evento.target);
        console.dir(evento.target);
        // console.log(evento.target.children[0]);
        let nombreArtista = evento.target.parentNode.children[0]
        console.log(nombreArtista);
        if (evento.target.parentNode.classList[0] === 'card') { // ! Mejora en la busqueda y seleccion de la card con parentNode
            nav_lower_player.classList.remove('hidden')
            let find = findArtistabyNombre(nombreArtista.textContent)
            // console.log(find);
            container_data_artista.innerHTML = `
                <img src=${find.imagen} alt=${find.nombre} style='width: 100px'>
                <h3>${find.nombre}</h3>
                <h4>Album: ${find.album}</h4>
            `
        }
    })
}

 // let cards = document.querySelectorAll('.card')
    // console.log(cards);

    // cards.forEach((card) => {
    //     card.addEventListener('click', () => {
    //         nav_lower_player.classList.remove('hiden')
    //     })
    // })





window.addEventListener('DOMContentLoaded', () => {
    renderedCategorys()
    renderedCards(artistas)
    showNav()
    close_nav_player.addEventListener('click', () => {
        nav_lower_player.classList.add('hidden')
    })
    filterByCategory()
})