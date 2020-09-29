function capturarValores(){
    let capturaValorInput = document.getElementById("edad").value;
    document.getElementById("verEdad").innerHTML = capturaValorInput;
    let listaDesplegable = document.getElementById("listaAlgOrdenamiento");
    let texto = listaDesplegable.options[listaDesplegable.selectedIndex].text;
    let valueSeleccionado = listaDesplegable.options[listaDesplegable.selectedIndex].value;
    document.getElementById("verSeleccionListaD").innerHTML = `El user selecciono el algoritmo ${texto} que corresponde al value ${valueSeleccionado}` ;
}

function ordBurbujaSwap(array){
    /* Función flecha */
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }
    for(let i = array.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(array[j] > array[j+1]){
                swap(array,j, j+1);
            }
        }
    }
    return array;
}
console.log("Con swap " + ordBurbujaSwap([87,24,56,32,7,2,-1]));


function insercionOrdenamiento(arrayO){
    let valorActual;
    for(let i = 1; i < arrayO.length; i++){
        valorActual = arrayO[i];
        let j = 0;
        for(j = i - 1; j >= 0 && arrayO[j] > valorActual; j--){
            arrayO[j+1] = arrayO[j];
        }
        arrayO[j+1] = valorActual;
    }
    return arrayO;
}

function selectionSortSwap(arraySS){
    /*  Las funciones flecha no utilizan la palabra reservada function
        const nombreConstante = (argumentos) => instrucción;
        const nombreConstante = (argumentos) => {instrucción}; */
    const swap = (arraySS, idx1, idx2) => ([arraySS[idx1],arraySS[idx2]] = [arraySS[idx2],arraySS[idx1]]); /* [3, -1] = [-1, 3] */
    for(let i = 0; i < arraySS.length; i ++){
        let posValMenorTemporal = i;
        for(let j = i+1; j < arraySS.length; j++){
            if (arraySS[posValMenorTemporal] > arraySS[j])
                posValMenorTemporal = j;
        }
        if(i !== posValMenorTemporal) 
            swap(arraySS, i, posValMenorTemporal);
    }
    return arraySS;
}
console.log(`Ordenamiento por selección con swap ${selectionSortSwap([87,24,56,32,7,2,-1,24,-1001])}`); 

console.log(insercionOrdenamiento([87,24,56,32,7,2,-1,24,-1001]));

function mezcla(arregloPrimerMitad, arregloSegundMitad){
    let arrayResultante = [];
    let i= 0, j= 0;
    while(i < arregloPrimerMitad.length && j < arregloSegundMitad.length){
        if(arregloSegundMitad[j] > arregloPrimerMitad[i]){
            arrayResultante.push(arregloPrimerMitad[i]);
            i++;
        }else{
            arrayResultante.push(arregloSegundMitad[j]);
            j++;
        }
    }
    while(i < arregloPrimerMitad.length){
        arrayResultante.push(arregloPrimerMitad[i]);
        i++;
    }
    while(j < arregloSegundMitad.length){
        arrayResultante.push(arregloSegundMitad[j]);
        j++;
    }
    return arrayResultante;
}

function mergeSort(arrayMS){
    if(arrayMS.length <= 1) return arrayMS;
    let mitadArreglo = Math.floor(arrayMS.length/2);
    /* El método slice  */
    let arregloPrimerMitad = mergeSort(arrayMS.slice(0, mitadArreglo));
    let arregloSegundMitad = mergeSort(arrayMS.slice(mitadArreglo));
    return mezcla(arregloPrimerMitad,arregloSegundMitad);
}

console.log(mergeSort([87,24,56,32,7,2,-1,24,-1001]));

function pivot(arrayQS, start = 0, end = arrayQS.length - 1){
    /* [87,24,56,32,7,2,-1,24,-1001], idx1 = arrayQs[0], idx2 = arrayQS[length - 1)]*/
    const swap = (arrayQS, idx1, idx2) => [arrayQS[idx1], arrayQS[idx2]] = [arrayQS[idx2], arrayQS[idx1]];
    /* El pivote será para este caso el primer elemento */
    let pivot = arrayQS[0];
    let swapIdx = start;
    /* Se inicia una posición después de la primera del array */
    for(let i = start + 1; i <= end; i++){
        if(pivot > arrayQS[i]){
            swapIdx++;
            swap(arrayQS, swapIdx, i);
        }
    }
    swap(arrayQS, start, swapIdx);
    return swapIdx;
}


function quickSort(arrayQS, left = 0, right = arrayQS.length - 1){
    if(left < right){
        let pivotIndex = pivot(arrayQS, left, right);
        quickSort(arrayQS, left, pivotIndex - 1);
        quickSort(arrayQS, pivotIndex + 1, right);
    }
    return arrayQS;
}

console.log(quickSort([87,24,56,32,7,2,-1,24,-1001]));

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