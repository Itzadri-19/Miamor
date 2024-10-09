function openFullscreen(img) {
    // Si la música no ha sido activada, la activamos
    if (!musicPlayed) {
        audio.play(); // Reproduce la música
        musicPlayed = true; // Marca que la música ha sido activada
    }

    // Crea un contenedor para la imagen y la descripción
    var fullScreenContainer = document.createElement("div");
    fullScreenContainer.id = "fullScreenContainer";

    // Crea un nuevo elemento de imagen
    var fullScreenImg = document.createElement("img");
    fullScreenImg.src = img.src; // Usa la misma fuente que la imagen original
    fullScreenImg.id = "fullScreenImg";

    // Añadir la descripción
    var description = document.createElement("div");
    description.id = "description";
    description.innerText = img.alt; // Usa el atributo alt para la descripción

    // Añade la imagen y la descripción al contenedor
    fullScreenContainer.appendChild(fullScreenImg);
    fullScreenContainer.appendChild(description);

    // Elimina cualquier contenedor anterior
    var existingContainer = document.getElementById("fullScreenContainer");
    if (existingContainer) {
        existingContainer.remove();
    }

    // Añade el contenedor al body
    document.body.appendChild(fullScreenContainer);

    // Aplica el desenfoque al fondo
    document.body.classList.add("blur");

    // Registra un evento de clic para cerrar
    fullScreenContainer.addEventListener("click", function() {
        fullScreenContainer.remove(); // Elimina el contenedor
        document.body.classList.remove("blur"); // Quita el desenfoque
    });
}
