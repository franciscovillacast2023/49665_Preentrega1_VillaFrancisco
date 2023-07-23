//Simulador de Crédito

function calcularInteres(montoTotal,interes) {
    let interesCalculado = montoTotal * interes;
    return interesCalculado;
}


//Se definen las constantes de los intereses en un rango de 3 meses
const interesMensual1_3 = 0.1;
const interesMensual4_6 = 0.08;
const interesMensual7_9 = 0.07;
const interesMensual0_12 = 0.06;
const interesMensual13_15 = 0.05;
const interesMensual16_18 = 0.04;
const interesMensual19_21 = 0.03;
const interesMensual22_24 = 0.02;


//función que calcula los créditos dependiendo del monto y cuotas
function calcularCredito(monto,cuotas)  {
    switch (cuotas) {

        case 1:
        case 2:
        case 3:
            return monto + (cuotas * (calcularInteres(monto,interesMensual1_3)));
            break;
        case 4:
        case 5:
        case 6:
            return monto + (cuotas * (calcularInteres(monto,interesMensual4_6)));
            break;
        case 7:
        case 8:
        case 9:
            return monto + (cuotas * (calcularInteres(monto,interesMensual7_9)));
            break;
        case 10:
        case 11:
        case 12:
            return monto + (cuotas * + (calcularInteres(monto,interesMensual10_12)));
            break;
        case 13:
        case 14:
        case 15:
            return monto + (cuotas * + (calcularInteres(monto,interesMensual13_15)));
            break;
        case 16:
        case 17:
        case 18:
            return monto + (cuotas * + (calcularInteres(monto,interesMensual16_18)));
            break;
        case 19:
        case 20:
        case 21:
            return monto + (cuotas * + (calcularInteres(monto,interesMensual19_21)));
            break;
        case 12:
        case 23:
        case 24:
            return monto + (cuotas * + (calcularInteres(monto,interesMensual22_24)));
            break;
    }

}

//función que permite verificar si el número ingresado es un valor numérico
function validarNumero(valor) {
    if (!isNaN(valor)) {
        return 1;
    } else {
        return 0;
    }
}


//Inicio de solicitud de información a la persona que desea pedir el crédito

let montoCredito = parseInt(prompt("Ingrese el monto que desea de crédito"));

resultadoValidarNumero = validarNumero(montoCredito);

if (resultadoValidarNumero === 1) {
} else {
    while (resultadoValidarNumero !== 1) {
        var montoCredito1 = parseInt(prompt("El valor ingresado no es numérico. Ingrese nuevamente el monto que desea de crédito"));
        resultadoValidarNumero = validarNumero(montoCredito1);
    }
}


if (isNaN(montoCredito)) {
    montoCredito = montoCredito1
}


//Solicitar cantidad de cuotas deseadas

let numCuotas = parseInt(prompt("Ingrese el número de cuotas (hasta 24)"));

resultadoValidarCuota = validarNumero(numCuotas)

if (resultadoValidarCuota === 1) {
    if (numCuotas>24) {
        var numCuotas1 = parseInt(prompt("El valor ingresado no corresponde a una cuota válida. Ingrese nuevamente el número de cuotas (hasta 24)"));
        resultadoValidarCuota = validarNumero(numCuotas1);
        while (resultadoValidarCuota !== 1 || numCuotas1 > 24) {
            var numCuotas1 = parseInt(prompt("El valor ingresado no corresponde a una cuota válida. Ingrese nuevamente el número de cuotas (hasta 24)"));
            resultadoValidarCuota = validarNumero(numCuotas1);
        }
    }
} else {     
    while (resultadoValidarCuota !== 1 ||  numCuotas1 >24) {
        var numCuotas1 = parseInt(prompt("El valor ingresado no corresponde a una cuota válida. Ingrese nuevamente el número de cuotas (hasta 24)"));
        resultadoValidarCuota = validarNumero(numCuotas1);
    }
}

if (isNaN(numCuotas) || numCuotas > 24 ) {
    numCuotas = numCuotas1
}

resultado = calcularCredito(montoCredito,numCuotas);
let resultadoRedondeado = Math.round(resultado);
alert(`El monto total a pagar por un crédito de ${montoCredito} pesos (CLP) a ${numCuotas} cuotas es de ${resultadoRedondeado} pesos (CLP)`);