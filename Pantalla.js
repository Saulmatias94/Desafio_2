class Pantalla {
    constructor(displayValorActual,displayValorAnterior , displaySimbolo) {
        this.displayValorActual = displayValorActual;
        this.displaySimbolo = displaySimbolo;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calcu();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorResultado= '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }


    valores(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
        this.displaySimbolo.textContent= this.signos[this.tipoOperacion] || '';
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
}