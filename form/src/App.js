import {useState} from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {id: 52761, name: "Record React Lectures", completed: true}, 
    {id: 78265, name: "Edit React Lectures", completed: false}, 
    {id: 83916, name: "Watch Lectures", completed: false},
    {id: 86391, name: "Watched Lectures", completed: false}
]);
  return (
    <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
      <Footer />
    </div>
  );
}

export default App;
