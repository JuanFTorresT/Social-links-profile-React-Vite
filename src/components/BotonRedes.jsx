import PropTypes from 'prop-types';
import "./boton-redes.css"
export function BotonRedes(props) {
    
    return (
        
        <a href={props.redes.link} target="_blank" rel="noopener noreferrer">{props.redes.texto}</a>
    );
}
BotonRedes.propTypes={
    redes:PropTypes.shape({
        link:PropTypes.string,
        texto:PropTypes.string,
    }),
};

