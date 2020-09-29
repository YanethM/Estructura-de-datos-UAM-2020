/* Forma I: Objeto contiene internamente otro objeto */
let poder={
    type: 'Saltar edificios',
    level: 'alto'
}

let spiderman = {
    name: 'Peter',
    gener: 'M',
    age: 23,
    superpoder: poder
}

/* Forma II: Objeto contiene objeto declarado ahi mismo */
let linternaVerde = {
    name: 'Hal Jordan',
    gener: 'M',
    age: 27,
    superpoder: { /* No se puede utilizar la palabra clave let ni const, ni el sigo "=" */
        type: 'Lo que piensa lo hace real',
        level: 'alto'
    }
}

/* Dos palabras claves para la declaracion de variables : var no se utiliza
Porque a partir de la versión del ES6 sugirieron los dev el uso de let y const
const se utiliza cuando el objeto mantiene su valor, es decir, no sufre reasignaciones */
const edad = 15;
const calculoEdad = edad * 2;
console.log(calculoEdad);

let edadPeterPan = 15;
edadPeterPan /= 2;
/* Tipos de redondeamientos */
console.log("La edad de Peter Pan con round " + Math.round(edadPeterPan));
console.log("La edad de Peter Pan con ceil " + Math.ceil(edadPeterPan));
console.log("La edad de Peter Pan con floor " + Math.floor(edadPeterPan));

/* const nombreAsignatura =  */

/* Objeto que contiene la declaración de varios objetos 
Ejemplo parecido a linterna Verde*/
const productCelulares = {
    referencia1: {id: 1, category: "Iphone", name: "Iphone11Pro", start:2007, price:80000},
    referencia2: {id: 2, category: "MI", name: "Note8", start:2008, price:20000},
    referencia3: {id: 3, category: "Samsung", name: "Galaxy20", start:2003, price:30000},
    referencia4: {id: 4, category: "OnePlus", name: "OnePlus8", start:2005, price:50000},
    referencia5: {id: 5, category: "Nokia", name: "Nokia6.2", start:2001, price:10000},
    referencia6: {id: 6, category: "Iphone", name: "IphoneSE", start:2007, price:80000},
    referencia7: {id: 7, category: "Iphone", name: "Iphone11Pro", start:2007, price:80000},
    referencia8: {id: 8, category: "MI", name: "Note7", start:2008, price:20000},
    referencia9: {id: 9, category: "Samsung", name: "Galaxy10", start:2002, price:30000},
    referencia10: {id: 10, category: "OnePlus", name: "OnePlus8Pro", start:2005, price:50000},
    referencia11: {id: 11, category: "Nokia", name: "Nokia6", start:2001, price:10000}
}

/* Array que contiene la delcaración de varios objetos */
let product = [
    {id: 1, category: "Iphone", name: "Iphone11Pro", start:2007, price:80000},
    {id: 2, category: "MI", name: "Note8", start:2008, price:20000},
    {id: 3, category: "Samsung", name: "Galaxy20", start:2003, price:30000},
    {id: 4, category: "OnePlus", name: "OnePlus8", start:2005, price:50000},
    {id: 5, category: "Nokia", name: "Nokia6.2", start:2001, price:10000},
    {id: 6, category: "Iphone", name: "IphoneSE", start:2007, price:80000},
    {id: 7, category: "Iphone", name: "Iphone11Pro", start:2007, price:80000},
    {id: 8, category: "MI", name: "Note7", start:2008, price:20000},
    {id: 9, category: "Samsung", name: "Galaxy10", start:2002, price:30000},
    {id: 10, category: "OnePlus", name: "OnePlus8Pro", start:2005, price:50000},
    {id: 11, category: "Nokia", name: "Nokia6", start:2001, price:10000}
]

/* Imprimir valores de un array */
console.log("Imprimir con ciclo FOR");
for(let i = 0; i<product.length; i++){
    console.log("[Product " + i + "]", product[i]);
}

/* Imprimir con forEach 
No almacena operaciones que se hagan en la iteracion*/
/* No se almacena en memoria los nuevos valores */
let numeros = [1,2,3,4,5,6,7,8];
const salidaFinal = numeros.forEach(x => x * 2);
console.log(salidaFinal);

/* pero se pueden imprimir en tiempo real de ejecución */
numeros.forEach((i) => {
    console.log(i * 2);
});

console.log("Imprimir con forEach");
product.forEach((i) => {
    console.log("[Product " + i + "]", i);
});


/* Ciclo map */
console.log("Imprimir con MAP");

const salidaMap = numeros.map(x => x * 2);
console.log(salidaMap);

product.map((i) => {
    console.log("[Product " + i + "]", i);
})

/* Algoritmo iterativo y recursivo
- Burbuja
- Seleccion 
- Insercion */
    