// Helpers

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function esPar(numero) {
    return (numero % 2 === 0);
}

// Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana General

const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort((a, b) => a > b ? 1 : -1);

// Mediana del Top 10%


const spliceStart = salariosColSorted.length * 0.9;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
console.log(salariosColTop10);



const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
    }
)