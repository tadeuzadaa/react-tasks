import { useState } from 'react';
import './AddTasks.css';

function AddTasks({onTasksAddSubmit}){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return(
        <div>
        <input 
            type="text" 
            placeholder="Digite o título da tarefa"
            value = {title}
            onChange={(event) => setTitle(event.target.value)}
        />

        <input 
            type="text" 
            placeholder="Digite a descrição da tarefa"
            value = {description}
            onChange={(event) => setDescription(event.target.value)}
        /> 
        
        <br/>

        <button
            onClick={()=> {
                if(!title.trim() || !description.trim()){
                    alert("Preencha os campos corretamente!")
                } else
                onTasksAddSubmit(title, description),
            setTitle(""),
            setDescription("")
        }}
        >
            Adicionar Tarefa
        </button>
        </div>
    )
}
export default AddTasks;