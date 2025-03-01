import Tasks from './components/Tasks.jsx'
import AddTasks from './components/AddTasks.jsx'
import { useEffect, useState } from 'react';
import './App.css'


function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  )

    function onTasksClick(taskId){
      const newTasks = tasks.map((tasks) => {
        if (tasks.id == taskId){
          return{...tasks, isCompleted: !tasks.isCompleted}
        }

        return tasks;
      });
        setTasks(newTasks);
      }

    function onDeleteTasksClick(taskId){
      const newTasks = tasks.filter(task => task.id !== taskId); 
        
      setTasks(newTasks);
      }

    function onTasksAddSubmit(title, description){
      const newTasks = {
        id: tasks.length + 1,
        title: title,
        description: description,
        isCompleted: false,
      };
      setTasks([... tasks, newTasks]);
      }

  return (
    <><h1>Gerenciador de Tarefas</h1>
    <div id='MainConatiner'>
      <h2>Add Tasks</h2>
      <AddTasks
        onTasksAddSubmit={onTasksAddSubmit} />
      <h2>My Tasks</h2>
      <Tasks
        tasks={tasks}
        onTasksClick={onTasksClick}
        onDeleteTasksClick={onDeleteTasksClick} />
    </div></>
  );
};

export default App;