import { useState } from 'react'
import './App.css'
function App() {
  const [data, setData] = useState("50000")
  const [toggle, setToggle] = useState(false)
  function fun(){
    setData("40000")}
    function tog(){
      setToggle(!toggle)
    }
  return (
    <>
    <h1>STATE OF VARIABLE FOR REACT</h1>
        <button onClick={fun}> WITHDRAW 10K </button>
    <h1>{data}</h1>
    <h1>Status: {toggle ? 'ON' : 'OFF'}</h1>
      <button onClick={tog}> TOGGLE </button>
      <textarea placeholder='WRITE SOMETHING'></textarea>
    </>
  )
}
export default App