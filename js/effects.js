const overlay = document.getElementById('overlay');  // Overlay de la página para mostrar al inicio
const imagenPrincipal = document.getElementById('imagen-principal');  // Imagen principal de la página
const risaAudio = document.getElementById('risa-audio');  // Audio de risa maléfica
const ambienteAudio = document.getElementById('ambiente-audio');  // Audio de ambiente tenebroso
ambienteAudio.volume = 0.3;  // Volumen al 30% para dar ambiente sin ser molesto

// Función para iniciar el audio de ambiente cuando el usuario hace clic en la página
function iniciar() {
    overlay.style.display = 'none';  // Ocultar el overlay
    ambienteAudio.play();  // Empezar a reproducir el audio de ambiente
}

// Función para cambiar la imagen a una aterradora y reproducir la risa maléfica
function cambiarImagen() {
    
    // Cambia la imagen principal a una imagen aterradora
    imagenPrincipal.src = 'images/scary_image.jpg';

    // Empezar a reproducir el audio
    risaAudio.play();
}

// Función para restaurar la imagen original y detener la risa maléfica
function restaurarImagen() {
    // Cambia la imagen principal de vuelta a la imagen original
    imagenPrincipal.src = 'images/sombra-tenebrosa.jpg';    

    // Detener el audio (pausar la risa maléfica)
    risaAudio.pause();
    
    // Reiniciar el audio al inicio para que la próxima vez empiece desde el principio
    risaAudio.currentTime = 0; 
}
