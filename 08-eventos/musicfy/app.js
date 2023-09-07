const artistas = [
    {
        nombre: 'Soda Stereo',
        banda: 'Soda Stereo',
        genero: 'Rock',
        ultimoLanzamiento: '2007-11-27',
        album: 'Me Verás Volver',
        imagen: 'https://i.scdn.co/image/ab67616d0000b273e885d6895a32a612813bf6d3',
        descripcion: 'Soda Stereo es una banda del Rock alternativo formada en Buenos Aires, Argentina en 1982 por Gustavo Cerati (voz y guitarra), Zeta Bosio (bajo) y Charly Alberti (batería),​considerada ampliamente por la crítica especializada como la banda más importante, popular e influyente del rock en español y una leyenda de la música latinoamericana.2​ Fueron el primer grupo de habla hispana en conseguir un éxito masivo en Latinoamérica y tuvieron un papel muy importante en el desarrollo y la difusión del rock latinoamericano y el rock en español durante las décadas de 1980 y 1990. Durante su carrera, fueron vanguardistas y marcaron tendencia en Latinoamérica, en la que protagonizaron diversos géneros como la música divertida de sus inicios, la new wave, el dark wave, el hard rock, el rock alternativo y el rock electrónico de sus finales.',
        img_descripcion: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/CeratiAlbertiBosio.jpg'
    },
    {
        nombre: 'Los Auténticos Decadentes',
        banda: 'Los Auténticos Decadentes',
        genero: 'Rock/Ska',
        ultimoLanzamiento: '2019-04-26',
        album: 'MTV Unplugged',
        imagen: 'https://www.zonadeobras.com/wp-content/uploads/2018/11/autenticos-disco.jpg',
        descripcion: 'Los Auténticos Decadentes es una banda argentina de ska y rock alternativo formada en 1986 por Cucho Parisi, Nito Montecchia y Gastón Francés Bernardou. Si bien su principal género es el ska, suele tocar una cantidad múltiple de géneros y fusionarlos, formando así un sonido único.',
        img_descripcion: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/ADecadentes.JPG/405px-ADecadentes.JPG'

    },

    {
        nombre: 'Charly García',
        banda: 'Solista',
        genero: 'Rock',
        ultimoLanzamiento: '2017-10-27',
        album: 'Random',
        imagen: 'https://fotos.perfil.com/2019/10/22/charly-garcia-795233.jpg',
        descripcion: 'Carlos Alberto García, más conocido como Charly García, es un músico, cantautor, multinstrumentista, compositor y productor discográfico argentino, considerado una de las figuras más importantes y vanguardistas de la música popular argentina y latinoamericana.',
        img_descripcion: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Charly_Garc%C3%ADa_por_Alejandro_Kuropatwa.jpg/330px-Charly_Garc%C3%ADa_por_Alejandro_Kuropatwa.jpg'
    },
    {
        nombre: 'Luis Alberto Spinetta',
        banda: 'Almendra',
        genero: 'Rock',
        ultimoLanzamiento: '1970-12-01',
        album: 'Almendra',
        imagen: 'https://cdns-images.dzcdn.net/images/cover/bb4591a4c56f889dc093bba9512ed1eb/264x264.jpg',
        descripcion: 'Luis Alberto Spinetta fue un cantante, guitarrista, poeta, escritor y compositor argentino, considerado uno de los más importantes y respetados músicos de Argentina, Latinoamérica y del habla hispana .',
        img_descripcion: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Spinetta_en_Expreso_Imaginario_1976.jpg/330px-Spinetta_en_Expreso_Imaginario_1976.jpg'
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
const nav_aside = document.querySelector('#nav_aside')
const close_nav_player = document.querySelector('#close_nav_player')
const container_data_artista = document.querySelector('#container_data_artista')
const close_nav_aside = document.querySelector('#close_nav_aside')
// * 1- VISTA GENERAL


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
            nav_aside.classList.remove('hidden')
            let find = findArtistabyNombre(nombreArtista.textContent)
            // console.log(find);
            container_data_artista.innerHTML = `
                <img src=${find.imagen} alt=${find.nombre} style='width: 50px'>
                <div>
                    <h3>${find.nombre}</h3>
                    <h4>Album: ${find.album}</h4>
                </div>
            `
            showAsideNav(find)
        }
    })
}

// ! function close nav player
const closeNav = (button) => {
    button.addEventListener('click', () => {
        nav_lower_player.classList.add('hidden')
        nav_aside.classList.add('hidden')
    })
}
// ! function mostrar aside nav
const showAsideNav = (data) => {
    const nav_aside_song = $.querySelector('#nav_aside_song')
    const nav_aside_artist = $.querySelector('#nav_aside_artist')
    nav_aside_song.innerHTML = `<img src=${data.imagen} alt=${data.nombre}>
                                <h2>${data.album}</h2>
                                <h4>${data.genero}</h4>
                                <i class="bi bi-heart"></i>
                                `
    nav_aside_artist.innerHTML = `
                                <img src=${data.img_descripcion} alt=${data.nombre}>
                                <p>${data.descripcion}</p>
                                `
}


window.addEventListener('DOMContentLoaded', () => {
    renderedCategorys()
    renderedCards(artistas)
    showNav()
    closeNav(close_nav_player)
    closeNav(close_nav_aside)
    filterByCategory()
})