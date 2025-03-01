import { ChevronRightIcon, Trash2Icon } from 'lucide-react';
import './Tasks.css'
import { useNavigate } from 'react-router-dom';

function Tasks({tasks, onTasksClick, onDeleteTasksClick}){
    const navigate = useNavigate()

    function onSeeDetailsClick(tasks) {
        const query = new URLSearchParams()
        query.set("title", tasks.title)
        query.set("description", tasks.description)
        navigate(`/task?${query.toString()}`)
    }

    return(
        <ul>
            {tasks.map((tasks) =>(
                <li key={tasks.id} className="TasksList">
                    <button 
                        id='buttomTitle' 
                        onClick={()=> onTasksClick(tasks.id)}
                        className={tasks.isCompleted ? "TaskConcluida" : ""}
                    >
                        {tasks.title}
                    </button>



                    <button onClick={() => onSeeDetailsClick(tasks)} >
                        <ChevronRightIcon />
                    </button>





                    <button
                        onClick={()=> onDeleteTasksClick(tasks.id)}                    
                    >
                        <Trash2Icon />
                    </button>
                </li>

                
            
            ))}
            
           
        </ul>
    )
}
export default Tasks;