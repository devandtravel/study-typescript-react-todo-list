import { useState } from 'react'

export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        event.key === 'Enter' && console.log(title)
        setTitle('')
    }
    return (
        <div className='input-field mt2'>
            <input
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                value={title}
                type='text'
                id='title'
                placeholder='Activity title'
            />
            <label htmlFor='title' className='active'>
                Enter the activity title
            </label>
        </div>
    )
}
