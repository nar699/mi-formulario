import { useState } from "react"
import axios from "axios"

function App() {
  const [nombre, setNombre] = useState("")
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Aquí más adelante llamaremos a tu .NET
    // Por ahora solo mostramos el nombre
    console.log("Nombre enviado:", nombre)
    setEnviado(true)
  }

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", fontFamily: "Arial" }}>
      <h1>Formulario simple</h1>

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
          <button type="submit" style={{ padding: "8px 24px" }}>
            Enviar
          </button>
        </form>
      )}
    </div>
  )
}

export default App