import PropTypes from 'prop-types';
export function InfoPerfil(props) {
    return(
        <div>
            <h2>{props.persona.nombre} {props.persona.apellido}</h2>
            <p>{props.persona.ciudad}, {props.persona.pais}</p>
            <p>{props.persona.descripcion}</p>
        </div>
    );

    
}

InfoPerfil.propTypes = {
    persona: PropTypes.shape({
        nombre: PropTypes.string,
        apellido: PropTypes.string,
        pais: PropTypes.string,
        ciudad: PropTypes.string,
        descripcion: PropTypes.string,
    }),
};