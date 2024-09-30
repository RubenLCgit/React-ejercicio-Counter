import { useState } from 'react';
import './App.css'
import Boton from './components/Boton';
import counterLogo from './images/logo.png'
import Contador from './components/Contador';

const App = () => {

  const [Counter, setCounter] = useState(0);

  const manejarClic = () => {
    setCounter(Counter + 1);
  };

  const manejarReiniciar = () => {
    setCounter(0)
  };

  return (
    <>
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img
            className='counterLogo'
            src={ counterLogo }
            alt='logo'
          />
        </div>
        <div className='counterBody' >
          <h1 className='title'>CounterApp</h1>
             <Contador value={ Counter } />
          <div className='grupoBotones'>
            <Boton texto='Clic' esBotonClic={ true } manejarClic={manejarClic} />
            <Boton texto='Reiniciar' esBotonClic={ false } manejarClic={manejarReiniciar} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
