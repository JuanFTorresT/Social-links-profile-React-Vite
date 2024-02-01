import React from 'react'
import ReactDOM from 'react-dom/client'
import { TarjetaPersona } from "./components/TarjetaPersona";
import "./index.css";

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
          link: "#"
        },
        facebook:{
          texto:"Frontend Mentor",
          link:"#"
        },
        linkedin:{
          texto:"LinkedIn",
          link:"#"
        }
        ,
        twitter:{
          texto:"Twitter",
          link:"#"
        }
        ,
        instagram:{
          texto:"Instagram",
          link:"#"
        }
      }}

    />
    
    
  </React.StrictMode>,
)
