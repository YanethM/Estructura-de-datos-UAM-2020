class NodeListaDoble {
    constructor(valor) {
        /* Estructura de una lista simple */
        this.valor = valor;
        this.punteroSiguiente = null; /* -> */
        this.punteroAnterior = null; /* <- */
    }
}


class listasDoblementeEnlazadas {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}