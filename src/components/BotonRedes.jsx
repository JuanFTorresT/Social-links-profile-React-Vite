import PropTypes from 'prop-types';
export function BotonRedes(props) {
    
    return (
        
        <a href={props.redes.github.link} target="_blank" rel="noopener noreferrer">{props.redes.github.texto}</a>
    );
}
BotonRedes.propTypes={
    redes:PropTypes.shape({
        github:PropTypes.shape({
            texto:PropTypes.string,
            link:PropTypes.string,
        }),
    }),
};

