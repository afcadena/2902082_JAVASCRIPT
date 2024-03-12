document.addEventListener("DOMContentLoaded", function() {
    var calcularButtons = document.querySelectorAll('.calcular');
    calcularButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var ejercicio = this.getAttribute('data-ejercicio');
            if (ejercicio === 'area') {
                calcularArea();
            } else if (ejercicio === 'suma') {
                sumarNumeros();
            } else if (ejercicio === 'cuadrado') {
                calcularElevado();
            }else if (ejercicio === 'conversion') {
                convertirEurosADolares();
            }else if (ejercicio === 'perimetro') {
                calcularPerimetroCuadrado();
            }else if (ejercicio === 'cilindro') {
                calcularCilindro();
            }else if (ejercicio === 'circunferencia'){
                calcularCircunferencia();
            }else if (ejercicio === 'promedio'){
                calcularPromedio();
            }
        });
    });
});


function calcularArea() {
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);

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
    var cuadrado = numero * numero; // Calcula el cuadrado del número

    mostrarModal('El cuadrado del número ingresado es: ' + cuadrado.toFixed(2) + '.');
}

function convertirEurosADolares() {
    var cantidadEuros = parseFloat(document.getElementById('cantidad').value);


    var tipoCambio = 1.08;
    var cantidadDolares = cantidadEuros * tipoCambio;

    mostrarModal(cantidadEuros + ' euros equivalen a ' + cantidadDolares.toFixed(2) + ' dólares.');
}
function calcularPerimetroCuadrado() {
    var lado = parseFloat(document.getElementById('lado').value);

    var area = lado * lado;
    var perimetro = 4 * lado;

    mostrarModal('El área del cuadrado es: ' + area.toFixed(2) + '. El perímetro del cuadrado es: ' + perimetro.toFixed(2) + '.');
}

function calcularCilindro() {
    var radio = parseFloat(document.getElementById('radio').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var areaLateral = 2 * Math.PI * radio * altura;
    var areaTotal = areaLateral + (2 * Math.PI * radio * radio);
    var volumen = Math.PI * radio * radio * altura;

    mostrarModal('El área lateral del cilindro es: ' + areaLateral.toFixed(2) + '. El área total del cilindro es: ' + areaTotal.toFixed(2) + '. El volumen del cilindro es: ' + volumen.toFixed(2) + '.');
}
function calcularCircunferencia(){
    var radioCircunferencia = parseFloat(document.getElementById('radioCircunferencia').value);

    var longitudCircunferencia = 2 * Math.PI * radioCircunferencia;
    var areaCirculoInscrito = Math.PI * radioCircunferencia * radioCircunferencia;

    mostrarModal('La longitud de la circunferencia es: ' + longitudCircunferencia.toFixed(2) + '. El área del círculo inscrito es: ' + areaCirculoInscrito.toFixed(2) + '.');
}
function calcularPromedio() {
    var numero1 = parseFloat(document.getElementById('numerop1').value);
    var numero2 = parseFloat(document.getElementById('numerop2').value);
    var numero3 = parseFloat(document.getElementById('numerop3').value);

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
