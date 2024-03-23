import {useTodos} from '../store/todos'
const Todos = () => {
    const [todos] = useTodos();
    let filterData = todos;
  return (
 <ul>
    {
        filterData.map((todo:)=>{
            return <li key ={todo.id}>
                <input type ="checkbox" id ={`todo- ${todo.id}`}
                checked = {todo.completed}
                onChange ={()=> toggleTodoAsCompleted(todo.id)}
                />
                <label  htmlFor ="">  {todo.task}
                {
                    todo.completed && (
                        <button type = 'button' onClick ={() => handleDeleteTodo(todo.id)}> Deleted </button>
                    )
                }
                </label>

            </li>

        })
    }
 </ul>
  )
}

export default Todos