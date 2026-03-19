import React, { useState } from 'react'

const Todo = () => {
    const [taskName , setTaskName] = useState('');
    const [task , setTask]  = useState([])

    function handleTask(){
        setTask(
            [...task ,{ name : taskName , status : false , id : Date.now()}]
        )
        setTaskName('');
    }

    function handleStatus(id){
        let editTaskStatus = task.map((ele)=>{
            return ele.id === id ? 
            {...ele , status : !ele.status} : ele
        })
        setTask(editTaskStatus)
    }
    function handleDelete(id){
        let nonDeletedTask = task.filter((ele)=>ele.id !== id)
        alert('Task Deleted succesFully ')
        setTask(nonDeletedTask)
    }
    function handleEdit(id){
        let newText = prompt('Edit your task')
        let nonDeletedTask = task.map((ele)=>ele.id == id ? {...ele , name : newText} : ele )

        setTask(nonDeletedTask)
    }
  return (
    <div>
      <input type="text" 
         placeholder='Enter Task Name....'
         value={taskName}
         onChange={(e)=>setTaskName(e.target.value)}
      />
      <button onClick={handleTask}>Add Task</button>
      {
        task.map((ele)=>(
            <div key={ele.id}>
                <h3
                 style={{ textDecoration :  ele.status ? 'line-through' : 'none' , cursor : 'pointer'}}
                 onClick={()=>handleStatus(ele.id)} key={ele.id}>{ele.name}</h3>

                 <button onClick={()=>handleDelete(ele.id)} >Delete Task</button>
                 <button onClick={()=>handleEdit(ele.id)} >Edit Task</button>
            </div>
        ))
      }
    </div>
  )
}

export default Todo
