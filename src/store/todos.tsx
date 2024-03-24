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

    const [todos, setTodos] = useState<Todo[]>(()=>{
        try{
            const newTodos= localStorage.getItem("todos") || "[]"
            return JSON.parse(newTodos) s Todo []
        } catch(error){
            return []
        }
    })



    const handleAddTodo =(task:string){
        setTodos((prev:any)=>{
            const newTodos :Todo[] =[
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt: new Date()
                }

                ...prev
            ]

            localStorage.setItem("todos",JSON.stringify(newTodos))

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




                // delete the individual data
                

                return newTodos
            })
        }


        // delete the individual data

        const handleDeleteTodo =(id:string) =>{
            setTodos((prev)=>{
                let newTodos = prev.filter((filterTodo) => filterTodo.id === id)

                return newTodos;


            })
        }

    }
    return <todosContext.Provider value ={{todo,handleAddToDo,toggleTodoAsCompleted}}>
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