import PropTypes from 'prop-types';
import '../styles/Boton.css'

const Boton = ({ texto, esBotonClic, manejarClic }) => {
  return (
    <button className={`boton ${esBotonClic ? 'boton-clic' : 'boton-reiniciar'}`} onClick={manejarClic} >
      {texto}
    </button>
  );
}

Boton.propTypes = {
  texto: PropTypes.string.isRequired,
  esBotonClic: PropTypes.bool.isRequired,
  manejarClic: PropTypes.func.isRequired,
}

export default Boton;