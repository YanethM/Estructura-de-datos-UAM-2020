
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