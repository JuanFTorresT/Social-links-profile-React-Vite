import React from "react";
import { FotoPerfil } from './FotoPerfil';
import { InfoPerfil } from './InfoPerfil';
import { BotonRedes } from './BotonRedes';
import PropTypes from 'prop-types';

export function TarjetaPersona(props) {
    return(
        <React.StrictMode>
        <FotoPerfil/>

        <InfoPerfil 
        persona= {{
            nombre:props.persona.nombre,
            apellido: props.persona.apellido,
            pais:props.persona.pais,
            ciudad: props.persona.ciudad,
            descripcion: props.persona.descripcion,
        }}
        />
        
        <BotonRedes redes={props.redes}/>
        
        
        </React.StrictMode>
    );
}

TarjetaPersona.propTypes = {
    persona: PropTypes.shape({
        nombre: PropTypes.string,
        apellido: PropTypes.string,
        pais: PropTypes.string,
        ciudad: PropTypes.string,
        descripcion: PropTypes.string,
      }),
};