// Efecto de sonido aterrador al cargar la página
window.onload = function() {    
    var audio = new Audio('/sounds/horror-sounds.mp3');  // Crear un nuevo objeto de audio
    audio.volume = 0.3;  // Volumen al 30% para dar ambiente sin ser molesto
    audio.loop = true;   // Sonido en bucle para mantener el ambiente
    audio.play();   // Inicia la reproducción automáticamente cuando la página haya cargado
};

// Crear el audio de la risa maléfica
var risaAudio = new Audio('sounds/risa-malefica.mp3');

// Función para cambiar la imagen a una aterradora y reproducir la risa maléfica
function cambiarImagen() {
    
    // Cambia la imagen principal a una imagen aterradora
    document.getElementById('imagen-principal').src = 'images/scary_image.jpg';

    // Empezar a reproducir el audio
    risaAudio.play();
}

// Función para restaurar la imagen original y detener la risa maléfica
function restaurarImagen() {
    // Cambia la imagen principal de vuelta a la imagen original
    document.getElementById('imagen-principal').src = 'images/sombra-tenebrosa.jpg';    

    // Detener el audio (pausar la risa maléfica)
    risaAudio.pause();
    
    // Reiniciar el audio al inicio para que la próxima vez empiece desde el principio
    risaAudio.currentTime = 0; 
}

