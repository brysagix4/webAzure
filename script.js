document.getElementById("registroForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    
    let username = document.getElementById("username").value.trim();
    
    if (!username) {
        // Extraer la parte antes del @
        user = email.split("@")[0];
        document.getElementById("username").value = user;
        }
    else{
        user = username
        }
    
    const pass = username.charAt(0).toUpperCase() + username.slice(1) + "*123";

    document.getElementById("password").value = pass;


    
    const data = {
        userID: Number(document.getElementById("userID").value),
        nombre1: document.getElementById("nombre1").value.trim(),
        nombre2: document.getElementById("nombre2").value.trim(),
        apellido1: document.getElementById("apellido1").value.trim(),
        apellido2: document.getElementById("apellido2").value.trim(),
        password: pass,
        email: document.getElementById("email").value.trim(),
        username: user
    };

    


    try {
        const response = await fetch(
            "https://w2mb06yk3h.execute-api.us-east-1.amazonaws.com/default/crubBaseDatosDynamoRegistro",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json(); // Convierte la respuesta a JSON
        console.log("Respuesta del servidor:", result);

        document.getElementById("mensaje").innerText = result.message || "Usuario registrado correctamente ✅";
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("mensaje").innerText = "❌ Error al registrar el usuario.";
    }
});
