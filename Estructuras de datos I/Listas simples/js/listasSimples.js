class NodeCls{
    constructor(val){
        this.val = val;
        this.next = null; /* Puntero: generar enlace entre nodos */
    }
}

class listasSimples{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* Método: Añadir valores al final de la lista */
    pushLista(val){
        let newNode = new NodeCls(val);
        /* Validar si la lista esta vacía */
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode; /* Generando el enlace con el otro nodo */
            this.tail = newNode; /* El nuevo elemento en la lista pasa a ser la cola */
        }
        this.length++;
        return this;
    }
    /* Método: Eliminar valor al final de la lista */
    popLista(){
        if(!this.head) return undefined;
        let nodoActual = this.head;
        let nuevaCola = nodoActual;
        while(nodoActual.next){
            nuevaCola = nodoActual;
            nodoActual = nodoActual.next;
        }
        this.tail = nuevaCola;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return nodoActual;
    }

    /* Añadir elemento al inicio de la lista */
    unshiftLista(val){
        let nuevoNodo = new NodeCls(val);
        if(!this.head){
            this.head = nuevoNodo;
            this.tail = this.head;
        }
        nuevoNodo.next = this.head;
        this.head = nuevoNodo;
        this.length++;
        return this;
    }
    /* Eliminar elemento al inicio de la lista */
    shiftLista(){
        if(!this.head) return undefined;
        let cabezaActual = this.head;
        this.head = cabezaActual.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return cabezaActual;
    }

    /* Método que nos permite buscar un puntero y retornar el valor del nodo */
    getPositionPuntero(index){
        if(index < 0 || index >= this.length) return null;
        let contadorPunteros = 0;
        let nodoActual = this.head;
        /* No se ha encontrado el index */
        while( contadorPunteros !== index){
            nodoActual = nodoActual.next;
            contadorPunteros++;
        }
        return nodoActual;
    }

    modificarValorNodo(index, val){
        let encontrarNodo = this.getPositionPuntero(index);
        if(encontrarNodo){
            encontrarNodo.val = val;
            return true;
        }
        return false;
    }

    

    removerNodoPorPosicion(index){
       let nodoActual = this.head;
       let nodoPrevio = null;
       if(index < 0 || index >= this.length) return null;
       if(index === 0) this.head = nodoActual.next;
       else{
           for(let i = 0; i <index; i++){
                nodoPrevio = nodoActual;
                nodoActual = nodoActual.next;
           }
           nodoPrevio.next = nodoActual.next;
       }
       this.length--;
       return nodoActual.val;
    }
}

let listaNueva = new listasSimples();
listaNueva.pushLista(100);
listaNueva.pushLista(101);
listaNueva.pushLista(102);
listaNueva.pushLista(103);
listaNueva.pushLista(104);
console.log(listaNueva.removerNodoPorPosicion(2));