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