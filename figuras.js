//Código del cuadrado
console.group('Grupo cuadrado');

function perimetroCuadrado(lado) {
    return lado * 4;
};
perimetroCuadrado(5);

function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado(5);

console.groupEnd();

//Código del triangulo

console.group('Grupo triangulos');

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

function alturaTrianguloIsoscele(lado1, lado2, lado3) {
    if (lado1 !== lado2 && lado1 !== lado3 && lado2 === lado3) {
        let ladoUnico = lado1;

        let c = lado2;
        let b = ladoUnico / 2;
        let a = Math.sqrt((c * c) - (b * b));
        return a;
    } else if (lado2 !== lado1 && lado2 !== lado3 && lado1 === lado3) {
        let ladoUnico = lado2;

        let c = lado1;
        let b = ladoUnico / 2;
        let a = Math.sqrt((c * c) - (b * b));
        return a;
    } else if (lado3 !== lado1 && lado3 !== lado2 && lado1 === lado2) {
        let ladoUnico = lado3;

        let c = lado1;
        let b = ladoUnico / 2;
        let a = Math.sqrt((c * c) - (b * b));
        return a;
    } else {
        return "No es Isosceles"
    }
}

console.groupEnd();

//Código del circulo

console.group('Grupo circulos');

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

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

console.groupEnd();

// aqui interactuamos con el HTML

  // Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = parseFloat(input.value);

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = parseFloat(input.value);

    const area = areaCuadrado(value);
    alert(area);
}

  // Triangulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById('InputTriangulo1');
    const value1 = parseFloat(input1.value);
    const input2 = document.getElementById('InputTriangulo2');
    const value2 = parseFloat(input2.value);
    const inputBase = document.getElementById('InputTrianguloBase');
    const valuebase = parseFloat(inputBase.value);

    const perimetro = perimetroTriangulo(value1, value2, valuebase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById('InputTrianguloBase');
    const valueBase = parseFloat(inputBase.value);
    const inputAltura = document.getElementById('InputTrianguloAltura');
    const valueAltura = parseFloat(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularAlturaTrianguloIsoscele() {
    const input1 = document.getElementById('InputTrianguloisosceles1');
    const value1 = parseFloat(input1.value);
    const input2 = document.getElementById('InputTrianguloisosceles2');
    const value2 = parseFloat(input2.value);
    const input3 = document.getElementById('InputTrianguloisosceles3');
    const value3 = parseFloat(input3.value);

    const altura = alturaTrianguloIsoscele(value1, value2, value3);

    alert(altura);
}

    // Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = parseFloat(input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = parseFloat(input.value);

    const area = areaCirculo(value);
    alert(area);
}
