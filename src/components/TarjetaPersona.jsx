import { FotoPerfil } from './FotoPerfil';
import { InfoPerfil } from './InfoPerfil';
import { BotonRedes } from './BotonRedes';
import PropTypes from 'prop-types';
import "../components/tarjeta-persona.css"

export function TarjetaPersona(props) {
    const { redes } = props;
    return(
        <div className='tarjeta'>
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
        
        {Object.keys(redes).map((red, index) => (
        <BotonRedes key={index} redes={redes[red]} />
      ))}
        
        
        </div>
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
    redes: PropTypes.shape({
        github: PropTypes.shape({
            texto: PropTypes.string,
            link: PropTypes.string,
        }),
        facebook: PropTypes.shape({
            texto: PropTypes.string,
            link: PropTypes.string,
        }),
    }),
};