// Obtener los elementos
const melancholicButton = document.getElementById('melancholicButton');
const cheerUpButton = document.getElementById('cheerUpButton');
const content = document.getElementById('content');
const backgroundMusic = document.getElementById('backgroundMusic');

// Rutas de las canciones
const melancholicSong = 'jueves.mp3'; // Debes añadir el archivo a tu carpeta
const cheerUpSong = 'parteme_la_cara.mp3'; // Añadir el archivo

// Función para mostrar el contenido y reproducir la música
function showContent(song) {
    content.classList.remove('hidden');  // Mostrar el contenido
    backgroundMusic.src = song;
    backgroundMusic.play();
}

// Botón melancólico
melancholicButton.addEventListener('click', () => {
    showContent(melancholicSong);
});

// Botón animar
cheerUpButton.addEventListener('click', () => {
    showContent(cheerUpSong);
});
