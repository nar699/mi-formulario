import { useState } from "react"

function App() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const respuesta = await fetch("https://mi-proyecto-production-a43a.up.railway.app/api/formulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: nombre, email: email })
      })

      if (!respuesta.ok) throw new Error("Error al enviar")

      const datos = await respuesta.json()
      console.log(datos)
      setEnviado(true)
    } catch (err) {
      setError("Hubo un problema al enviar el formulario. Inténtalo de nuevo.")
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", fontFamily: "Arial" }}>
      <h1>Formulario BETA NARCIS JUDIT</h1>

      {enviado ? (
        <p>✅ ¡Hola, {nombre}! Formulario enviado correctamente.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label>Nombre:</label>
            <br />
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Escribe tu nombre"
              required
              style={{ padding: "8px", width: "100%", marginTop: "4px" }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label>Email:</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Escribe tu email"
              required
              style={{ padding: "8px", width: "100%", marginTop: "4px" }}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" style={{ padding: "8px 24px" }}>
            Enviar
          </button>
        </form>
      )}
    </div>
  )
}

export default App