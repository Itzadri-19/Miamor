document.addEventListener("DOMContentLoaded", function() {
    const updates = [
        { text: "Actualización 1: Nueva función de búsqueda.", date: "2024-10-01" },
        { text: "Actualización 2: Mejora en el rendimiento.", date: "2024-10-10" },
        { text: "Actualización 3: Añadir portal usuario.", date: "2024-10-15" },
        // Agrega más actualizaciones según sea necesario
    ];

    // Manejar el inicio de sesión
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.onsubmit = function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Verificar credenciales
            let users = JSON.parse(localStorage.getItem("users")) || {};
            if (users[username] === password) {
                const recentActivities = JSON.parse(localStorage.getItem("recentActivities")) || [];
                
                // Guardar la fecha y hora de inicio de sesión
                const lastLogin = new Date();
                localStorage.setItem("lastLogin", lastLogin);
                
                // Mostrar popup de actualizaciones
                showUpdates(lastLogin);

                // Redirigir a la página principal
                window.location.href = "index.html"; // Cambia esto según la página principal
            } else {
                alert("Usuario o contraseña incorrectos.");
            }
        };
    }

    // Manejar la creación de cuenta
    const createForm = document.getElementById("createForm");
    if (createForm) {
        createForm.onsubmit = function(event) {
            event.preventDefault();
            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;

            let users = JSON.parse(localStorage.getItem("users")) || {};
            if (users[newUsername]) {
                alert("El usuario ya existe.");
            } else {
                users[newUsername] = newPassword;
                localStorage.setItem("users", JSON.stringify(users));
                alert(`Cuenta creada para ${newUsername}!`);
                // Redirigir a la página de inicio de sesión
                window.location.href = "usuario.html";
            }
        };
    }

    // Función para mostrar actualizaciones
    function showUpdates(lastLogin) {
        const lastLoginDate = new Date(lastLogin);
        const updatesList = updates.filter(update => {
            const updateDate = new Date(update.date);
            return updateDate > lastLoginDate;
        });

        if (updatesList.length > 0) {
            alert("Actualizaciones desde tu última visita:\n" + updatesList.map(update => update.text).join("\n"));
        } else {
            alert("No hay nuevas actualizaciones desde tu última visita.");
        }
    }
});
