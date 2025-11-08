document.getElementById("registroForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    userID: Number(document.getElementById("userID").value),
    nombre1: document.getElementById("nombre1").value,
    nombre2: document.getElementById("nombre2").value,
    apellido1: document.getElementById("apellido1").value,
    apellido2: document.getElementById("apellido2").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value.trim()
  };

  try {
    const response = await fetch("https://w2mb06yk3h.execute-api.us-east-1.amazonaws.com/default/crubBaseDatosDynamoRegistro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    document.getElementById("mensaje").innerText =
      result.message || "Usuario registrado correctamente ✅";

  } catch (error) {
    console.error("Error:", error);
    document.getElementById("mensaje").innerText = "❌ Error al registrar el usuario.";
  }
});
