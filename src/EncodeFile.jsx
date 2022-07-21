import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
const readFileAsBytes = async (file) => {
  const buffer = await file.arrayBuffer();
  let byteArray = new Uint8ClampedArray(buffer);
  return byteArray;
}

function EncodeFile(props) {
  const { handleCanvas } = props;
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length == 0) {
      return;
    }
    const bytes = await readFileAsBytes(acceptedFiles[0]);
    const data = [{ data: bytes, mode: 'byte' }]
    handleCanvas(data);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    onDrop
  })
  return (
    <div>
      <div {...getRootProps()} style={{ margin:'0 auto',border: '1px solid black', height: 100, width: 380 }}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p></p> :
            <p>拖动或点击上传文件...</p>
        }
      </div>
    </div>
  )
}

export default EncodeFile;
