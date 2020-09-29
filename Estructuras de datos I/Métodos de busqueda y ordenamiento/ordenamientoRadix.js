function cantidadDigitosNro(numero){
    if(numero === 0) return 1;
    return Math.floor(Math.log10(Math.abs(numero))) + 1; 
}
/* console.log(`12345 tiene ${cantidadDigitosNro(12345)} digitos`);
 */

function obtenerValorDigito(numero, i){
    return Math.floor(Math.abs(numero)/Math.pow(10,i))%10;
}
/* El recorrido se hace de derecha a izquiera
El primer valor posición 0 */
/* console.log(obtenerValorDigito(12345, 3));
 */

function numeroMayorCantidadDigitos(arrayNums){
    let maxDigits = 0;
    for(let i = 0; i < arrayNums.length; i++){
        maxDigits = Math.max(maxDigits, cantidadDigitosNro(arrayNums[i]));
    }
    return maxDigits;
}
/* console.log(`El nro que tiene mayor cantidad de digitos tiene ${numeroMayorCantidadDigitos([3,2,46,2313243,6567,23,212312])}`);
 */

function ordenamientoRadix(arrayR){
    let maxCantDigitos = numeroMayorCantidadDigitos(arrayR); /* Identifica el nro que tiene mayor cant de dig */
    for(let i = 0; i < maxCantDigitos; i++){
        let basesOrdenamiento = Array.from({length: 10}, ()=>[]);
        for(let j = 0; j < arrayR.length; j++){
            let obtenerDigito = obtenerValorDigito(arrayR[j],i);
            basesOrdenamiento[obtenerDigito].push(arrayR[j]);
        }
        arrayR = [].concat(...basesOrdenamiento);
    }
    return arrayR;
}

console.log(ordenamientoRadix([34,5,1313,35,12,568,9]));