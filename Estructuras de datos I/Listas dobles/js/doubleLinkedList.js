
function valorSelect(){
    
}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}
class doubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    agregarNodoAlFinal(val){
        let nuevoNodo = new Node(val);
        if(!this.head){
            this.head = nuevoNodo;
            this.tail = this.head;
        }else{
            let colaActual = this.tail;
            this.tail.next = nuevoNodo;
            this.tail = nuevoNodo;
            this.tail.previous = colaActual;
        }
        this.length++;
        return this; //Retorna el objeto, en este caso es la lista
    }

    eliminarNodoAlFinal(){
        if(!this.head) return undefined;
        let nodoActual = this.head;
        let nuevaCola = nodoActual;
        //Encontrar el final de la lista
        while(nodoActual.next){
            nuevaCola = nodoActual;
            nodoActual = nodoActual.next;
        }

        this.tail = nuevaCola;
        this.tail.next = null;
        this.length--;
        //Si la lisa tenia un único nodo y lo eliminamos
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return nodoActual;
    }

    agregarNodoAlInicio(val){
        let nuevoNodo = new Node(val);
        if(!this.head){
            this.head = nuevoNodo;
            this.tail = this.head;
        }
        let nodoActual = this.head;
        nuevoNodo.next = this.head;
        this.head = nuevoNodo;
        nodoActual.previous = this.head;
        this.length++;
        return this;
    }

    eliminarNodoInicio(){
        if(!this.head) return undefined;
        let nodoActual = this.head;
        this.head = nodoActual.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        this.head.previous = null;
        return nodoActual;
    }

    mostrarLista(){
        let arreglo = [];
        let nodoActual = this.head;
        while(nodoActual){
            arreglo.push(nodoActual.val);
            nodoActual = nodoActual.next;
        }
        return arreglo;
    }

    capturarValorSelect(){
        
    }
    
}

let listaDoble = new doubleLinkedList();
console.log(listaDoble.agregarNodoAlFinal(7887));
console.log(listaDoble.agregarNodoAlInicio('Nodo intermedio'));
console.log(listaDoble.agregarNodoAlInicio(3));
listaDoble.eliminarNodoInicio();
listaDoble.eliminarNodoAlFinal();
console.log(listaDoble.mostrarLista());




