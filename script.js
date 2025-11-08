document.getElementById("registroForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    
    let username = document.getElementById("username").value.trim();
    const correo = String(document.getElementById("email").value).trim();
    let nombre2 = document.getElementById("nombre2").value.trim();
    let apellido2 = document.getElementById("apellido2").value.trim();
    let user; 

    // Reemplazar vacíos por ""
    nombre2 = nombre2 || "";
    apellido2 = apellido2 || "";
    
    if (!username) {
        // Extraer la parte antes del @
        user = correo.split("@")[0];
        document.getElementById("username").value = user;
        }
    else{
        user = username
        }
    
    const pass = user.charAt(0).toUpperCase() + user.slice(1) + "*123";

    document.getElementById("password").value = pass;


    
    const data = {
        userID: Number(document.getElementById("userID").value),
        nombre1: document.getElementById("nombre1").value.trim(),
        nombre2: nombre2,
        apellido1: document.getElementById("apellido1").value.trim(),
        apellido2: apellido2,
        password: pass,
        email: correo,
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

    
        if (result.status === false) {

            alert("El usuario ya existe.\nPor favor, cambie el Usuario y/o el Correo.");
            // Mensaje de error que viene del backend
            //document.getElementById("mensaje").innerText = "❌ Error al registrar el usuario";
            
            // Limpiar solo el username y el email
            //document.getElementById("userID").value = "";
            //document.getElementById("email").value = "";

            // Limpiar el formulario
            document.getElementById("registroForm").reset();
            } 

        else {  
            alert("Usuario registrado correctamente");
             // Mensaje de éxito
             //document.getElementById("mensaje").innerText = result.message || "Usuario registrado correctamente ✅";
            }



    } catch (error) {
        console.error("Error:", error);
    }
});
