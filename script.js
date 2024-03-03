document.addEventListener("DOMContentLoaded", function() {
    var formularios = document.querySelectorAll('.container');
    formularios.forEach(function(formulario) {
        formulario.style.display = 'none';
    });
});

function mostrarFormulario(formularioId) {
    var formularios = document.querySelectorAll('.container');
    formularios.forEach(function(formulario) {
        formulario.style.display = 'none';
    });

    var formularioAMostrar = document.getElementById(formularioId);
    formularioAMostrar.style.display = 'block';
}

function mostrarSubFormulario(formularioPadreId, subFormularioId) {
    var subFormularios = document.querySelectorAll('.sub-container');
    subFormularios.forEach(function(subFormulario) {
        subFormulario.style.display = 'none';
    });

    var subFormularioAMostrar = document.getElementById(subFormularioId);
    subFormularioAMostrar.style.display = 'block';

    // Si deseas ocultar el formulario padre, descomenta la siguiente línea
    // document.getElementById(formularioPadreId).style.display = 'none';
}