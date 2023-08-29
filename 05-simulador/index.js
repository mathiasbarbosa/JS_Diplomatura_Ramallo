// * inicio de sesión: Permitir a los usuarios iniciar sesión con sus credenciales (nombre de usuario y contraseña) para acceder a su cuenta bancaria.

// let usuario_uno = 'horacio'
// let pass_ususuario_uno = '1234'

let user = {
    name: 'carlos',
    lastname: 'perez',
    mail:'carlos@gmail.com',
    password: '1234',
    cuenta: {
        cbu: '123456789',
        saldo: 0,
        ultimos_movimientos: []
    }
}

const users = [user]
console.log(typeof user);
console.log(user.name);

// let username = prompt('ingrese su nombre de usuario').toLowerCase().trim()
// let password = prompt('ingrese su contraseña')

// console.log(username, password);


let username;
let password;
let intentos = 0


function login (){
    do{
        username = prompt('ingrese su nombre de usuario').toLowerCase().trim();
        password = prompt('ingrese su contraseña')
        // TODO find user in users array
        let user_find = users.find( (user) => user.name === username )
        console.log(user_find);

        if(user_find != undefined && user_find.password === password) {
            alert(`Bienvenido ${username}`)
            menu()
            break 
        }else{
            console.error('credenciales incorrectas')
            intentos = intentos + 1
        }
        
    }while(intentos < 3)
}


function registerUser() {
    let name = prompt('ingrese su nombre')
    let lastname = prompt('ingrese su apellido')
    let email = prompt('ingrese su email')
    let password = prompt('ingrese su password')
    if (name != '' && lastname != '' && email != '' && password != '') {
        let new_user = {
            name: name,
            lastname: lastname,
            email: email,
            password: password, 
            cuenta: {
                cbu: Math.round(Math.random() * 10000) + 1,
                saldo: 0,
                ultimos_movimientos: []
            }
        }
        users.push(new_user)
        console.log(users);
        return true;
    }

    return false
}

const menu = () => {
 // TODO FUNCTION MENU 
    opciones_menu = prompt('Seleccione la operacion que desea realizar: \n 1-consultar cuenta \n 2- transferir dinero \n 3- depositar en la cuenta  \n 4- salir')
    while (opciones_menu != '4') {
        switch (opciones_menu) {
            case '1':
                consultarCuenta()
                break;
            case '2':
                transferirDinero()
                break;
            case '2':
                depositarDinero()
                break;
        }
    }
}


let opciones_menu = prompt('Seleccione la operacion que desea realizar: \n 1-Iniciar sesion \n 2- regustrate ')

switch (opciones_menu) {
    case "1":
        login()
    break;
    case "2":
        // TODO: IF TRUE login() => FUNCTION MENU
        if(registerUser()) {
            login()
        }

    break;

    default:
        break;
}