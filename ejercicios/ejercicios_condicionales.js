function determinarPositivoNegativo() {
    var numero = parseFloat(document.getElementById('numerop_n').value);

    if (numero > 0) {
        mostrarModal('El número ingresado es positivo.');
    } else if (numero < 0) {
        mostrarModal('El número ingresado es negativo.');
    } else {
        mostrarModal('El número ingresado es cero.');
    }
}

function determinarMayorMenor() {
    var numeroA = parseFloat(document.getElementById('numerom_n').value);
    var numeroB = parseFloat(document.getElementById('numerom_n2').value);

    if (numeroA > numeroB) {
        mostrarModal('El primer número es mayor que el segundo.');
    } else if (numeroA < numeroB) {
        mostrarModal('El segundo número es mayor que el primero.');
    } else {
        mostrarModal('Los números son iguales.');
    }
}

function determinarMayorMenorTres() {
    var numeroA = parseFloat(document.getElementById('numerop_m_n').value);
    var numeroB = parseFloat(document.getElementById('numerop_m_n2').value);
    var numeroC = parseFloat(document.getElementById('numerop_m_n3').value);

    var mayor = Math.max(numeroA, numeroB, numeroC);
    var menor = Math.min(numeroA, numeroB, numeroC);

    mostrarModal('El número mayor es: ' + mayor + '. El número menor es: ' + menor + '.');
}

function sumarRestar() {
    var numeroA = parseFloat(document.getElementById('numeroA').value);
    var numeroB = parseFloat(document.getElementById('numeroB').value);

    var resultado;
    if (numeroA < numeroB) {
        resultado = numeroA + numeroB;
        mostrarModal('La suma de los dos números es: ' + resultado + '.');
    } else {
        resultado = numeroA - numeroB;
        mostrarModal('La resta de los dos números es: ' + resultado + '.');
    }
}

function examinarCociente() {
    var numeroCo1 = parseFloat(document.getElementById("numeroCo").value);
    var numeroCo2 = parseFloat(document.getElementById("numeroCo2").value);

    if (numeroCo2 !== 0) {
        var cociente = numeroCo1 / numeroCo2;
        mostrarModal("El cociente entre " + numeroCo1.toFixed(2) + " y " + numeroCo2.toFixed(2) + " es: " + cociente);
    } else {
        mostrarModal("No es posible dividir por cero. Por favor, ingrese un valor diferente para el segundo número");
    }
} 

function examinarSumaMultiplicacion() {
    var numeroSm1 = parseFloat(document.getElementById("numeroSm").value);
    var numeroSm2 = parseFloat(document.getElementById("numeroSm2").value);
    var Suma = numeroSm1 + numeroSm2;
    var Multiplicacion = numeroSm1 * numeroSm2;

    if (numeroSm1 < 0 || numeroSm2 < 0) {
        mostrarModal("La suma es: " + Suma);
    } else {
        mostrarModal("La multiplicacion es: " + Multiplicacion);
    }
} 

function examinarAñoBisiesto() {
    var numeroBs = parseFloat(document.getElementById("numeroBs").value);

    if (!isNaN(numeroBs)) {
        if ((numeroBs % 4 === 0 && numeroBs % 100 !== 0) || (numeroBs % 400 === 0)) {
            mostrarModal(numeroBs + " es año bisiesto.");
        } else {
            mostrarModal(numeroBs + " no es un año bisiesto.");
        }
    } else {
        mostrarModal("Por favor, ingrese un año válido.");
    }
}

// Mostrar y cerrar ventana modal
function mostrarModal(mensaje) {
    var modal = document.getElementById('modal');
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = mensaje;
    modal.style.display = 'block';
}

function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}