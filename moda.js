function calcularModa (lista) {

    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort((a, b) => a[1] > b[1] ? 1 : -1);
    console.log(listaArray);
    return listaArray[listaArray.length -1];
}
