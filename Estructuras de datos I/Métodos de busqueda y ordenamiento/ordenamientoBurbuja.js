/* Recibe un parametro: array */
function ordenamientoBurbuja(array){
    let bandera;
    /* Complejidad cuadrática, un ciclo itera estando dentro de otro */
    for(let i = array.length; i > 0; i--){
        bandera = true;
        for(let j = 0; j < i - 1; j++){
            if(array[j] > array[j+1]){
                let auxiliar =  array[j];
                array[j] = array[j+1];
                array[j+1] = auxiliar;
                bandera = false;
            }
        }
        if(bandera) break;
    }
    return array;
}
console.log(ordenamientoBurbuja([87,24,56,32,7,2,-1]));

/* Versión ES5 intercambio de variables "swap" */
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