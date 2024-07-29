
/*
Programa:
 
 Desc: un sistema de cobro
 - Pago contado , 0 Interes
 - Pago en credito <= 3 , con el 5% de inteneres
 - Pago en credito > 3 < 8  , con el 10% de interes
 - Pago en credito > 8 , con el 15% de interes
 - Indicar cuanto sale la cuota
*/
/* Functions */
function msgTotalPayCounted(num) {
    console.log("Su pago al contado es de "+num+"$");
}
function msgTotalPayCredit(totalPay, percent, quotaCounter, quotaPrice) {
    alert("Monto a pagar de "+totalPay+"$ en "+quotaCounter+" cuotas, con un interes del "+percent+"% sobre el total. \n\n Valor de cada cuota "+quotaPrice+"$");
}
function creditWithPercent(quotaCounter, totalPay) {
    let result = 0;
    if (quotaCounter <= 3) {
        percent = 5;
        result = totalPay * 0.05;
        result = totalPay + result;
        return result;
    } else if (quotaCounter > 3 && quotaCounter <= 8) {
        percent = 10;
        result = totalPay * 0.1;
        result = totalPay + result;
        return result;
    } else {
        percent = 15;
        result = totalPay * 0.15;
        result = totalPay + result;
        return result;
    }
}
function systemExit(confirm) {
    if (confirm !== "si") {
        active = false;
        alert(" Hasta la proxima compra ")
    }
}
/* main */
let percent = 0;
let active = true;
do {
    let totalPay = parseInt(prompt("Ingrese el monto a cobrar"));
    if (parseInt(totalPay)) {
        let paymentType = prompt("Como le gustaria abonar: credito o al contado?").toLowerCase();
        switch(paymentType) {
            case "contado":
                msgTotalPayCounted(totalPay);
                break;
            case "credito":
                let quotaCounter = parseInt(prompt("En cuantas cuotas desea abonar?"));
                if (parseInt(quotaCounter)) {
                    totalPay = creditWithPercent(quotaCounter, totalPay);
                    console.log(totalPay)
                    quotaPrice = parseFloat(totalPay / quotaCounter).toFixed(3);
                    msgTotalPayCredit(totalPay, percent, quotaCounter, quotaPrice);
                } else {
                    alert("El valor ingresado es incorrcto para la cuota");
                }
                break;
            default:
                console.error("Usted selecciono")
                break;
        }
    } else {
        alert("No ingreso un monto correcto");
    }
    let confirm = prompt("Desea realizar otro pago? si o no").toLowerCase();
    systemExit(confirm);
} while (active);