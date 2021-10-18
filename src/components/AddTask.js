import { useState } from 'react'

const AddTask = ( {onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text)
        {
            alert('Please enter a valid task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control' key='text-input'>
                <label>Task</label>
                <input type='text' placeHolder='add task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control' key='date-input'>
                <label>Day and Time</label>
                <input type='text' placeHolder='day and time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
