//Código del cuadrado
console.group('Grupo cuadrado');
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perímetro del cuadrado miden: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado miden: ' + areaCuadrado + 'cm^2');

console.groupEnd();

//Código del triangulo

console.group('Grupo triangulos');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    'Los lados del triangulo miden: ' 
    + ladoTriangulo1 + 'cm, ' 
    + ladoTriangulo2 + 'cm, y ' 
    + baseTriangulo + 'cm'
);

console.log('La altura del trianguoes de: ' + alturaTriangulo + 'cm');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log('El perimetro del trianguoes de: ' + perimetroTriangulo + 'cm');

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log('El area del triangulo miden: ' + areaTriangulo + 'cm^2');

console.groupEnd();

//Código del circulo

console.group('Grupo circulos');

// Radio
const radioCirculo = 4;
console.log('El radio del circulo miden: ' + radioCirculo + 'cm');

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log('El diámetro del circulo miden: ' + diametroCirculo+ 'cm');

// PI
const pi = Math.PI;
console.log('PI es: ' + pi);

//Circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log('El perimetro del circulo miden: ' + perimetroCirculo + 'cm');

// Area
const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log('El area del circulo miden: ' + areaCirculo + 'cm^2');

console.groupEnd();