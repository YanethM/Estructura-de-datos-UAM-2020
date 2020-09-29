/* Búsqueda lineal:
EL ARRAY NO TIENE QUE ESTAR ORDENADO DE FORMA ASCENDENTE
    recibe dos argumentos: 1. Valor a buscar 2. Array 
    retorna: la posición del array en la cual encuentra el valor*/
    /* JS (Débil tipado)
        [] array
            let arrayNumbers = [12,3,41,3]
            let personaArr = ["Yaneth", 29, 'F', false]
        {} objeto
            let personaObj ={
                name: "Yaneth", 
                age: 29, 
                gener: 'F', 
                married: false
            }
        [{},{}]
        {{},{}}
        {[],[]}
    ES5 ES6 
    TS (tipado estricto)
        let nombrePersona: string = "YM"; 
        let nombrePersona = "YM";
        let arrayNombre = []

    
    let funcionAnonima = function(args){...}
    const funcionAnonima = function(args){...}

    Cuando se tiene una sóla instrucción
    const funcionFlecha = (args)=>{...}
    const funcionFlecha = (args)=>...
    */
    function busquedaLineal(valorBuscado, arrayV){
        let valorEncontrado = false;
        let posicion = -1;
        let index = 0;
        
        while(!valorEncontrado && arrayV.length){
            if(arrayV[index] == valorBuscado){
                valorEncontrado = true;
                posicion = index;
            }else
                index += 1;
        }
        return posicion;
    }
/* console.log("El valor se encuentra en la posición " + busquedaLineal(12,[2,4,6,72,12]));
console.log("Angular se encuentra en la posición " + 
            busquedaLineal('Angular',['NodeJs','Ionic','Laravel','Angular']) + " del array"); */