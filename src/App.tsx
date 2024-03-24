
import Addtodo from "./Component/Addtodo.tsx"
import Todos from "./Component/todos.tsx"

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
