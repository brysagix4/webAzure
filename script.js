document.getElementById("registroForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    userID: Number(document.getElementById("userID").value),
    nombre1: document.getElementById("nombre1").value,
    nombre2: document.getElementById("nombre2").value,
    apellido1: document.getElementById("apellido1").value,
    apellido2: document.getElementById("apellido2").value,
    password: document.getElementById("password").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value
  };

  try {
    const response = await fetch("https://w2mb06yk3h.execute-api.us-east-1.amazonaws.com/default/crubBaseDatosDynamoRegistro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    // Muestra toda la respuesta HTTP (para depuración)
    console.log("HTTP response:", response);

    const result = await response.json();

    // Muestra el contenido JSON devuelto por tu Lambda
    console.log("Respuesta del servidor:", result);

    document.getElementById("mensaje").innerText = result.message || "Usuario registrado correctamente ✅";
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("mensaje").innerText = "❌ Error al registrar el usuario.";
  }
});
