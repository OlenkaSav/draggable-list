import React, {useState} from 'react';
import Field from './Components/Field/Field'
import ScaleControl from './Components/ScaleControl/ScaleControl';
import './App.css';

function App() {
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  // const [center, setCenter]= useState()
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCenter({ x: 0, y: 0 })} className="center">	&#8251;</button>
        <ScaleControl scale={scale} setScale={setScale}  />
      </header>
      <Field position={center} setPosition={setCenter} scale={scale} />

    </div>
  );
}

export default App;
