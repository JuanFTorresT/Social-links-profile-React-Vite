import React from 'react'
import ReactDOM from 'react-dom/client'
import { TarjetaPersona } from "./components/TarjetaPersona";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TarjetaPersona 
      persona= {{
          nombre:'Jessica',
          apellido: 'Randall',
          pais:'United Kingdom',
          ciudad: 'London',
          descripcion: '"Front-end developer and avid reader"'
      }}
      redes = {{
        github: {
          texto:"GitHub",
          link: "https://www.google.com/"
        },
        facebook:{
          texto:"facebook",
          link:"facebook.com"
        }
      }}

    />
  </React.StrictMode>,
)
