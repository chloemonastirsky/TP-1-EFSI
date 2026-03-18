//ej 1
let nombre1= "cATA";

function formatearNombre(nombre1){
    return nombre1.toLowerCase().charAt(0).toUpperCase() + nombre1.toLowerCase().slice(1);
}

console.log(formatearNombre(nombre1));

//ej 2

let frase = "hola catita como te va";   
function contarLetrasSinEspacio(frase){
    let contador = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase[i] !== " "){
            contador++;
        }
    }
    return contador;
}
console.log(contarLetrasSinEspacio(frase));

//ej 3

function maximoDeTres(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }else if(num2 >= num1 && num2 >= num3){
        return num2;
    }else{
        return num3;
    }
}

console.log(maximoDeTres(5, 10, 3));

//ej 4

let password = "eldinosaurio";
function validarPassword(password){
    if(password.length >= 8 && password.includes("1") && password.includes("2") && password.includes("3") && password.includes("4") && password.includes("5") && password.includes("6") && password.includes("7") && password.includes("8") && password.includes("9") && password.includes("0")){
        return "Contraseña válida";
    }
}

function validarPassword(password){
    let contador=0;
    let numero= 0;
    for(let i = 0; i < password.length; i++){
            if(password[i] === "0" || password[i] === "1" || password[i] === "2" || password[i] === "3" || password[i] === "4" || password[i] === "5" || password[i] === "6" || password[i] === "7" || password[i] === "8" || password[i] === "9"){
                numero++;
            }
    }

    if(password.length >= 8 && numero > 0){
        return "Contraseña válida";
    }else{
        return "Contraseña inválida";
    }
}
console.log(validarPassword(password)); 

//ej 5

const arrayNum = [3, 4, 5];

function sumarArray(arrayNum){
    for(let i = 0; i < arrayNum.length; i++){
        if(i === 0){
            var suma = arrayNum[i];
        }else{
            suma += arrayNum[i];
        }
    }
    return suma;
}
console.log(sumarArray(arrayNum));

//ej 6

const arrayNumMayor= [4,7,1,20,3] ;

function numeroMayor(arrayNumMayor){
    arrayNumMayor.sort(function(a, b){return b - a});
    return arrayNumMayor[0];
}

console.log(numeroMayor(arrayNumMayor));

//ej 7

const arrayNumPares= [4,7,1,20,3] ;

function numerosPares(arrayNumPares){
    let pares = []; 
    for(let i = 0; i < arrayNumPares.length; i++){
        if(arrayNumPares[i] % 2 === 0){
            pares.push(arrayNumPares[i]);
        }
    }
    return pares;
}
console.log(numerosPares(arrayNumPares));

// ej 8

const usuario = {

 nombre: "Ana",

 edad: 20,

 activo: false

};

function descripcionUsuario(usuario){
    return `El usuario ${usuario.nombre} tiene ${usuario.edad} años `;
}
console.log(descripcionUsuario(usuario));   

//ej 9

function activarUsuario(usuario){
    usuario.activo = true;
    return usuario;
}

console.log(activarUsuario(usuario));

//ej 10
const productos = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}

]

function calcularPrecioTotal(productos){
    let total = 0;
    for(let i = 0; i < productos.length; i++){
        total += productos[i].precio;
    }
    return total;
}

console.log(calcularPrecioTotal(productos));

//ej 11

const usuarios = [

{nombre:"Ana", edad:17},

{nombre:"Juan", edad:25},

{nombre:"Pedro", edad:30}

]

const usuariosSinEdad = usuarios.map(function(usuario){
    return {nombre: usuario.nombre
    };
});

console.log(usuariosSinEdad);

//ej 12

function filtrarMayoresDeEdad(usuarios){
    return usuarios.filter(function(usuario){
        return usuario.edad >= 18;
    });

}
console.log(filtrarMayoresDeEdad(usuarios));

//ej 13

function sumaEdades(usuarios){
    const suma = usuarios.reduce(function(total, usuario){
        return total + usuario.edad;
    }, 0);
    return suma;
}

console.log(sumaEdades(usuarios));

//ej 14

const producto = {

nombre:"Notebook",

precio:1000

}

const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);

//ej 15

const copiaProducto = { ...producto, stock: 5 };

console.log(copiaProducto);

//ej 16
const arrayProductos = [

{nombre:"arroz", precio:10},    
{nombre:"frijoles", precio:25},
{nombre:"lentejas", precio:60}
];


let nombreProducto = "arroz";

function buscarProducto(arrayProductos, nombreProducto){
    for(let i = 0; i < arrayProductos.length; i++){
        if(arrayProductos[i].nombre === nombreProducto){
            return arrayProductos[i];
        }
    }
}
console.log(buscarProducto(arrayProductos, nombreProducto));



//ej 17

function ProductoMayorA50 (arrayProductos){
    return arrayProductos.filter(element => element.precio > 50);
}

console.log(ProductoMayorA50(arrayProductos));

//ej 18

function promedioArray(arrayNumPares){
    let suma = 0;
    for(let i = 0; i < arrayNumPares.length; i++){
        suma += arrayNumPares[i];
    }
    return suma / arrayNumPares.length;
}

console.log(promedioArray(arrayNumPares));


//DESAFIO FINAAAAALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

const arrayUsuarios = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]

function obtenerUsuarios(){
    return arrayUsuarios;
}

console.log(obtenerUsuarios());

function obtenerUsuarioPorId(id){
    for(let i = 0; i < arrayUsuarios.length; i++){
        if(arrayUsuarios[i].id === id){
            return arrayUsuarios[i];
        }
    }
}
console.log(obtenerUsuarioPorId(2));

function obtenerMayoresDeEdad(){
    return arrayUsuarios.filter(usuario => usuario.edad >= 18);
}
console.log(obtenerMayoresDeEdad());

function agregarUsuario(nombre, edad){
    const nuevoUsuario = {
        id: arrayUsuarios.length + 1,
        nombre: nombre,
        edad: edad
    };
    arrayUsuarios.push(nuevoUsuario);
    return nuevoUsuario;}

console.log(agregarUsuario("Maria", 25));

