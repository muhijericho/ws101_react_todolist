import './Todolist.css'
import React,{useState} from 'react'

function Todolist(){
    const [task,setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputchange(event){
        setNewTask(event.target.value);


    }
    function addTask(){
        if(newTask.trim()!== ""){
            setTask(t =>[...t,newTask]);
            setNewTask("");
        }
 
    }
    function deleteTask(index){
        const updateTask = task.filter((_,i) =>i !== index);
        setTask(updateTask);

    }
    function moveTaskDown(index){
        if (index < task.length - 1){
            const updateTask = [...task];
            [updateTask[index],updateTask[index + 1]] =
            [updateTask[index + 1],updateTask[index]];
            setTask(updateTask);

        }
 
    }
    function moveTaskUp(index){
        if (index > 0){
            const updateTask = [...task];
            [updateTask[index],updateTask[index - 1]] =
            [updateTask[index - 1],updateTask[index]];
            setTask(updateTask);

        }
 
 
    }
 
    return(
    <div className='to-do-list'>
         <h1 className='todo'> To-Do-List</h1>
         <div className='input'>
             <input 
                 type = "text"
                 placeholder='Enter a Task....'
                 value={newTask}
                 onChange={handleInputchange}/>
             <button className='add-button'
                 onClick={addTask}>
                 Add
             </button>    
         </div>
         <ol>
             {task.map((task,index) =>
                <li key={index}>
                    <span className='result'>{task}</span>
                    <button className='delete-button'
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button className='move-button'
                        onClick={() => moveTaskUp(index)}>
                        Up
                    </button>
                    <button className='move-button'
                        onClick={() => moveTaskDown(index)}>
                        Down
                    </button>
                </li>
             )}
         </ol>
    </div>
 
     );

}

  

export default Todolist;
