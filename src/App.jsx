import { useRef } from 'react'
import './App.css'
import Encode from './Encode'
import QRCode from 'qrcode'
function App() {
  const convas = useRef(null);
  const handleCanvas = (data) => {
    QRCode.toCanvas(convas.current,
      data,
      { toSJISFunc: QRCode.toSJIS }, function (error) {
        if (error) alert(error)
      })
  }
  return (
    <div className="App">
      <h1>二维码生成</h1>
      <Encode handleCanvas={handleCanvas} />
      <canvas id="canvas" ref={convas}></canvas>
    </div>
  )
}

export default App
