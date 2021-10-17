import {useState} from 'react'

const Tasks = () => {

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

    return (
        <>
        {
            tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
             ))
        }
        </>
    )
}

export default Tasks
