
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

console.log(insercionOrdenamiento([87,24,56,32,7,2,-1,24,-1001]));