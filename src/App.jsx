import './App.css';
import  Ejercicio1  from './components/ejercicio1/Ejercicio1';
import  Ejercicio2  from './components/ejercicio2/Ejercicio2';

const App = () => {
  return (
    <>
    <h1>Mis ejercicios del TP de REACT</h1>
    {/*<Ejercicio1/>*/}
    <Ejercicio2 titulo="my friend"/>
    </>
  )
}

export default App