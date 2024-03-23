import { ReactNode, createContext } from "react";



export type TodosProviderProps ={
    childen:ReactNode
}

export  type Todo ={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;

}


export type TodosContext = {
    todos:Todo[];
    handleAddToDo:(task:string)=> void;

    toggleTodoAsCompleted:(id:String) =>void;
}

export const todosContext=  createContext<TodosContext | null >(null)




export  const TodosProvider =({children}:TodosProviderProps) =>{

    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo =(task:string){
        setTodos((prev)=>{
            const newTodos :Todo[] =[
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt: new Date()
                }

                ...prev
            ]

            return newTodos
        })

        // // 

        const toggleTodoAsCompleted = (id)=>{
            setTodos((prev)=>{
                let newTodos = prev.map ((todo)=>{
                    if(todo.id === id){
                        return {...todo, completed:!todo.completed}
                    }
                })

                return newtodo
            })
        }

    }
    return <todosContext.Provider value ={{todo,handleAddToDo}}>
        {children}
    </todosContext.Provider>
}



export const useTodos =() =>{
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error ("useTodos used outside of Provider")
    }

    return todosConsumer;
}




//provider

// conumer => useContextHook