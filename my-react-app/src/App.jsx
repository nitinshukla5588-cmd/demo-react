import './App.css'

function App() {
  const name= "JOHN";
  let x=80
  let y=50  
  return (
    <>
      <h1>User variable with jsx</h1>
      <h3>Value of variable is {name}</h3>
      <h4> output={x + y}</h4>
    </>   
  )
}
export default App