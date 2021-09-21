
function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('InputDiscount');
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById('ResultP');
    resultP.innerText = 'El precio con descuento son: $' + precioConDescuento
}

function onClickAgregarCupon() {
    const inputCupon = document.getElementById('InputCupon');
    const cuponValue = inputCupon.value;

    console.log(cuponValue);
    const inputDiscount = document.getElementById('InputDiscount');

    const arrayCupones = ['VecinoFiel', 'Estudiante', 'Empleado'];

    if (cuponValue === 'VecinoFiel') {
        inputDiscount.value = 30;
    } else if (cuponValue === 'Estudiante') {
        inputDiscount.value = 35;
    } else if (cuponValue === 'Empleado') {
        inputDiscount.value = 50
    }
}

function onClickEliminarCupon() {
    const inputDiscount = document.getElementById('InputDiscount');
    inputDiscount.value = null;
}