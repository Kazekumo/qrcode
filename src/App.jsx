import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Encode from './Encode'
import EncodeFile from './EncodeFile'
import QRCode from 'qrcode'
function App() {
  const [state, setState] = useState(0)
  const convas = useRef(null);
  const handleCanvas = (data) => {
    QRCode.toCanvas(convas.current,
      data,
      { toSJISFunc: QRCode.toSJIS }, function (error) {
        console.log(data);
        if (error) alert(error)
      })
  }
  return (
    <div className="App">
      <div>
        <a onClick={() => setState(0)}>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a onClick={() => setState(1)}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>二维码生成</h1>
      {state == 0
        ? <Encode handleCanvas={handleCanvas} />
        : <EncodeFile handleCanvas={handleCanvas} />
      }
      <canvas id="canvas" ref={convas}></canvas>
    </div>
  )
}

export default App
