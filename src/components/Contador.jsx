import PropTypes from 'prop-types';
import '../styles/Contador.css'

const Contador = ({ value }) => {

  return (

    <div className='counter'>
      <h1> { value } </h1>
    </div>

  )
}

Contador.propTypes = {
  value : PropTypes.number.isRequired,
}

export default Contador;