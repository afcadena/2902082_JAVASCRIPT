function examinarMultiplos() {
    var multiplos = [];
    for (var i = 3; i <= 100; i += 3) {
        multiplos.push(i);
    }
    mostrarModal("Múltiplos de 3 hasta 100: " + multiplos.join(", "));
}

function ExaminarImpares() {
    var impares = [];
    for (var i = 1; i <= 100; i += 2) {
        impares.push(i);
    }
    mostrarModal("Números impares entre 0 y 100: " + impares.join(", "));
}

function examinarpares0a100() {
    var pares = [];
    for (var i = 2; i <= 100; i += 2) {
        pares.push(i);
    }
    mostrarModal("Números pares entre 1 y 100: " + pares.join(", "));
    
}

function examinarnumCuadrado() {
    var cuadrados = [];
    for (var i = 1; i <= 30; i++) {
        cuadrados.push(i * i);
    }
    mostrarModal("Cuadrados de los números del 1 al 30: " + cuadrados.join(", "));
}

function examinarcuadrado() {
    var suma = 0;
    for (var i = 1; i <= 100; i++) {
        suma += i * i;
    }
    mostrarModal("La suma de los cuadrados de los primeros 100 numeros naturales es: " + suma);
}

function examinarsecuenciaascendente() {
    var numero1 = parseFloat(document.getElementById("numerodn").value);
    var numero2 = parseFloat(document.getElementById("numerodn2").value);

    if (!isNaN(numero1) && !isNaN(numero2)) { //isNaN(numero1): Devuelve true si numero1 no es un número o es NaN, y false si es un número válido.
        var secuencia = []; //  !isNaN(numero1): Devuelve true si numero1 es un número válido, y false si no lo es.
        for (var i = numero1; i <= numero2; i++) {
            secuencia.push(i);
        }
        mostrarModal("Numeros comprendidos entre " + numero1 + " y " + numero2 + ": " + secuencia.join(", "));
    } else {
        mostrarModal("Por favor, ingrese dos números naturales válidos.");
    }
}

function agregarNumeroteclado() {
    var numero1 = parseFloat(document.getElementById("numerot1").value);
    var numero2 = parseFloat(document.getElementById("numerot2").value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        sumaAcumulada += numero1 + numero2;
        mostrarResultadoParcial("Suma parcial: " + sumaAcumulada);
    } else {
        mostrarModal("Por favor, ingrese números válidos en ambos campos.");
    }
}
function mostrarResultadoParcial(resultado) {
    document.getElementById("resultadoParcial").textContent = resultado;
}

function mostrarResultadoFinal() {
    var resultadoFinal = "La suma total es: " + sumaAcumulada;
    mostrarModal(resultadoFinal);
}

function reiniciarSuma() {
    sumaAcumulada = 0;
    mostrarResultadoParcial("La suma ha sido reiniciada.");
}

    