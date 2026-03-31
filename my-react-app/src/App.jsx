import './App.css'

function App() {
  function get(){
    return "NITIN SHUKLA"
  }
  function sum(a,b){
    return a+b
  }
  const name= "JOHN";
  let x=80
  let y=50  
  return (
    <div>
      <h1>User variable with jsx</h1>
      <h2>Value of variable is {name}</h2>
      <h3> output={x + y}</h3>
      <h4>my name is {get()}</h4>
      <h5>Sum is {sum(100, 123)}</h5>
    </div>   
  )
}
export default App