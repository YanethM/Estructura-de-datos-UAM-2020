/* let valorNumerico = '4';
let valNumerico = 4;

if(valorNumerico == valNumerico)
    console.log("Mismo valor");
else
    console.log("No cumple");

(valorNumerico === valNumerico) ? console.log("Mismo valor y mismo tipo de dato") : console.log("No cumple");

 */
function ordenamientoSeleccion(arrayS){
    /* Scope 1 */
    for(let i = 0; i < arrayS.length; i ++){
        /* Scope 2 */
        let posValMenorTemporal = i;
        for(let j = i+1; j < arrayS.length; j++){
            /* Scope 3 */
            if (arrayS[j] < arrayS[posValMenorTemporal]) 
                /* Scope 4 */
                posValMenorTemporal = j;
        }
    
      if(i !== posValMenorTemporal){
          /*    scope 5
                loweCamelCase
                UpperCamelCase */
          let valPosicionAuxiliar = arrayS[i];
          arrayS[i] = arrayS[posValMenorTemporal];
          arrayS[posValMenorTemporal] = valPosicionAuxiliar;
      }
    }
    return arrayS;
}

console.log("Ordenamiento por selección" + ordenamientoSeleccion([87,24,56,32,7,2,-1,24,-1001]));
/* `${variable}`
`${método}` */
console.log(`Ordenamiento por selección ${ordenamientoSeleccion([87,24,56,32,7,2,-1,24,-1001])}`); 


/* swap */
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
