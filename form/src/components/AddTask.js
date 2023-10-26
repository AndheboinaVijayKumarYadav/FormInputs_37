import './AddTask.css';
import {useState} from 'react';

export const AddTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue] = useState('');
    const handleChange = (e) => {
        setTaskValue(e.target.value);
    }
    const handleReset = () => {
        setTaskValue('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 100000) ,
            name: taskValue,
            completed: false,
        }
        setTasks([...tasks, task])
        handleReset();
    }
  return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task Name:</label>
                <input onChange={handleChange} type="text" name="task" id="task" placeholder="Enter the task name ..." maxLength={23} autoComplete="off" value={taskValue}/>
                <button type="submit">Add Task</button>
                <span onClick={handleReset} className="reset">Reset</span>
            </form>
        </section>
  )
}
