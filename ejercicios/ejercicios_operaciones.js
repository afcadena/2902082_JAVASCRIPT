function calcularArea() {
    var baseInput = document.getElementById('base');
    var alturaInput = document.getElementById('altura');

    if (!baseInput || !alturaInput || baseInput.value === "" || alturaInput.value === "") {
        mostrarModal('Por favor, ingrese los valores de base y altura.');
        return;
    }

    var base = parseFloat(baseInput.value);
    var altura = parseFloat(alturaInput.value);

    var area = (base * altura) / 2;
    mostrarModal('El área del triángulo es: ' + area);
}

function sumarNumeros() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    var suma = numero1 + numero2;
    mostrarModal('La suma de los números es: ' + suma);
}

function calcularElevado() {
    var numero = parseFloat(document.getElementById('numeroC').value);

    if (!numero) {
        mostrarModal('Por favor, ingrese un número válido.');
        return;
    }

    var cuadrado = numero * numero; // Calcula el cuadrado del número

    mostrarModal('El cuadrado del número ingresado es: ' + cuadrado.toFixed(2) + '.');
}

function convertirEurosADolares() {
    var cantidadEuros = parseFloat(document.getElementById('cantidad').value);

    if (!cantidadEuros) {
        mostrarModal('Por favor, ingrese una cantidad válida.');
        return;
    }

    var tipoCambio = 1.08;
    var cantidadDolares = cantidadEuros * tipoCambio;

    mostrarModal(cantidadEuros + ' euros equivalen a ' + cantidadDolares.toFixed(2) + ' dólares.');
}

function calcularPerimetroCuadrado() {
    var lado = parseFloat(document.getElementById('lado').value);

    if (!lado) {
        mostrarModal('Por favor, ingrese el valor del lado del cuadrado.');
        return;
    }

    var area = lado * lado;
    var perimetro = 4 * lado;

    mostrarModal('El área del cuadrado es: ' + area.toFixed(2) + '. El perímetro del cuadrado es: ' + perimetro.toFixed(2) + '.');
}

function calcularCilindro() {
    var radio = parseFloat(document.getElementById('radio').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (!radio || !altura) {
        mostrarModal('Por favor, ingrese los valores del radio y la altura del cilindro.');
        return;
    }

    var areaLateral = 2 * Math.PI * radio * altura;
    var areaTotal = areaLateral + (2 * Math.PI * radio * radio);
    var volumen = Math.PI * radio * radio * altura;

    mostrarModal('El área lateral del cilindro es: ' + areaLateral.toFixed(2) + '. El área total del cilindro es: ' + areaTotal.toFixed(2) + '. El volumen del cilindro es: ' + volumen.toFixed(2) + '.');
}

function calcularCircunferencia() {
    var radioCircunferencia = parseFloat(document.getElementById('radioCircunferencia').value);

    if (!radioCircunferencia) {
        mostrarModal('Por favor, ingrese el valor del radio de la circunferencia.');
        return;
    }

    var longitudCircunferencia = 2 * Math.PI * radioCircunferencia;
    var areaCirculoInscrito = Math.PI * radioCircunferencia * radioCircunferencia;

    mostrarModal('La longitud de la circunferencia es: ' + longitudCircunferencia.toFixed(2) + '. El área del círculo inscrito es: ' + areaCirculoInscrito.toFixed(2) + '.');
}

function calcularPromedio() {
    var numero1 = parseFloat(document.getElementById('numerop1').value);
    var numero2 = parseFloat(document.getElementById('numerop2').value);
    var numero3 = parseFloat(document.getElementById('numerop3').value);

    if (!numero1 || !numero2 || !numero3) {
        mostrarModal('Por favor, ingrese valores válidos para los tres números.');
        return;
    }

    var promedio = (numero1 + numero2 + numero3) / 3;

    mostrarModal('El promedio de los tres números ingresados es: ' + promedio.toFixed(2) + '.');
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
