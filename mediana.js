
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calcularMediana (lista) {
    let listaOrdenada = lista.sort((a, b) => a > b ? 1 : -1);
    console.log(listaOrdenada);

    let mitadLista = parseInt(listaOrdenada.length / 2);
    

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        mediana = calcularMediaAritmetica([elemento1, elemento2]);
    } else {
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}

function esPar(numero) {
    if(numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
