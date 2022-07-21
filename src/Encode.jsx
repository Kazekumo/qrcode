import { useEffect, useState } from 'react'

function Encode(props) {
  const { handleCanvas } = props;
  const [value, setValue] = useState('')
  const onChange = (event) => {
    setValue(event.target.value);
  }
  useEffect(() => {
    if (!value) {
      return;
    }
    handleCanvas(value)
  }, [value]);
  return (
    <div>
      <textarea value={value} onChange={onChange} rows="7" cols="50" placeholder="请输入字符..."></textarea>
      <br />
    </div>
  )
}

export default Encode;
