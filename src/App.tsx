
import Addtodo from "./Component/Addtodo"
import Navbar from "./Component/Navbar"
import Todos from "./Component/Todos"
import "./App.css"

const App = () => {
  return (
   <main>
    <h1> TODO REACT + TYPESCRIPT </h1>
    <Navbar/>
    <Addtodo/>
    <Todos/>
   </main>
  )
}

export default App
