class NodeListaSimple {
    constructor(valor) {
        /* Estructura de una lista simple */
        this.valor = valor;
        this.punteroSiguiente = null; /* -> */
    }
}

class listasIndividualmenteEnlazadas {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    añadirNodoAlFinal(valor) {
        let nuevoNodo = new NodeListaSimple(valor);
        if (!this.head) {
            this.head = nuevoNodo;
            this.tail = this.head;
        } else {
            this.tail.punteroSiguiente = nuevoNodo; /* Enlazamos la cola actual con el nuevo nodo */
            this.tail = nuevoNodo;
        }
        this.length++;
        return this;
    }

    añadirNodoAlInicio(valor) {
        let nuevoNodo = new NodeListaSimple(valor);
        if (!this.head) {
            this.head = nuevoNodo;
            this.tail = this.head;
        } else {
            nuevoNodo.punteroSiguiente = this.head;
            this.head = nuevoNodo;
        }
        this.length++;
        return this;
    }

    eliminarNodoAlFinal() {
        if (!this.head) {
            return undefined;
        }
        let nodoActual = this.head;
        let nodoCola = nodoActual;
        while (nodoActual.punteroSiguiente) {
            nodoCola = nodoActual;
            nodoActual = nodoActual.punteroSiguiente;
        }
        this.tail = nodoCola;
        this.tail.punteroSiguiente = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }
        return nodoActual;
    }

    eliminarNodoAlInicio() {
        if (!this.head) {
            return undefined;
        }
        let nodoActual = this.head;
        this.head = nodoActual.punteroSiguiente;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }
        return nodoActual;
    }

    obtenerValorNodo(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let contadorPunteros = 0;
        let nodoActual = this.head;
        while (index !== contadorPunteros) {
            nodoActual = nodoActual.punteroSiguiente;
            contadorPunteros++;
        }
        console.log(nodoActual.valor);
        return nodoActual;
    }

    modificarValorNodoConsultado(index, valor) {
        let nodoConsultado = this.obtenerValorNodo(index);
        if (nodoConsultado) {
            return nodoConsultado.valor = valor;
        }
        return false;
    }

    eliminarNodoPorPosicion(index) {
        let nodoActual = this.head;
        let nodoAnterior = null;
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0) {
            this.eliminarNodoAlInicio();
        } else if (index === this.length) {
            this.eliminarNodoAlFinal();
        } else {
            for (let i = 0; i < index; i++) {
                nodoAnterior = nodoActual;
                nodoActual = nodoActual.punteroSiguiente;
            }
            nodoAnterior.punteroSiguiente = nodoActual.punteroSiguiente;
            this.length--;
        }

        return nodoActual.valor;
    }

    insertarNodoPorPosicion(index, valor) {
            let nuevoNodo = new NodeListaSimple(valor);
            let nodoActual = this.head;
            let nodoAnteriorAlActual;
            if (index < 0 || index > this.length) {
                return null;
            }
            if (index === 0) {
                nuevoNodo.punteroSiguiente = nodoActual;
                this.head = nuevoNodo;
                /* this.añadirNodoAlInicio(nuevoNodo.valor); */
            } else {
                for (let i = 0; i < index; i++) {
                    nodoAnteriorAlActual = nodoActual;
                    nodoActual = nodoActual.punteroSiguiente;
                };
                nuevoNodo.punteroSiguiente = nodoActual;
                nodoAnteriorAlActual.punteroSiguiente = nuevoNodo;
            }
            this.length++;
            return this;
        }
        /* Para poder ver la lista en la página cuando se imprime desde innerHTML */
    imprimirListResultante() {
        let arregloL = [];
        let nodoActual = this.head;
        while (nodoActual) {
            arregloL.push(nodoActual.valor);
            nodoActual = nodoActual.punteroSiguiente;
        }
        return arregloL;
    }
}

function listaSimpleInicial() {
    let valoresIngresados = document.getElementById("valorL").value;
    /* Seperar cada valor ingresado cuando se encuentra el caracter "," */
    let arrayAuxiliar = valoresIngresados.split(",");
    document.getElementById("valoresA").innerHTML = arrayAuxiliar;
    document.getElementById("valoresP").innerHTML = arrayAuxiliar;
}

function callFunctionPerOptionSelect() {
    let listaS = new listasIndividualmenteEnlazadas();
    let valorN = document.getElementById("valorN").value;
    let valPosicionLista = document.getElementById("posicionL").value;
    let capturarIdSelect = document.getElementById("funcionListaSimple");

    if (capturarIdSelect.value == "1") {
        listaS.añadirNodoAlInicio(valorN);
    } else if (capturarIdSelect.value == "2") {
        listaS.añadirNodoAlFinal(valorN);
    } else if (capturarIdSelect.value == "3") {
        listaS.eliminarNodoAlInicio();
    } else if (capturarIdSelect.value == "4") {
        listaS.eliminarNodoAlFinal();
    } else if (capturarIdSelect.value == "5") {
        listaS.modificarValorNodoConsultado(valPosicionLista, valorN);
    } else if (capturarIdSelect.value == "6") {
        listaS.eliminarNodoPorPosicion(valPosicionLista);
    } else {
        listaS.insertarNodoPorPosicion(valPosicionLista, valorN);
    }
}