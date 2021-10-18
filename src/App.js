import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'


function App() {
  const [tasks, setTasks] = useState(
    [
        { 
            id: 1,
            text: 'Task 1',
            day: 'Feb 2 at 6pm',
            reminder: true,
        },
        { 
            id: 2,
            text: 'Meeting',
            day: 'Feb 3 at 6pm',
            reminder: true,
        },
        { 
            id: 3,
            text: 'Doctor',
            day: 'May 2 at 6pm',
            reminder: true,
        }
    ]
  )

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <Header title= 'Hello'/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No Tasks')}
    </div>
  );
}

export default App;