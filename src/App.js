import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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
            reminder: false,
        }
    ]
  )

  const [showAddTask, setShowAddTask] = useState(false)

  // Add a new task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  // Toggle reminder
  const toggleReminder = (id) => {
   setTasks(
     tasks.map((task) => 
       task.id === id ? {...task, reminder: !task.reminder} : task)
   )
  }
  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        (<Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder} />) : 
        ('No Tasks')}
    </div>
  );
}

export default App;