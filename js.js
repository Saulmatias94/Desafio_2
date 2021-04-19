const displayValorAnterior = document.getElementById('valor-anterior');
const displaySimbolo = document.getElementById('simbolo');
const displayValorActual = document.getElementById('resultado');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const pantalla = new Pantalla(displayValorActual, displayValorAnterior, displaySimbolo);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => pantalla.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.valores(boton.value))
});
