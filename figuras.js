//Código del cuadrado
console.group('Grupo cuadrado');
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
    return lado * 4;
};
perimetroCuadrado(5);
// console.log('El perímetro del cuadrado miden: ' + perimetroCuadrado + 'cm');

function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado(5);

// console.log('El area del cuadrado miden: ' + areaCuadrado + 'cm^2');

console.groupEnd();

//Código del triangulo

console.group('Grupo triangulos');

// console.log(
//     'Los lados del triangulo miden: '
//     + ladoTriangulo1 + 'cm, '
//     + ladoTriangulo2 + 'cm, y '
//     + baseTriangulo + 'cm'
// );

// console.log('La altura del trianguoes de: ' + alturaTriangulo + 'cm');

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// console.log('El perimetro del trianguoes de: ' + perimetroTriangulo + 'cm');

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

console.groupEnd();

//Código del circulo

console.group('Grupo circulos');

// Radio
// console.log('El radio del circulo miden: ' + radioCirculo + 'cm');

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// console.log('El diámetro del circulo miden: ' + diametroCirculo+ 'cm');

// PI
const pi = Math.PI;
console.log('PI es: ' + pi);

//Circunferencia
function perimetroCirculo(radio) {
    let diametro = diametroCirculo(radio);
    return diametro * Math.PI;
};

// Area
function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
};
// console.log('El area del circulo miden: ' + areaCirculo + 'cm^2');

console.groupEnd();

// aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}