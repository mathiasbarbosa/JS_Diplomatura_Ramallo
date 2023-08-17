const numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(function(number){
    console.log("el resultado de " + number + "* 2 es: " + (number * 2));
})


let doble = numbers.map( (number) => number * 2  )
console.log(doble);

let son_par= numbers.filter((number) => number % 2 === 0)
console.log(son_par);


let usuarios = [
    {
        nombre: 'Juan',
        edad: 18
    },
    {
        nombre: 'Lucas',
        edad: 10
    },
    {
        nombre: 'Horacio',
        edad: 20
    },
    {
        nombre: 'Rodrigo',
        edad: 15
    }
]

console.table(usuarios);

let mayor_edad = usuarios.filter(function(usuario){
    return usuario.edad >= 18
})

console.log(mayor_edad);

let find_user = usuarios.findIndex((usuario) => usuario.nombre === 'Horacio')

if(find_user === -1){
    alert('el usuairo no esta registrado')
}

console.log(find_user);


let productos = [
    {
        nombre: 'Manzana',
        precio: 20 
    },
    {
        nombre: 'Uvas',
        precio: 15
    },
    {
        nombre: 'Naranja',
        precio: 30
    },
    {
        nombre: 'mandarina',
        precio: 4
    }
]

let total = productos.reduce((acumalador, elemento) => acumalador + elemento.precio, 0 )

console.log(total);