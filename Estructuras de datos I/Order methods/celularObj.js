/* Objeto que contiene la declaración de varios objetos */
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
    
for(let i = 0; i<product.length; i++){
    console.log("[Producto]", product[i]);
}
/* forEach itera un arreglo: actividades u operaciones con cada valor del arreglo
forEach no permite almacenar los resultados de las operaciones para utilizarlas más adelante*/
product.forEach((pro)=>{
    console.log("[Producto]", pro);
})
/* map permite almacenar los resultados de las operaciones para utilizarlas más adelante*/

product.map((pro)=>{
    console.log("[Producto]", pro);
})