import {useState} from 'react';

const Ejercicio3 = (props) => {
    const [msj, setMsj] = useState("");
    const {titulo}=props;
    const handleClick = () => {
setMsj("(from changed state)")
    }
  return (
    <>
    <h1>Hello {titulo} {msj}!</h1>
    <button onClick={handleClick}>
        Click me
    </button>
    </>
  )
}

export default Ejercicio3;