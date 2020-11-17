/* Pila creada con un array */
class Stack {
    constructor() {
        this.stack = []; /* Se inicia como un array vacío */
    }

    push(element) {
        this.stack.push(element);
        return this.stack;
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }
}

const stack = new Stack();
console.log(stack.size());
console.log(stack.push('Noticia 1'));
console.log(stack.push('Noticia 2'));
console.log(stack.push('Noticia 3'));
console.log(stack.size());
stack.print();
console.log("El último elemento de la pila es " + stack.peek());
console.log("Se ha eliminado el elemento " + stack.pop());
console.log("El último elemento de la pila es " + stack.peek());


/* Pila creada con un objeto*/
class StackObj {
    constructor() {
        this.stack = {};
        this.count = 0;
    }

    push(element) {
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }

    pop() {
        const element = this.stack[this.count];
        delete this.stack[this.count];
        this.count--;
        return element;
    }

    peek() {
        return this.stack[this.count - 1];
    }

    size() {
        return this.count;
    }

    print() {
        console.log(this.stack);
    }
}
console.log("TRABAJANDO LAS PILAS CON OBJETOS");
const stackObj = new Stack();
console.log(stackObj.size());
console.log(stackObj.push('Noticia 1'));
console.log(stackObj.push('Noticia 2'));
console.log(stackObj.push('Noticia 3'));
console.log(stackObj.size());
stackObj.print();
console.log("El último elemento de la pila es " + stackObj.peek());
console.log("Se ha eliminado el elemento " + stackObj.pop());
console.log("El último elemento de la pila es " + stackObj.peek());