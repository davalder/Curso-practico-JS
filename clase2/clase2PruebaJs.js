// Variables y operadores

//punto 3
let nombre = 'Diego';
let apellido = 'Valderruten';
let id = 'davalder';
let edad = 29;
let email = 'davalder@hotmail.com';
let mayorEdad = true;
let dineroAhorrado = 2000;
let deuda = 4000;


// punto 4
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

let dineroReal = dineroAhorrado - deuda;
console.log(dineroReal);

//Funciones

//PUNTO 1
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    }

    return false
}

console.log(esMayorDeEdad(edad));
console.log(esMayorDeEdad(17));

//Punto 2

function frase(name, lastname, nickname) {
    let completeName = name + ' ' + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

frase('Diego Andres', 'Valderruten Vargas', 'davalder' );
frase('Leidy Katherine', 'Caucayo Velasco', 'lktrinc');

//Condicionales

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}

if (tipoDeSuscripcion === 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === 'ExpertPlus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

if (tipoDeSuscripcion) {
    if (tipoDeSuscripcion === 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
    }
    if (tipoDeSuscripcion === 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    if (tipoDeSuscripcion === 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    if (tipoDeSuscripcion === 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}

//Reto
if (tipoDeSuscripcion) {
    let arraySubcripcion = ['Free',
        'Basic',
        'Expert',
        'ExpertPlus'
    ];
    let arrayFrase = [
        "Solo puedes tomar los cursos gratis",
        "Puedes tomar casi todos los cursos de Platzi durante un mes",
        "Puedes tomar casi todos los cursos de Platzi durante un año",
        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    ];
    let index = arraySubcripcion.indexOf(tipoDeSuscripcion);
    console.log(arrayFrase[index]);
}

//Ciclos

//Punto 2

// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }

// let i = 0;
// while (i < 5) {
//     i++
//     console.log("El valor de i es: " + i);
// }

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--
}

// Listas

//Punto 2
function imprimirPrimerElemento( array ) {
    console.log(array[0]);
}

let array1 = ['Casa', 'Carro', 'Beca']
console.log(array1.length);

imprimirPrimerElemento(array1);

//punto 3

function imprimirTodosLosElementosArray( array ) {
    for (let i = 0; i < array.length; i++ ) {
        console.log(array1[i]);
    }
};

imprimirTodosLosElementosArray(array1);

//punto 4

function imprimirTodosLosElementosObjeto ( objeto ) {
    for (let propiedad in objeto) {
        console.log(objeto[propiedad]);
    }
}

objeto1 = {
    item1: 'Casa Objeto',
    item2: 'Carro Objeto',
    item3: 'Beca Objeto'
}

imprimirTodosLosElementosObjeto(objeto1);

