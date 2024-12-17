import { useState } from 'react'
import nat from './imagenes/natacion.jpg'
import ten from './imagenes/tenis.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h2>Datos personales</h2>
        <p>Joseph Aaron Salazar Guachambala</p>
        <p>Juan unigarro y vicente alvares</p>
        <p>0987583831</p>
        <p>joseph.salazar@epn.edu.ec</p>

        <h2>Lista de estudios</h2>
        <p>Bachillerato general unificado </p>
        <h2>Lista de erramientas ulitizadas</h2>
        <ul>
          <li>css</li>
          <li>html</li>
          <li>VS Code</li>
          <li>Java script</li>
          <li>React</li>
        </ul>
      </div>
      <div className='deportes'>
        <div className='d1'>
          <img src={nat}/>
          <h3>natacion</h3>
        </div>
        <div className='d2'>
        <img src={ten}/>
        <h3>tenis</h3>
        </div>
        <div className='d3'>
        
        </div>
        <div className='d4'>

        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
