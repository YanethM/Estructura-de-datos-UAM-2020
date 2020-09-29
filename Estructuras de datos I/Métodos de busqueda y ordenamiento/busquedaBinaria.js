/* Técnica: divide y venceras (Dividir en 2 partes iguales el array)
EL ARRAY TIENE QUE ESTAR ORDENADO DE FORMA ASCENDENTE
    Recibe dos argumentos: valorB, array
    Retorna la posicion en la cual se encuentra el valorB
    */

    function busquedaBinaria(array, item){
        function recursiva(inicio, fin){
            if(inicio > fin){
                return -1;
            }
            /* Se identifica la posición de la mitad del array */
            let mitadA = Math.floor((inicio + fin)/2);
            if(array[mitadA] === item){
                return mitadA;
            }
            /* Generando los recorridos dentro los dos array dependiendo de la condición q cumpla*/
            if(array[mitadA] > item){
                return recursiva(inicio, mitadA -1);
            } 
            return recursiva(mitadA + 1, fin);
        }
        return recursiva(0, array.length -1);
    }
    console.log(busquedaBinaria([2,4,6,12,54,89],12));


    function busquedaBinariaIterativa(array, item){
        let inicio = 0;
        let fin = array.length -1;
        while(inicio <= fin){
            let mitadA = Math.floor((inicio + fin)/2);
            if(array[mitadA] === item){
                return mitadA;
            }
            if(array[mitadA]>item){
                fin = mitadA - 1;
            }else{
                inicio = mitadA +1;
            }
        }
        return -1;
    }
    console.log(busquedaBinariaIterativa([2,4,6,12,54,89],12));